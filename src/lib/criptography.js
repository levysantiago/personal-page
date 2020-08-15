// Nodejs encryption with CTR
const crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "=k$rXkj_lE:j24@j23j|p3Rj1+3rkjq*kjd%01-j";

const cryptography = {
  encrypt: (text) => {
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
  },

  decrypt: (text) => {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
  },
};

export default cryptography;
