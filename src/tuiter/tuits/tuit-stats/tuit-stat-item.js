import React from "react";

const TuitItem = ({
                      post = {
                          "topic": "Space",
                          "userName": "SpaceX",
                          "time": "2h",
                          "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                          "image": "tesla.png",
                          "handle": "",
                          "replies": "",
                      }
                  }) => {
    return (<li className="list-group-item border-0">
        <div className="row border-0">
                <span className="col-3">
                    <i className="ps-4 fa fa-comment-o"> </i>
                    <span className="ps-2">{post.replies}</span>
                </span>
            <span className="col-3">
                    <span className="ps-4 fa fa-retweet-o"> </span>
                    <span className="ps-2">{post.retuits}</span>
                </span>
            <span className="col-3">
                    <span className="ps-4 fa fa-heart-o"> </span>
                    <span className="ps-2">{post.replies}</span>
                </span>
            <span className="col-3">
                    <span className="ps-4 fa fa-share-alt"></span>
                </span>
        </div>
    </li>);
};
export default TuitItem;

