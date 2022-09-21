const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

//database connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`database connection successfully`);
});

// server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
