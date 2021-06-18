import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search'


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input className="txt" placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1402929274638712833"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="aanu_kayode"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/kayodeIpentan"}
                    options={{ text: "#reactjs is awesome", via: "aanu_kayode" }}
                />
            </div>




        </div>
    )
}

export default Widgets
