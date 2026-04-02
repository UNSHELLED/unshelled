"""
Utility script to extract YouTube video ID from URL and fetch transcript.
"""
import re
import os
import json
from pathlib import Path
from urllib.parse import urlparse, parse_qs
from youtube_transcript_api import YouTubeTranscriptApi


def extract_video_id(url: str) -> str:
    """
    Extract video ID from various YouTube URL formats.
    
    Supports:
    - https://www.youtube.com/watch?v=VIDEO_ID
    - https://youtu.be/VIDEO_ID
    - https://www.youtube.com/embed/VIDEO_ID
    - https://m.youtube.com/watch?v=VIDEO_ID
    - Just the video ID itself
    
    Args:
        url: YouTube URL or video ID
        
    Returns:
        Video ID string
    """
    # If it's already just a video ID (11 characters, alphanumeric, hyphens, underscores)
    if re.match(r'^[a-zA-Z0-9_-]{11}$', url):
        return url
    
    # Parse the URL
    parsed = urlparse(url)
    
    # Handle youtu.be short URLs
    if parsed.netloc in ['youtu.be', 'www.youtu.be']:
        return parsed.path.lstrip('/')
    
    # Handle standard YouTube URLs
    if 'youtube.com' in parsed.netloc or 'youtu.be' in parsed.netloc:
        # Try to get from query parameters
        query_params = parse_qs(parsed.query)
        if 'v' in query_params:
            return query_params['v'][0]
        
        # Try to get from path (for embed URLs)
        path_parts = parsed.path.split('/')
        if 'embed' in path_parts:
            embed_index = path_parts.index('embed')
            if embed_index + 1 < len(path_parts):
                return path_parts[embed_index + 1]
    
    # If no pattern matches, return the original string (might already be an ID)
    return url


def main():
    """Example usage."""
    # Your YouTube URL
    youtube_url = "https://www.youtube.com/watch?v=U1_nzjWUpL4"
    
    # Extract video ID
    video_id = extract_video_id(youtube_url)
    print(f"Extracted Video ID: {video_id}")
    print(f"Original URL: {youtube_url}\n")
    
    # Create results folder
    results_folder = Path("results")
    results_folder.mkdir(exist_ok=True)
    
    # Use the API
    try:
        ytt_api = YouTubeTranscriptApi()
        
        # First, list available transcripts
        print("Checking available transcripts...")
        transcript_list = ytt_api.list(video_id)
        
        print("\nAvailable transcripts:")
        for transcript in transcript_list:
            print(f"  - {transcript.language} ({transcript.language_code}) - "
                  f"{'Generated' if transcript.is_generated else 'Manually Created'}")
        
        # Try to fetch transcript (will use first available if English not found)
        print("\nFetching transcript...")
        try:
            # Try English first, then any available language
            transcript = ytt_api.fetch(video_id, languages=['en', 'ar'])
        except:
            # If that fails, get the first available transcript
            transcript = transcript_list.find_transcript([t.language_code for t in transcript_list]).fetch()
        
        print(f"\nVideo ID: {transcript.video_id}")
        print(f"Language: {transcript.language} ({transcript.language_code})")
        print(f"Is Generated: {transcript.is_generated}")
        print(f"\nTotal snippets: {len(transcript)}")
        
        # Save transcript to files
        base_filename = results_folder / video_id
        
        # Save as text file
        text_file = base_filename.with_suffix('.txt')
        with open(text_file, 'w', encoding='utf-8') as f:
            f.write(f"YouTube Video Transcript\n")
            f.write(f"{'='*50}\n")
            f.write(f"Video ID: {transcript.video_id}\n")
            f.write(f"Language: {transcript.language} ({transcript.language_code})\n")
            f.write(f"Is Generated: {transcript.is_generated}\n")
            f.write(f"Total snippets: {len(transcript)}\n")
            f.write(f"{'='*50}\n\n")
            
            for snippet in transcript:
                f.write(f"[{snippet.start:.2f}s] {snippet.text}\n")
        
        print(f"\nSaved transcript to: {text_file}")
        
        # Save as JSON file
        json_file = base_filename.with_suffix('.json')
        transcript_data = {
            'video_id': transcript.video_id,
            'language': transcript.language,
            'language_code': transcript.language_code,
            'is_generated': transcript.is_generated,
            'transcript': [
                {
                    'start': snippet.start,
                    'duration': snippet.duration,
                    'text': snippet.text
                }
                for snippet in transcript
            ]
        }
        
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(transcript_data, f, ensure_ascii=False, indent=2)
        
        print(f"Saved transcript (JSON) to: {json_file}")
        
        # Print first 3 snippets (with encoding handling)
        print(f"\nFirst 3 snippets:")
        try:
            for snippet in transcript[:3]:
                print(f"  [{snippet.start:.2f}s] {snippet.text}")
        except UnicodeEncodeError:
            print("  (Unable to display non-ASCII characters in console)")
            print("  Check the saved files for full transcript content.")
        
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()

