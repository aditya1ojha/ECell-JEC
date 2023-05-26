import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Events = () => {
  //storing the events
  const [events, setEvents] = useState([]);

  const [showFullDescription, setFullDescription] = useState(false);

  //fetching the events list
  const fetchEvents = async () => {
    await getDocs(collection(db, "events")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(newData);
      console.log(events, newData);
    });
  };

  // calling the fetchEvents function everytime the component gets mounted
  useEffect(() => {
    fetchEvents();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      name="events"
      className="w-full h-screen bg-gradient-to-b from-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Events
          </p>
        </div>
        

        {events.length !== 0 && (
          <Carousel responsive={responsive}>
            {events.map(({ id, image, title, description, date }) => (
              <div key={id} className="flex-col">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src={image} alt={title} />
                  <div className="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {showFullDescription === true? description + " " : description.slice(0, 120)+'...'}
                      <b onClick={()=>setFullDescription(!showFullDescription)} className="text-blue-400 cursor-pointer">{showFullDescription === true? 'Read Less': 'Read More'}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {events.length === 0 && (
              <p className="text-white py-4 max-w-md text-2xl">
                No events as of now !
              </p>
            )}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Events;
