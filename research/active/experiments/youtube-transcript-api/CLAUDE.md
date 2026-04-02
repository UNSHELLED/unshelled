# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## VENOM Identity

This project operates under VENOM architecture. Answer first. No preamble. Complete code only — no TODOs, no placeholders. Match existing patterns. Push back when quality is at stake.

Owner: Kariem Seiam | Timezone: Africa/Cairo | Languages: AR/EN (match user's language)

---

## Development Commands

```bash
# Install dependencies
poetry install --with test,dev

# Run tests
poe test                           # All tests
pytest youtube_transcript_api/test/test_api.py                    # Single file
pytest youtube_transcript_api/test/test_api.py::test_fetch       # Single test

# Quality checks (CI requires all to pass)
poe format                         # Format with ruff
poe lint                           # Lint with ruff
poe coverage                       # Run tests + coverage (requires 100%)
poe precommit                      # Run format + lint + coverage
```

---

## Architecture Overview

### Core Flow

```
YouTubeTranscriptApi.fetch(video_id)
    └──> TranscriptListFetcher.fetch(video_id)
            ├──> _fetch_video_html() [handles consent cookie if needed]
            ├──> _extract_innertube_api_key(html)
            ├──> _fetch_innertube_data(video_id, api_key) [POST to youtubei/v1/player]
            └──> _extract_captions_json(innertube_data)
                    └──> TranscriptList.build()
                            ├──> manually_created_transcripts
                            └──> generated_transcripts
```

### Module Structure

| Module | Purpose |
|--------|---------|
| `_api.py` | `YouTubeTranscriptApi` — main entry point, creates requests.Session |
| `_transcripts.py` | Core: `TranscriptListFetcher`, `TranscriptList`, `Transcript`, `FetchedTranscript`, `_TranscriptParser` |
| `_errors.py` | Exception hierarchy (all inherit from `YouTubeTranscriptApiException`) |
| `_settings.py` | Constants: YouTube URLs, API context, user agents |
| `formatters.py` | Output formatters: JSON, Text, SRT, WebVTT, PrettyPrint |
| `proxies.py` | `GenericProxyConfig`, `WebshareProxyConfig` for IP ban workaround |
| `_cli.py` | CLI implementation using argparse |

### Key Patterns

1. **Session reuse**: `YouTubeTranscriptApi` creates a `requests.Session` for cookie persistence and connection pooling
2. **Privacy**: Internal classes prefixed with `_` (e.g., `_TranscriptParser`, `_TranslationLanguage`)
3. **Test fixtures**: Static responses in `test/assets/` with `.static` extension, used via httpretty
4. **Error messages**: Exception `cause` property provides user-facing explanations
5. **Type hints**: Extensive use of `typing` module (`List`, `Dict`, `Optional`, `Iterable`)
6. **Dataclasses**: `FetchedTranscriptSnippet` and `FetchedTranscript` use `@dataclass`
7. **ABC pattern**: `ProxyConfig` and `Formatter` are abstract base classes for extensibility

### Public API

```python
from youtube_transcript_api import YouTubeTranscriptApi

# Basic fetch
ytt_api = YouTubeTranscriptApi()
transcript = ytt_api.fetch(video_id)

# With languages or formatting
transcript = ytt_api.fetch(video_id, languages=['de', 'en'], preserve_formatting=True)

# List available transcripts
transcript_list = ytt_api.list(video_id)
transcript = transcript_list.find_transcript(['en'])
generated = transcript_list.find_generated_transcript(['en'])

# Translate
translated = transcript.translate('de').fetch()

# With proxy (for IP bans)
from youtube_transcript_api.proxies import GenericProxyConfig
ytt_api = YouTubeTranscriptApi(
    proxy_config=GenericProxyConfig(
        http_url="http://user:pass@proxy:port",
        https_url="https://user:pass@proxy:port"
    )
)
```

---

## Known Limitations

- **Cookie authentication**: Temporarily disabled due to YouTube API changes
- **Age-restricted videos**: Cannot access without authentication (broken cookie auth)
- **PO tokens**: Some videos require PO tokens (new YouTube requirement)

---

## Test Structure

- Uses `httpretty` for HTTP mocking
- Static fixtures in `test/assets/` (HTML, JSON responses)
- Coverage requirement: 100%
- `__main__.py` is excluded from coverage
