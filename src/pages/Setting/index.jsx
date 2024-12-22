import React, { useState } from 'react';
import EditProfile from './EditProfile';
import Preferences from './Preferences';
import Security from './Security';

function Setting() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className='bg-white p-[1rem] pt-0 md:p-[30px] rounded-[15px] md:rounded-[25px]'>
      <div className="flex space-x-4 border-b-2 mb-6">
        {["Edit Profile", "Preferences", "Security"].map((tab) => (
          <div>
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-2 font-medium text-[13px] md:text-base ${activeTab === tab
                ? "text-[#232323]"
                : "text-[#718EBF]"
                }`}
            >
              {tab}
            </p>
            <div className={` ${activeTab === tab ? "px-3 mt-0 mb-0 ml-auto mr-auto w-auto h-[3px] bg-[#232323] rounded-t-[10px]" : ''}`}></div>
          </div>
        ))}
      </div>
      {activeTab === "Edit Profile" && <EditProfile />}
      {activeTab === "Preferences" && <Preferences />}
      {activeTab === "Security" && <Security />}
    </div>
  )
}

export default Setting;