import { SignJWT, jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode('minhasenha');

export async function createToken(userData) {
    const token = await new SignJWT(userData)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1hr')
      .sign(secretKey);
    localStorage.setItem('token', token);
    return token;
  }
  export async function verifyToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const { payload } = await jwtVerify(token, secretKey);
      return payload;
    } catch (err) {
      alert('Seu Token de acesso expirou efetue login novamente!', err);
      return null;
    }
  }
