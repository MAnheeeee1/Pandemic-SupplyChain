// src/components/Timeline.js
import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-300 ml-4">
        {events.map((event, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="font-semibold text-blue-600 mb-2">{event.date}</div>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
