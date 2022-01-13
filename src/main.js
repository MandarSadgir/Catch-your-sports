const express = require("express");
let app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { Showdata, Adddata } = require("./user");

// http://localhost:2000/getdata
app.get("/getdata", async (req, res) => {
  const list = await Showdata();
  res.json(list);
});

//http://localhost:2000/postdata
app.post("/postdata", async (req, res) => {
  const user = req.body;
  await Adddata(user);
  res.json({ message: "data added successfully" });
});

app.listen(2000, () => console.log("server started"));
