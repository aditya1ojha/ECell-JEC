import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

import { FaLinkedin } from "react-icons/fa";

import React, { useState, useEffect } from "react";

const Team = () => {
  
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

  //storing the team members
  const [members, setMembers] = useState([]);

  //fetching the team list
  const fetchTeam = async () => {
    
    const fetched_teams = collection(db, "team");
    
    const ordered_teams = query(fetched_teams, orderBy("memberTitle", "asc") );
    await getDocs(ordered_teams).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMembers(newData);
      ///console.log(members, newData);
    });
  };

  // calling the fetchTeam function everytime the component gets mounted
  useEffect(() => {
    fetchTeam();
  }, []);


  return (
    <div
      name="team"
      className="w-full h-screen bg-gradient-to-b from-black to-blue-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Team
          </p>
        </div>

        {members.length !==0 && (<Carousel responsive={responsive}>
          {members.map(({ id, imgSrc, linkedin, memberName, memberTitle }) => (
            <div key={id} className="flex-col">
              <img src={imgSrc} alt="team member" className="px-5 py-5 object-cover h-96 w-96"/>
              <div className="text-center text-2xl text-white">
                <h2>{memberName}</h2>
              </div>
              <div className="text-center text-lg text-yellow-300 py-3">
                <p>{memberTitle}</p>
              </div>

              <div className="text-center text-gray-100">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <button>
                    <FaLinkedin size={20} />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>)}
      </div>
    </div>
  );
};

export default Team;
