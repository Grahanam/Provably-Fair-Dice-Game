require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const secretCode = process.env.SECRET_CODE;

const port = 4000;
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
const outDir = path.join(__dirname, "out");

app.use(express.static(outDir));

//hashing SHA256 algo
function sha256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  });
}

app.post("/roll-dice", async (req, res) => {
  try {
    const clientSeed = req.body.clientSeed;
    const serverSeed = secretCode;
    const nonce = Math.floor(Math.random() * 1000);
    const combinedString = clientSeed + serverSeed + nonce;

    const hash = await sha256(combinedString);

    const diceRoll = (parseInt(hash.substring(0, 8), 16) % 6) + 1;
    res.json({ diceValue: diceRoll });
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
