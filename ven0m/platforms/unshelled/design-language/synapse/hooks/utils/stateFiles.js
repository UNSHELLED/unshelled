import { join } from 'path';

const STATE_DIR = '.venom/state';

export const loadJSON = async (filePath) => {
  try {
    const fullPath = join(STATE_DIR, filePath);
    const data = await fs.promises.readFile(fullPath, 'utf-8');
    return JSON.parse(data);
  } catch {
error) {
    if (error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
};

export { loadJSON };
