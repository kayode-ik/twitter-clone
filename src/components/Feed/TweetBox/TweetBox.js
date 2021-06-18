import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from '../../../firebase';


function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState(" ");
    const [tweetImage, setTweetImage] = useState(" ");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Big Wiz",
            username: "wizkid",
            verified:true,
            text:tweetMessage,
            image: tweetImage,
            avatar: "https://wilcity.com/wp-content/uploads/2019/02/avataaars.png" 


        });

        setTweetMessage(" ");
        setTweetImage("");
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar
                 src="https://image.flaticon.com/icons/png/512/4333/4333609.png"
                 />
                 <input 
                 value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}
                 placeholder="What's Happening?" type="text" />
                </div>
                 <input
                 value={tweetImage} onChange={e => setTweetImage(e.target.value)}
                 className="tweetBox__imageInput"
                 placeholder="Optional: Enter Image Url"
                type="text"
                 />
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
