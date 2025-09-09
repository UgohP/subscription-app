import express from "express";
const app = express();

const PORT = 6500

app.listen(PORT, () => {
  console.log(`App is listening on localhost:${PORT}`);
});
