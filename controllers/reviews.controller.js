const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    try {
      await Review.create({
        client: req.params.clientId,
        book: req.params.bookId,
        text: req.body.text,
      });
      res.json("отзыв добавлен");
    } catch {
      res.json("ошибка при добавлении отзыва");
    }
  },
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.findById({ book: req.params.id });
      res.json(reviews);
    } catch {
      res.json("err");
    }
  },
};