// Authentication Service
import { fetchApi } from './api.js';

export const AuthService = {
  login: async (credentials) => {
    console.log('Authenticating user...');
    return await fetchApi('/auth/login', { method: 'POST', body: credentials });
  },
  logout: () => {
    console.log('Logging out...');
  }
};
