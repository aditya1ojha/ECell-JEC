import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Events = () => {

  //storing the events
  const [events, setEvents] = useState([]);

  const [event_index, setEvent] = useState(null);


  const [showModal, setShowModal] = React.useState(false);

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
         {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto h-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold text-black">
                            {events[event_index].title}
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                           {events[event_index].description}
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

        {events.length !== 0 && (
          <Carousel responsive={responsive}>
            {events.map(({ id, image, title, description, date },index) => (
              <div key={id} className="flex-col px-8">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src={image} alt={title} />
                  <div className="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                       {description.slice(0,120)}...
                      <b onClick={()=>{setEvent(index); setShowModal(true)}} className="text-blue-400 cursor-pointer">Read more</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {events.length === 0 && (
              <p className="text-white py-4 max-w-md text-2xl">
                No events as of now!
              </p>
            )}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Events;
