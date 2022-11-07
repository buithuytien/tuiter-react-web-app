import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";

const profileSlice = createSlice({
    name: "profiles",
    initialState: profileArray,
    reducers: {
        editProfile(state, action) {
            return (state = action.payload);
        },
    }
});
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;