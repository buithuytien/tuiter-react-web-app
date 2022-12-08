import React from "react";
// import PostList from "../post-list";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;