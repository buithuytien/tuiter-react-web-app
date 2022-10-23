import React from "react";
import "./index.css";

const PostItemTopCaption = (
    {
        post
    }
) => {
    return(
        <div>
            <span className = "fw-bold float-start">
                        {post.username}
            </span>
            <span className="ps-2">
                <i className="fa fa-check-circle"></i>
            </span>
            <span className="wd-under-text-color ps-1">
                @{post.handle}  {'\u00B7'} {post.time}
            </span>
            <span className="float-end">
                <i className="fa fa-ellipsis-h "></i>
            </span>
            <div>
                <div dangerouslySetInnerHTML={{__html:post.caption}} />
            </div>

        </div>
    );

}
export default PostItemTopCaption