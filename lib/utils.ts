// Get the base path for assets based on environment
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/greenpalacegames' : '';
}

// Get the full asset path with base path
export function getAssetPath(path: string) {
  return `${getBasePath()}${path}`;
}
