const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour.controllers");

router.route("/").get(tourController.getTours).post(tourController.createTours);

router.route("/:id").patch(tourController.updateOneTour);

router.route("/trending").get(tourController.getTrendingTours);
router.route("/cheapest").get(tourController.getMostCheapestTours);

router.route("/:id").get(tourController.getOneUniqueTours);

module.exports = router;
