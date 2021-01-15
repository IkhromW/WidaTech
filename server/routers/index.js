const router = require("express").Router();
const eventController = require("../controllers/eventsController");

router.get("/events", eventController.getEvents);

module.exports = router;
