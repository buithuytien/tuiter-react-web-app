import React from "react";
import "./index.css";

const PostItemBottomBar = (
    {
        post
    }
) => {
    return(
        <div className="row mt-3 mb-2 ">
            <div className="col-3 wd-under-text-color">
                <i className = "fa fa-comment-o me-2"></i> {post.numcomments}
            </div>
            <div className="col-3 wd-under-text-color">
                <i className = " fa fa-retweet-o me-2"></i> {post.numretweets}
            </div>
            <div className="col-3 wd-under-text-color">
                <i className = "fa fa-heart-o me-2"></i> {post.numlikes}
            </div>
            <div className="col-3 wd-under-text-color">
                <i className = "fa fa-upload"></i>
            </div>
        </div>
    );

}
export default PostItemBottomBar