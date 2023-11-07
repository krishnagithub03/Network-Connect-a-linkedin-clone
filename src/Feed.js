import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from "./firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
   const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>(
      setPosts(
        snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data(),
        }))
      ))
    );
  },[]);

  const handleClick =(e)=>{
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description : user.email,
      message : input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
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
      <FlipMove>
      {posts.map(({id, data:{name, description, message, photoUrl}}) => {
        return <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      })}
      {/* <Post name="Krishna Agrawal" 
      description="This is a test" 
      message="OMG! I made a LinkedIn clone"
      /> */}
</FlipMove>
    </div>
  )
}

export default Feed
