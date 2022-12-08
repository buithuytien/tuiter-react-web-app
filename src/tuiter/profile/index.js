import React from "react";
// import profile from "../data/profile.json"
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <div className="fa fa-arrow-left"></div>
                </div>
                <div className="col-11">
                    <div>
                        <span className="float-left fw-bolder">{profile.fullName}</span>
                        <div className="text-secondary small">{profile.totalTuits} Tuits</div>
                    </div>
                </div>

            </div>
            <div className="p-1 position-relative">
                <img height={215} src={require(`../images/${profile.bannerPicture}`)}></img>
                <img className="position-absolute wd-profile-pic-pos" height={100} src={require(`../images/${profile.profilePicture}`)}></img>
            </div>
            <Link to="/tuiter/edit-profile"><button className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold border">
                Edit Profile
            </button>
            </Link>
            <br/><br/>
            <div className="ps-3">
                <div className="fw-bolder">{profile.fullName}</div>
                <div className="text-secondary small">{profile.handle}</div>
                <br/>
                <div className="small">{profile.bio}</div>
                <div className="row text-secondary">
                    <div className="col-3 small">
                        <div className="wd-move-left float-left">
                            <span className="fa fa-map-marker"></span>
                            <span className="ps-2">{profile.location}</span>
                        </div>
                    </div>
                    <div className="col-3 ms-0 small ">
                        <div className="wd-move-left float-left">
                            <span className="fa fa-birthday-cake float-left"></span>
                            <span className="ps-2"> {(new Date(profile.dateOfBirth)).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="col-4 ms-0 small">
                        <div className="wd-move-left"><span className="fa fa-calendar"></span>
                            <span
                                className="ps-2">{`Joined ${(new Date(profile.dateJoined)).toLocaleString('en-US', {month: 'long'})}
                                 ${(new Date(profile.dateJoined)).toLocaleString('en-US', {year: 'numeric'})} `}</span>

                        </div>
                    </div>
                </div>

                <a className="text-primary small text-decoration-none" href={`${profile.website}`}>{profile.website}</a>
                <br/>
                <div className="small">
                    <span className="fw-bolder">{profile.followingCount}</span>
                    <span className="text-secondary ps-2">Following</span>
                    <span className="fw-bolder ps-3">{profile.followersCount}</span>
                    <span className="text-secondary ps-2">Followers</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;