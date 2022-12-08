import React from "react";
import "./index.css";

const PostItemRepost = (
    {
        repost = {
            "image": "relativity_space.jpeg",
            "username": "SpaceX",
            "handle": "SpaceX",
            "time": "16h",
            "caption": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency intervewt on an as-needed basis anywhere Startlink provides active coverage \u2192 startink.com/rv",
            "postimage": "../images/inspiration4x.jpeg",
            "postheadline": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "postcontent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space. ",
            "postlink": "netflix.com",
            "numcomments": "4.2K",
            "numretweets":"3.5K",
            "numlikes":"37.5K",
            "retweet": ""
        }
    }
) => {
    return(
        <div>
            <div className="p-1">
                <span className="float-start">
                <img src={require(`../images/${repost.image}`)}
                     className = "rounded-circle"
                     height="20pt"
                />
                </span>

                    <span className = "fw-bold ps-2 ">
                            {repost.username}
                </span>
                    <span className="ps-2">
                    <i className="fa fa-check-circle"></i>
                </span>
                    <span className="wd-under-text-color ps-1">
                    @{repost.handle}  {'\u00B7'} {repost.time}
                </span>
            </div>


            <div className= "pb-2 ps-1">
                <div dangerouslySetInnerHTML={{__html:repost.caption}} />
            </div>

        </div>
    );

}
export default PostItemRepost