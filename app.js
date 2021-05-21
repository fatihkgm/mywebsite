const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.SECRET_ID,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

// mongoose.connect(
//   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@portfolia.xnql7.mongodb.net/myContact?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const contactSchema = {
//   name: String,
//   email: String,
//   subject: String,
//   content: String,
// };
// const Contact = mongoose.model("Contact", contactSchema);

app.get("/", function (req, res) {
  res.render("portfolio");
});

app.get("/post", function (req, res) {
  res.render("post");
});

app.get("/resumePage", function (req, res) {
  res.render("resumePage");
  res.sendFile("/downloads/test.pdf");
});

app.get("/gradvisory", function (req, res) {
  res.render("gradvisory");
});
app.get("/aboutme", function (req, res) {
  res.render("aboutme");
});

app.get("/readmore", function (req, res) {
  res.render("readmore");
});

app.get("/python", function (req, res) {
  res.render("python");
});

app.get("/download", function (req, res) {
  res.download(__dirname + "/downloads/test.pdf");
});

app.post("/", function (req, res) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.USER_GMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_ID,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const mailOption = {
    from: req.body.maile,
    to: "felixgokmen@gmail.com",
    subject: `Message from ${req.body.maile} : ${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email.sent: " + info.response);
      res.send("success");
    }
  });
});

// const contact = new Contact({
//   name: req.body.contactName,
//   email: req.body.contactEmail,
//   subject: req.body.contactSubject,
//   content: req.body.contactMessage,
// });
// res.redirect("/post");
// contact.save(function (err) {
//   if (!err) {
//     console.log(err);
//   }
// });

app.get("/blog", function (req, res) {
  res.render("blog");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/javascript", function (req, res) {
  res.render("javascript");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully...!");
});
