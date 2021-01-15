import React from "react";

export default function card({ event }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 ml-5">
      <div className="px-6 py-4">
        {event.date} {event.start}-{event.end}
        <div className="font-bold text-purple-500 text-xl mb-2">
          {event.title}
        </div>
        <ul>
          <li>
            <div className="px-6 py-4">
              {event.members.map((member, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {member}
                </span>
              ))}
            </div>
            <strong>Created by: </strong>
            {event.created}
          </li>
          <li>
            <strong>Location: </strong>
            {event.location}
          </li>
        </ul>
      </div>
    </div>
  );
}
