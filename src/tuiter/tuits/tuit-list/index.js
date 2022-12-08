import React, {useEffect} from "react";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {/*{console.log("tuits", loading, tuits)}*/}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            {
                tuits.map(post =>
                    <TuitItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitList;