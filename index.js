const { urlencoded } = require("express");
const fast2sms = require("fast-two-sms");
const express = require("express");

const multer = require("multer");
const uuid = require("uuid").v4;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});
const upload = multer({ storage });

const app = express();

require("dotenv").config();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/sendMessage", async (req, res) => {
  const response = await fast2sms.sendMessage({
    authorization: process.env.API_KEY,
    message: req.body.message,
    numbers: [req.body.number],
  });

  res.send(response);
});
app.get("/index2.ejs", (req, res) => {
  res.render("index2.ejs");
});

app.post("/web", upload.single("avatar"), (req, res) => {
  return res.json({ Status: "Uploaded Go back and click next" });
});

app.get("/login.ejs", (req, res) => {
  res.render("login.ejs");
});

app.get("/register.ejs", (req, res) => {
  res.render("register.ejs");
});
app.get("/submit.ejs", (req, res) => {
  res.render("submit.ejs");
});
app.get("/index.ejs", (req, res) => {
  res.render("index.ejs");
});
app.get("/index2.ejs", (req, res) => {
  res.render("index2.ejs");
});
app.get("/index3.ejs", (req, res) => {
  res.render("index3.ejs");
});
app.get("/index4.ejs", (req, res) => {
  res.render("index4.ejs");
});
app.get("/ekyc.ejs", (req, res) => {
  res.render("ekyc.ejs");
});
app.get("/select.ejs", (req, res) => {
  res.render("select.ejs");
});
app.get("/uidai.ejs", (req, res) => {
  res.render("uidai.ejs");
});
app.get("/loc.ejs", (req, res) => {
  res.render("loc.ejs");
});
app.listen(3000, () => {
  console.log("Server");
});
/////////////////////////////
