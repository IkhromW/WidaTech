const Event = require("../models/events");

class eventController {
  static getEvents(req, res) {
    Event.findAll((err, data) => {
      if (err) {
        res.status(500).json({ err });
      } else {
        res.status(200).json({ events: data });
      }
    });
  }
}

module.exports = eventController;
