import { jwtDecode } from 'jwt-simple';

export function decodeToken(token) {
  try {
    const decoded = jwtDecode(token);
    console.log('Decoded JWT:', decoded);
    return decoded;
  } catch (err) {
    console.error('Error decoding JWT:', err);
    return;
  }
}