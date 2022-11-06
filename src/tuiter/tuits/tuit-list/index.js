import React from "react";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitArray.map(post =>
                    <TuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitList;