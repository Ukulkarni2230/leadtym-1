// utils/crypto.js
import CryptoJS from "crypto-js";

// Replace this with your generated 32-byte hex secret key
const secretKey =
  "fcddc2728e089d0182eb33cc228b3fd46b9c0f82a9bbc8901c0668415b9461a2";

// Function to encrypt data
export function encrypt(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Function to decrypt data
export function decrypt(data) {
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
}
