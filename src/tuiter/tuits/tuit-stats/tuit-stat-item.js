import React from "react";
import {useDispatch} from "react-redux";
// import {likeTuit} from "../tuits-reducer";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStatItem = ({post}) => {
    const dispatch = useDispatch();
    const likeToggleHandler = (id) => {
        // dispatch(likeTuit(id));
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1
        }))
    };
    return (
        <div className="row border-0 mt-2">
                <span className="col-3">
                    <i className="ps-4 fa fa-comment-o"> </i>
                    <span className="ps-2">{post.replies}</span>
                </span>
            <span className="col-3">
                    <span className="ps-4 fa fa-retweet"> </span>
                    <span className="ps-2">{post.retuits}</span>
                </span>
            <span className="col-3">
                    <span className= "ps-4">
                   <span className={`ps-2 pe-1 small ${post.liked? 'text-danger fa fa-heart' :'fa fa-heart-o'}`}
                         onClick={() => {likeToggleHandler(post._id)}}></span>
                        {post.likes}</span>

                </span>
            <span className="col-3">
                    <span className="ps-4 fa fa-share-alt"></span>
                </span>
        </div>
    );
};
export default TuitStatItem;