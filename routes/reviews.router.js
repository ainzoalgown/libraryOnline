const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/client/:clientId/books/:bookId/reviews", reviewsController.addReviews)
router.get("/reviews/book/:id", reviewsController.getReviews)

module.exports = router;