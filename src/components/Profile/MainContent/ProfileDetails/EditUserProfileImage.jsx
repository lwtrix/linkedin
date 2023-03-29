import React from "react";
import "../../../css/profile/pictureUploader/pictureUploader.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import newChatReducer from "../../../../redux/reducers/NewChatReducer";
import { useEffect } from "react";
export default function EditUserProfileImage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [helper, setHelper] = useState("");
  const user = useSelector(state => state.user.user)

  const uploadImage = async () => {
    try {
      const baseEndpoint = process.env.REACT_APP_BE_URL
      
      const formData = new FormData();
      formData.append("profile", image);
      let resp = await fetch(
        `${baseEndpoint}/users/${user._id}/picture`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (resp.ok) {
        setHelper("ok");
      } else {
        setHelper("not");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pictureUploader">
      <h5>Picture Uploader</h5>

      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <br />

      <hr />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}
