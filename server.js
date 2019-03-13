const express = require("express");
const exphbs = require("express-handlebars");

const mongoose = require("mongoose");
const routes = require("./server/routes");
const passport = require('passport');
const passportSetup = require("./server/config/passport-setup");
const keys = require("./server/config/keys");

const cookieSession = require("cookie-session")
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 4500;
const app = express();

const localDB = "googlebooks"

app.use(cookieSession({
  // set the duration of the session. 24h vs 60m vs 60s * 1000milisegundos = 1dia
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session())

// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {

  //added for ejs test
  app.use(express.static("public"));
}

//prevent CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  console.log("CORS method", req.method)
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//connect to mongoDB keys.mongodb.dbURI ||
mongoose.connect("mongodb://localhost/" + localDB ,()=> {
  console.log('connected to mongo DB')
})

//added for ejs test
// create home route
app.get('/test', (req, res) => {
  res.render('login', {
    user: "Rafael"
  });
});

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
