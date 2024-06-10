import React, { useState } from 'react';
import Jiso from "../assets/jisoo.png";

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
            <div className='w-full justify-end flex'>
                <svg height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover-close" onClick={onClose}>
                <path d="M20 2.5C10.25 2.5 2.5 10.25 2.5 20C2.5 29.75 10.25 37.5 20 37.5C29.75 37.5 37.5 29.75 37.5 20C37.5 10.25 29.75 2.5 20 2.5ZM20 35C11.75 35 5 28.25 5 20C5 11.75 11.75 5 20 5C28.25 5 35 11.75 35 20C35 28.25 28.25 35 20 35Z" fill="#6D737A"/>
                <path d="M26.75 28.75L20 22L13.25 28.75L11.25 26.75L18 20L11.25 13.25L13.25 11.25L20 18L26.75 11.25L28.75 13.25L22 20L28.75 26.75L26.75 28.75Z" fill="#6D737A"/>
                </svg>
              </div>
                <h1 className='font-bold text-2xl text-[#9E9898] text-center'>DATA DIRI</h1>
                <div className="flex gap-16 p-7 items-center">
                    <img src={Jiso} alt="your_profile" className="rounded-full w-60 h-60 object-cover" />
                    <div className="w-1/2">
                        <h1 className="font-bold text-2xl text-black">Jiso Cantik</h1>
                        <hr className="border-[#9E9898] my-2" />
                        <div className="grid grid-cols-[max-content_auto] text-[#9E9898] text-md gap-x-2">
                                <p>NISN</p><span>: <span className='font-bold text-black'>0344561</span></span>
                                <p>Nama</p><span>: <span className='font-bold text-black'>Berliana</span></span>
                                <p>Email</p><span>: <span className='font-bold text-black'>Berliana@gmail.com</span></span>
                                <p>No Telp</p><span>: <span className='font-bold text-black'>0344561</span></span>
                                <p>Kelamin</p><span>: <span className='font-bold text-black'>Perempuan</span></span>
                                <p>Guru</p><span>: <span className='font-bold text-black'>Jisoo</span></span>
                                <p>Kelas</p><span>: <span className='font-bold text-black'>4a</span></span>
                        </div>
                    </div>
                </div>
                <button className='w-full justify-center bg-[#1B438F] hover:bg-blue-900 text-white py-1.5 px-4 rounded'>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

const ProfileWali = () => {

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
                  <h1 className='font-bold text-2xl text-[#9E9898] text-center'>DATA DIRI</h1>
                    <div className="flex gap-24 py-7 px-16 items-center">
                        <img src={Jiso} alt="your_profile" className="rounded-full w-60 h-60 object-cover" />
                        <div className="w-1/2">
                            <h1 className="font-bold text-2xl text-[#9E9898]">Jiso Cantik</h1>
                            <hr className="border-[#9E9898] my-2" />
                            <div className="grid grid-cols-[max-content_auto] text-[#9E9898] text-md gap-x-2">
                                <p>NISN</p><span>:</span>
                                <p>Nama</p><span>:</span>
                                <p>Email</p><span>:</span>
                                <p>No Telp</p><span>:</span>
                                <p>Kelamin</p><span>:</span>
                                <p>Guru</p><span>:</span>
                                <p>Kelas</p><span>:</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Modal Component */}
                <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
    );
};

export default ProfileWali;