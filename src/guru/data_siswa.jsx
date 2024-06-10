import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg text-center font-medium text-gray-500 leading-6 mb-3" id="modal-title">
                  Input Data Siswa
                </h3>
                <hr />
                <div className="mt-2">
                  <form>
                    <div className='bg-white shadow-md rounded-md border p-4'>
                        <div class="mb-2">
                            <label for="nisn" class="mb-2 text-md font-medium text-gray-900s hidden">NISN</label>
                            <input type="nisn" id="nisn" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="NISN" required />
                        </div>
                        <div class="mb-2">
                            <label for="nama" class="mb-2 text-sm font-medium text-gray-900s hidden">Nama</label>
                            <input type="nama" id="nama" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Nama" required />
                        </div>
                        <div class="mb-2">
                            <label for="email" class="mb-2 text-sm font-medium text-gray-900s hidden">Email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Email" required />
                        </div>
                        <div class="mb-2">
                            <label for="telepon" class="mb-2 text-sm font-medium text-gray-900s hidden">No Telp</label>
                            <input type="telepon" id="telepon" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="No Telp" required />
                        </div>
                        <div class="mb-2">
                            <label for="kelamin" class="mb-2 text-sm font-medium text-gray-900s hidden">No Telp</label>
                            <select class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="No Telp" required>
                            <option selected>Kelamin (L/P)</option>
                            <option value="">Laki-Laki</option>
                            <option value="">Perempuan</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label for="ortu" class="mb-2 text-sm font-medium text-gray-900s hidden">Orang Tua</label>
                            <input type="ortu" id="ortu" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Nama Orang Tua" required />
                        </div>
                        <div class="mb-2">
                            <label for="kelas" class="mb-2 text-sm font-medium text-gray-900s hidden">Kelas</label>
                            <input type="kelas" id="kelas" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Kelas" required />
                        </div>
                    </div>
                    <hr />  
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-[#198D2F] hover:bg-green-700 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={onClose}
                        >
                        Simpan
                        </button>
                        <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-[#D40B0B] hover:bg-red-700 text-base font-medium text-white sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={onClose}
                        >
                        Tutup
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataSiswaGuru = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1 className="w-full text-center my-12 text-gray-500 text-xl font-medium">Data Siswa</h1>
      <div className="lg:ml-72 lg:mr-44 mb-5">
        <div className="flex justify-between">
          <button className="bg-[#2068F3] hover:bg-blue-700 text-white flex items-center gap-4 px-5 rounded-md shadow-md" onClick={toggleModal}>
            Tambah Data
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8.5H8V14.5H6V8.5H0V6.5H6V0.5H8V6.5H14V8.5Z" fill="white" />
            </svg>
          </button>
          <form className="flex items-center w-1/5">
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Search" />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:ml-72 lg:mr-40">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-white uppercase bg-[#1D48A6]">
              <tr>
                <th scope="col" className="px-6 py-3 text-nowrap">No</th>
                <th scope="col" className="px-6 py-3 text-nowrap">NISN</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Nama</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Email</th>
                <th scope="col" className="px-6 py-3 text-nowrap">No Telp</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Kelamin (L/P)</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Nama Orang Tua</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Kelas</th>
                <th scope="col" className="px-6 py-3 text-nowrap">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-gray-300">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">1</th>
                <td className="px-6 py-4 text-nowrap">12345678</td>
                <td className="px-6 py-4 text-nowrap">Berliana gamink batam</td>
                <td className="px-6 py-4 text-nowrap">Berliana@gmail.com</td>
                <td className="px-6 py-4 text-nowrap">085576899</td>
                <td className="px-6 py-4 text-nowrap">P</td>
                <td className="px-6 py-4 text-nowrap">Raisa Anggraini</td>
                <td className="px-6 py-4 text-nowrap">4 A</td>
                <td className="px-6 py-4 text-nowrap flex gap-7">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.4375 13.0625L17.1875 1.1875L20.625 4.15625L6.875 16.0312M3.4375 13.0625L2.0625 17.2188L6.875 16.0312M3.4375 13.0625L6.875 16.0312M14.4375 3.5625L17.875 6.53125" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_55_1504)">
                        <path d="M17.5 3.74984H16.25V18.1248C16.25 18.3853 16.2012 18.6294 16.1035 18.8573C16.0059 19.0851 15.8724 19.2837 15.7031 19.453C15.5339 19.6222 15.3353 19.7557 15.1074 19.8534C14.8796 19.951 14.6354 19.9998 14.375 19.9998H4.375C4.11458 19.9998 3.87044 19.951 3.64258 19.8534C3.41471 19.7557 3.21615 19.6222 3.04688 19.453C2.8776 19.2837 2.74414 19.0851 2.64648 18.8573C2.54883 18.6294 2.5 18.3853 2.5 18.1248V3.74984H1.25V2.49984H6.25V1.24984C6.25 1.07406 6.28255 0.911296 6.34766 0.761556C6.41276 0.611816 6.50065 0.481608 6.61133 0.370931C6.72201 0.260254 6.85547 0.169108 7.01172 0.0974935C7.16797 0.0258789 7.33073 -0.00667318 7.5 -0.00016276H11.25C11.4258 -0.00016276 11.5885 0.0323893 11.7383 0.0974935C11.888 0.162598 12.0182 0.250488 12.1289 0.361165C12.2396 0.471842 12.3307 0.605306 12.4023 0.761556C12.474 0.917806 12.5065 1.08057 12.5 1.24984V2.49984H17.5V3.74984ZM7.5 2.49984H11.25V1.24984H7.5V2.49984ZM15 3.74984H3.75V18.1248C3.75 18.2941 3.81185 18.4406 3.93555 18.5643C4.05924 18.688 4.20573 18.7498 4.375 18.7498H14.375C14.5443 18.7498 14.6908 18.688 14.8145 18.5643C14.9382 18.4406 15 18.2941 15 18.1248V3.74984ZM7.5 16.2498H6.25V6.24984H7.5V16.2498ZM10 16.2498H8.75V6.24984H10V16.2498ZM12.5 16.2498H11.25V6.24984H12.5V16.2498Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_55_1504">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default DataSiswaGuru;
