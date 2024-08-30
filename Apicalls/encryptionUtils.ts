import CryptoJS from "crypto-js";

const SECRET_KEY = "4a9wmbKr6nwsV7dYLENbnlpWCmaOQ8c3BTt/5QG+QmY=";
const IV = "abcdef9876543210abcdef9876543210";

export function encrypt(text: string): string {
  const key = CryptoJS.enc.Base64.parse(SECRET_KEY);
  const ivWordArray = CryptoJS.enc.Hex.parse(IV);

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

export function decrypt(encryptedData: string): string {
  const key = CryptoJS.enc.Base64.parse(SECRET_KEY);
  const ivWordArray = CryptoJS.enc.Hex.parse(IV);

  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);

  return decrypted;
}