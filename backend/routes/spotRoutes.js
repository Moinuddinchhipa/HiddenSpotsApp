const express = require("express");
const router = express.Router();
const spotController = require("../controllers/spotController");
const upload = require("../middleware/upload");

router.get("/", spotController.getSpots);
router.post("/", upload.array("images", 5), spotController.addSpot);

module.exports = router;
