const express = require("express");
const Router = express.Router();
const Offer = require("../module/OfferSchema");
const userData = require("../module/PlayerSchema");

Router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const Result = await userData.findOne({username: username});
    if (!Result) {
      res.status(404).send({
        message: "User not found",
      });
    } else {
      if (Result.password === password) {
        res.status(200).send({
          message: "Login successful",
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
});

Router.post("/register", async (req, res) => {
  try {
    const Result = await userData.create(req.body);
    res.status(200).send({
      message: "Registration successful",
      Result,
    });
    console.log(Result);
  } catch (err) {
    console.error(err);
  }
});

Router.post("/offers", async (req, res) => {
  try {
    const Result = await Offer.create(req.body);
    console.log(Result);
  } catch (err) {
    console.error(err);
  }
});

Router.get("/offers", async (req, res) => {
  try {
    const pageNo = req.query.page;
    const Records = req.query.Records;
    const attribute = req.query.attribute;
    const Query = req.query.query;

    const Result = await Offer.find(
      { attribute: Query },
      {},
      { limit: Records, skip: (pageNo - 1) * Records }
    );
    res.send(200).json({
      page: pageNo,
      has_more: false,
      Result,
    });
  } catch (error) {
    console.error(error);
  }
});

Router.put("/offers/:offerId", async (req, res) => {
  try {
    const offerId = req.params.offerId;
    const Result = await Offer.create(offerId, req.body);
    console.log(Result);
    res.status(200);
  } catch (err) {
    console.error(err);
  }
});

Router.delete("/offers/:offerId", async (req, res) => {
  try {
    const offerId = req.params.offerId;
    const Result = await Offer.findByIdAndDelete(offerId);
    console.log(Result);
    res.status(200);
  } catch (err) {
    console.error(err);
  }
});

module.exports=Router;