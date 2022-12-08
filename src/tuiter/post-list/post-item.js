import React from "react";
import "./index.css";
import PostItemTopCaption from "./post-item-top-caption";
import PostItemBottomBar from "./post-item-bottom-bar";
import PostItemRepost from "./post-item-repost";

const PostItem = (
    {
        post = {
            "_id" : 123,
            "image": "spacex.jpeg",
            "username": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "caption": "Amazing show about <a style = text-decoration:none href='https://twitter.com/inspiration4x?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>@Inspiration4x</a> mission!",
            "postimage": "dennis_tito_akiko_tito_spacex.jpeg",
            "postheadline": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "postcontent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..",
            "postlink": "netflix.com",
            "numcomments": "4.2K",
            "numretweets":"3.5K",
            "numlikes":"37.5K",
            "retweet": "Elon Musk"
        }
    }
) => {
    if (post.retweet){
        return (
            <li className="list-group-item">
                <div className="row ">
                    <div className="col-1 ">
                        <div className="float-end position-absolute wd-nudge-right">
                            <i className="fa fa-retweet"></i>
                        </div>
                    </div>

                    <div className="col-11 ps-4">
                        <span className="wd-under-text-color wd-text-bold">
                            {post.retweet} Retweeted
                        </span>

                    </div>
                </div>

                <div className="row">
                    <div className="col-1">
                        <img src={require(`../images/${post.image}`)}
                             className = "rounded-circle"
                             width="50"
                             height="50"
                        />
                    </div>

                    <div className="col-11 ps-4">
                        <PostItemTopCaption post={post}/>

                        <div className="mt-2 wd-tweet-and-image">
                            <div className="wd-thumbnail">
                                <img className = "wd-tweet-pic-only"
                                     src={require(`../images/${post.postimage}`)}
                                />
                            </div>
                        </div>

                        <PostItemBottomBar post={post}/>

                        <div>
                            <a href="#" >Show this thread</a>
                        </div>

                    </div>
                </div>

            </li>
        )
    }
    else{
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <img src={require(`../images/${post.image}`)}
                             className = "rounded-circle"
                             width="50"
                             height="50"
                        />
                    </div>

                    <div className="col-11 ps-4">
                        <PostItemTopCaption post={post}/>

                        <div className="mt-2 wd-tweet-and-image">
                            <div className=" ps-3 pe-3">
                                <PostItemRepost/>
                            </div>
                        </div>

                        <PostItemBottomBar post={post}/>

                    </div>
                </div>

            </li>
        )
    }


}

export default PostItem;