import { randomBytes } from 'crypto';

// Generate 32 bytes of random data and encode it in base64
const secret = randomBytes(32).toString('base64');

console.log(secret);