import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
// import { db } from './firebase';
// import firebase from "../src/FirebaseConfig";

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    db.collection("posts").onSnapshot((snapshot)=>
      setPosts(
        snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  },[]);

  const handleClick =(e)=>{
    e.preventDefault();

    // db.collection('posts').add({
    //   name: 'Krishna Agrawal',
    //   description : 'this is test',
    //   message : input,
    //   photoUrl: '',
    //   // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // })
  };


  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input value={input} onChange={event => setInput(event.target.value)} type="text" />
                <button type='submit' onClick={handleClick}>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            {/* input options */}
            <InputOptions title="Photo" 
                Icon={ImageIcon} color="#70B5f9"
            />
            <InputOptions title="Video" 
                Icon={SubscriptionsIcon} color="yellow"
            /> 
            <InputOptions title="Events" 
                Icon={EventNoteIcon} color="gray"
            />
            <InputOptions title="Write article" 
                Icon={CalendarViewDayIcon} color="lightgreen"
            />
        </div>
      </div>
      {/* posts */}
      {posts.map(()=>{
        <Post />
      })}
      <Post name="Krishna Agrawal" 
      description="This is a test" 
      message="OMG! I made a LinkedIn clone"
      />

    </div>
  )
}

export default Feed
