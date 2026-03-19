const express = require("express");
const connectDB = require("./config/db");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
app.use(express.json());
// const { adminAuth, userAuth } = require("./middlewares/auth");
app.post("/signup", async (req, res) => {
  try {
    // validation of data
    validateSignUpData(req);

    // Encrypt of password
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    // Creating a new instance of user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("user added");
  } catch (err) {
    res.status(400).send("Error found" + err.message);
  }
});

// login API
app.post("/login", async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }
    res.send("Login successful");
  } catch (error) {
    res.status(400).send("Error found" + error.message);
  }
});

//Get data using emailId

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    res.send(users);
  } catch (error) {
    res.status(400).send("Error found");
  }
});

//Get all data
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Error found");
  }
});

// Delete user using id

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const users = await User.findByIdAndDelete(userId);
    res.send("User delete successfuly");
  } catch (error) {
    res.status(400).send("Error occure");
  }
});

// Update user data using id

app.put("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    const users = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("User data updated successfuly");
  } catch (error) {
    res.status(400).send("Error occur");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("server start at port no.3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected...");
  });

//ingore this code for now
// app.use("/admin", adminAuth);
// // app.use("/", userAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data send");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("All Data Delete");
// });

// app.get("/user", userAuth, (req, res) => {
//   res.send("All user data fethched");
// });
