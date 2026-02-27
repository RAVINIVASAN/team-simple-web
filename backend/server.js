const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `Thank you ${name}, we will contact you soon!`
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});