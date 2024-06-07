import React, { useState } from 'react';
import Jaehyun from "../assets/jaehyun.jpeg";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-4xl sm:w-full">
            <div className="bg-white p-7">
                <div className="flex gap-16 p-7 items-center">
                    <img src={Jaehyun} alt="your_profile" className="rounded-full w-60 h-60 object-cover" />
                    <div className="w-1/2">
                        <h1 className="font-bold text-2xl text-[#9E9898]">Jaehyun Ganteng</h1>
                        <hr className="border-[#9E9898] my-2" />
                        <p className="text-[#9E9898] text-md">jaehyun@email.com</p>
                        <select name="" id="" className="w-full border border-gray-400 sm:text-sm rounded-lg block p-2 my-4 text-[#9E9898] focus:ring-gray-400 focus:border-gray-400">
                            <option selected value="admin">Pilih sebagai Admin</option>
                            <option value="guru">Guru</option>
                        </select>
                    </div>
                </div>
                <button className='w-full justify-center bg-[#1D48A6] hover:bg-blue-900 text-white py-1.5 px-4 rounded'>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

const Profile = () => {

    const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

    return (
        <div>
            <div className="flex lg:ml-64 p-10 justify-between lg:mr-40">
                <h1 className="text-[#9E9898] font-medium text-2xl">Profile</h1>
                <button className="text-white bg-[#1D48A6] hover:bg-blue-900 px-5 py-1.5 rounded-md" onClick={toggleModal}>Edit Profile</button>
            </div>
                <div className="lg:ml-72 lg:mr-44 p-7 shadow-xl border rounded-lg hover:bg-gray-50">
                    <div className="flex gap-16 p-7 items-center">
                        <img src={Jaehyun} alt="your_profile" className="rounded-full w-60 h-60 object-cover" />
                        <div className="w-1/3">
                            <h1 className="font-bold text-2xl text-[#9E9898]">Jaehyun Ganteng</h1>
                            <hr className="border-[#9E9898] my-2" />
                            <p className="text-[#9E9898] font-bold text-lg">E-mail</p>
                            <select name="" id="" className="w-full border border-gray-400 sm:text-sm rounded-lg block p-2 my-2 text-[#9E9898] focus:ring-gray-400 focus:border-gray-400">
                                <option selected value="admin">Pilih sebagai Admin</option>
                                <option value="guru">Guru</option>
                            </select>

                        </div>
                    </div>
                </div>
                
                {/* Modal Component */}
                <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
    );
};

export default Profile;