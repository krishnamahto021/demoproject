const crypto = require("crypto");

function genrateRandomNumber() {
  const otp = crypto.randomInt(1111, 9999);
  console.log(otp);

}

genrateRandomNumber();
