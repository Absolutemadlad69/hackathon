// API Base Service
const API_BASE_URL = process.env.API_URL || 'https://api.peoplehub.internal/v1';

export async function fetchApi(endpoint, options = {}) {
  console.log(`Fetching ${API_BASE_URL}${endpoint}`);
  return { status: 200, data: {} };
}
