import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/action/eventsAction";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector(({ events }) => events.events);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  console.log(events);

  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map(event => (
        <Card key={event.id} event={event} />
      ))}
    </div>
  );
};
export default Home;
