import { createSlice } from "@reduxjs/toolkit";

// Load initial state from sessionStorage (or use default if none exists)
const initialState = JSON.parse(sessionStorage.getItem("profileFormData")) || {
  profileImage:
    "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
  name: "Charlene Reed",
  email: "charlenereed@gmail.com",
  dob: "1990-01-25",
  permanentAddress: "San Jose, California, USA",
  presentAddress: "San Jose, California, USA",
  postalCode: "45962",
  city: "San Jose",
  country: "USA",
  username: "Charlene Reed",
  password: "********", // Sensitive data, handle with care!
};

// Create the slice
const profileData = createSlice({
  name: "profileFormData",
  initialState,
  reducers: {
    // Action to update specific profile fields
    updateProfile: (state, action) => {
      console.log('Updating profile with:', action.payload);
      const updatedState = { ...state, ...action.payload };
      sessionStorage.setItem("profileFormData", JSON.stringify(updatedState)); // Save to sessionStorage
      console.log('State after update:', updatedState);
      return updatedState; // Return the new state
    },
  },
});

// Export action and reducer
export const { updateProfile } = profileData.actions;
export default profileData.reducer;