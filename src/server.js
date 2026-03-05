const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  console.log("Admin auth is checked...");

  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unauthorized request");
  } else {
    next();
  }
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data send");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("All Data Delete");
});

app.listen(3000, () => {
  console.log("server start at port no.3000");
});
