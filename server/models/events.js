const fs = require("fs");

class Event {
  constructor(event) {
    this.id = event.id;
    this.title = event.title;
    this.members = event.members;
    this.created = event.created;
    (this.location = event.location), (this.date = event.date);
    this.start = event.start;
    this.end = event.end;
  }

  static findAll(cb) {
    fs.readFile("./data/events.json", "utf-8", (err, data) => {
      if (err) {
        cb(err);
      } else {
        let events = JSON.parse(data);
        let instanceEvent = events.map(el => {
          return new Event(el);
        });
        cb(null, instanceEvent);
      }
    });
  }
}
module.exports = Event;
