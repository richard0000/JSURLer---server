import crypto from "crypto";

export const generateSlug = () => {
  return crypto.randomBytes(10).toString('hex');
};
