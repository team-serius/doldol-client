import jwt from 'jsonwebtoken';

// Decode the JWT token and check the expiration
export const isTokenExpired = (token: string) => {
  try {
    const decodedToken: any = jwt.decode(token);

    if (!decodedToken) {
      // Invalid token format
      return true;
    }

    const expirationTime = decodedToken.exp;
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    return currentTime > expirationTime;
  } catch (error) {
    // Error while decoding token
    console.error('Error decoding JWT token:', error);
    return true;
  }
};
