import React, {useState} from "react";
// import profile from "../data/profile.json"
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {editProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    let [tempProfile, setProfile] = useState(profile);
    const dispatch = useDispatch();
    const editClickHandler = (profile) => {
        dispatch(editProfile(profile));
    }
    return (

        <div>
            {/* eslint-disable-next-line no-restricted-globals */}
            <div className="mb-4"><span className="bi bi-x-lg fw-bolder" onClick={() => history.back()}></span>
                <span className="fw-bolder ps-4 fs-4">Edit Profile</span>
                <span className="p-4 small">
                        <button
                            className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold border"
                            onClick={()=>{
                                editClickHandler(tempProfile);
                                // eslint-disable-next-line no-restricted-globals
                                history.back();}}>Save
                        </button>
                    </span>
            </div>
            <div className="p-1 position-relative">
                <img height={215} src={require(`../images/${profile.bannerPicture}`)}></img>
                <img className="position-absolute wd-profile-pic-pos" height={100}
                     src={require(`../images/${profile.profilePicture}`)}></img>
            </div>
            <br/><br/>
            <div className="form-control">
                <label className="text-secondary ps-2" htmlFor="editName">Name</label>
                <input type="text"
                       className="form-control border-0"
                       id="editName"
                       placeholder="Name"
                       value={tempProfile.fullName}
                       onChange={(val)=> setProfile({...tempProfile, fullName: val.target.value})}>

                </input>
            </div>
            <br/>
            <div className="form-control ">
                <label className="text-secondary ps-2" htmlFor="editBio">Bio</label>
                <textarea
                    className="form-control border-0"

                    id="editBio"
                    placeholder="Bio"
                    value={tempProfile.bio}
                    onChange={(val)=> setProfile({...tempProfile, bio: val.target.value})}>

                        </textarea>
            </div>
            <br/>
            <div className="form-control ">
                <label className="text-secondary ps-2" htmlFor="editLocation">Location</label>
                <input
                    className="form-control border-0"

                    id="editLocation"
                    placeholder="Location"
                    value={tempProfile.location}
                    onChange={(val)=> setProfile({...tempProfile, location: val.target.value})}>
                </input>
            </div>
            <br/>
            <div className="form-control ">
                <label className="text-secondary ps-2" htmlFor="editLocation">Location</label>
                <input
                    className="form-control border-0"

                    id="editWebsite"
                    placeholder="Website"
                    value={tempProfile.website}
                    onChange={(val)=> setProfile({...tempProfile, website: val.target.value})}>
                </input>
            </div>
            <br/>
            <div className="form-control ">
                <label className="text-secondary ps-2" htmlFor="editBirthdate">Birth date</label>
                <input
                    type="date"
                    className="form-control border-0"

                    id="editWebsite"
                    placeholder="Website"
                    value={new Date(tempProfile.dateOfBirth).toISOString().split('T')[0]}
                    onChange={(val)=> {setProfile({...tempProfile, dateOfBirth: new Date(val.target.value).toDateString()});
                    }

                    }>
                </input>
            </div>

        </div>

    );
};

export default EditProfileComponent;