import React, { useEffect, useState } from "react";
import "../../css/profile/ProfileDetails/profile-details.css";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileInformation } from "./ProfileDetails/ProfileInformation";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProfileDetails = ({otherProfile}) => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const { user: currentUser } = useSelector((state) => state.user);

  const getUser = async () => {
    const baseEndpoint = process.env.REACT_APP_BE_URL

    const res = await fetch(
      `${baseEndpoint}/users/${params.id}`
    );
    const userData = await res.json();
    setUser(userData);
  };

  useEffect(() => {
    if(otherProfile) {
      if (params.id) {
        console.log('in here')
        getUser();
      } 
    } else {
      console.log(currentUser)
      setUser(currentUser)
    }

  }, [otherProfile, params.id, currentUser]);

  return (
    <div className="profile-details">
      {user ? (
        user._id !== currentUser._id ? (
          <>
            <ProfileInformation user={user} />
            <ExperienceSection userId={user._id}/>
          </>
        ) : (
          <>
            <ProfileInformation user={user} />
            <ExperienceSection userId={user._id}/>
          </>
        )
      ) : null}
      
    </div>
  );
};
