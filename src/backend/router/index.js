const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Users = require("../model/Schema");

const router = express.Router();

router.use(bodyParser.json());

router.get("/users", (req, res, next) => {
  Users.find({})
    .then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      err => next(err)
    )
    .catch(err => next(err));
});

router.get("/users/:userId", (req, res, next) => {
  Users.findById(req.params.userId)
    .then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      err => next(err)
    )
    .catch(err => next(err));
});

router.post("/users", (req, res, next) => {
  Users.create(req.body)
    .then(
      user => {
        console.log("User Created ", user);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      err => next(err)
    )
    .catch(err => next(err));
});
router.put("/users/:userId", (req, res, next) => {
  Users.findByIdAndUpdate(
    req.params.userId,
    {
      $set: req.body
    },
    { new: true }
  )
    .then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      err => next(err)
    )
    .catch(err => next(err));
});
router.delete("/users/:userId", (req, res, next) => {
  Users.findByIdAndRemove(req.params.userId)
    .then(
      resp => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      },
      err => next(err)
    )
    .catch(err => next(err));
});

module.exports = router;
