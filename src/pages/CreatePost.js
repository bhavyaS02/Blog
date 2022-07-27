import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [ctc, setCtc] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      position,
      ctc,
      postText,
      author: { name : auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 className="title1">Create Post</h1>
        <div className="inputGp">
          <label> Company Name </label>
          <input
            placeholder="Company Name..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label> Position/Role </label>
          <input
            placeholder="Position/Role..."
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label> CTC </label>
          <input
            placeholder="CTC..."
            onChange={(event) => {
              setCtc(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label > Post : </label>

          <textarea
            placeholder="Write Your Experience Here !"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
