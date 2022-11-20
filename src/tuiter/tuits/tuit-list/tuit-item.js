import React from "react";
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import TuitStatItem from "../tuit-stats/tuit-stat-item";
// import {deleteTuit} from "../tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";


const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "handle":"",
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img height={40} className="rounded-circle" src={require(`../../images/${post.image}`)}/>
                </div>
                <div className="col-11">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bolder">{post.userName}</span>
                    <span className="fa fa-check-circle ps-1 " ></span>
                    <span className="ps-1">{post.handle} . {post.time}</span>
                    <div>{post.tuit}</div>
                </div>
                <div>
                    <TuitStatItem post={post}/>
                </div>
            </div>
        </li>
    );
};



export default TuitItem;