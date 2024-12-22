import React, { useState } from 'react'
import moment from 'moment';
import EditIcon from '../../assets/Setting/edit-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/profileData';

function EditProfile() {
  const profile = useSelector((state) => state.profileFormData);
  const dispatch = useDispatch();
  // const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState(profile);

  // Handle image upload
  const handleImageChange = (event) => {

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profileImage") {
      const file = e.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file); // Generate a temporary URL for the selected image
        setFormData({ ...formData, [name]: imageURL }); // Update the profile image
      }
    } else {
      setFormData({ ...formData, [name]: value }); // Update local state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    alert("Profile saved successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col lg:flex-row justify-between gap-8 p0 md:py-6 md:pl-6'>
          <div className='my-0 mx-auto'>
            <div className='relative w-[90px] h-[90px] mb-0 md:mb-[1.5rem] lg:mb-0'>
              <img
                src={formData.profileImage || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-[90px] h-[90px] rounded-full object-cover border border-gray-300"
              />
              <label htmlFor="profile-image-upload" className="cursor-pointer">
                {/* Display the profile image */}
                <div className='bg-[#232323] w-[30px] h-[30px] rounded-full flex justify-center items-center absolute right-0 bottom-0'>
                  <img src={EditIcon} alt='Edit Icon' className='w-[15px] h-[15px]' />
                </div>
              </label>
            </div>
            <input
              id="profile-image-upload"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden" // Hide the file input element
              name='profileImage'
            />
          </div>
          <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 font-inter text-[13px] md:text-base'>
            <div>
              <p>Your Name</p>
              <input type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>User Name</p>
              <input type='text' name='username' placeholder='Enter your user name' value={formData.username} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF] ' />
            </div>
            <div>
              <p>Email</p>
              <input type='email' name='email' placeholder='Enter email address' value={formData.email} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>Password</p>
              <input type='password' name='password' placeholder='Enter password' value={formData.password} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF] ' />
            </div>
            <div>
              <p>Date of Birth</p>
              <input type='date' name='dob' placeholder='Enter date of birth' data-date-format="DD MMMM YYYY" value={formData.dob} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>Present Address</p>
              <input type='text' name='presentAddress' placeholder='Enter present address' value={formData.presentAddress} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>Permanent Address</p>
              <input type='text' name='permanentAddress' placeholder='Enter permanent address' value={formData.permanentAddress} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>City</p>
              <input type='text' name='city' placeholder='Enter city' value={formData.city} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>Postal Code</p>
              <input type='number' name='postalCode' placeholder='Enter postal code' value={formData.postalCode} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF]' />
            </div>
            <div>
              <p>Country</p>
              <input type='text' name='country' placeholder='Enter country' value={formData.country} onChange={handleChange}
                className='w-full h-[40px] md:h-[50px] border border-[#DFEAF2] rounded-[10px] md:rounded-[15px] p-2 text-[12px] md:text-[15px] font-normal text-[#718EBF] ' />
            </div>
          </div>
        </div>
        <div className='text-right mt-6'>
          <button type='submit' className='text-center bg-[#232323] text-white text-[15px] md:text-[18px] font-medium font-inter rounded-[9px] md:rounded-[15px] w-full md:w-[190px] h-[40px] md:h-[50px]'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile;