import axios from "axios";
export const getEvents = () => {
  return dispatch => {
    axios
      .get("http://localhost:3100/events")
      .then(({ data }) => {
        dispatch({
          type: "GET_EVENTS",
          payload: data.events,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
