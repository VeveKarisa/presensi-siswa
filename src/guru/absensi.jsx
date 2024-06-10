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
                <h3 className="text-lg font-medium text-gray-500 leading-6 mb-3" id="modal-title">
                  Filter Data
                </h3>
                <hr />
                <div className="mt-2">
                  <form>
                    <div className='px-7'>
                      <div class="mb-3">
                        <label for="guru" class="mb-2 text-lg font-medium text-gray-500">Bulan</label>
                        <select id="guru" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5"required>
                          <option selected>Mei</option>
                          <option value="bulan">Mei</option>
                          <option value="bulan">Juni</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="guru" class="mb-2 text-lg font-medium text-gray-500">Minggu</label>
                        <select id="guru" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5"required>
                          <option selected>1</option>
                          <option value="minggu">1</option>
                          <option value="minggu">2</option>
                        </select>
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

const InputAbsensiModal = ({ isOpen, onClose }) => {
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
                  Input Data Absensi
                </h3>
                <hr />
                <div className='w-full font-medium text-sm text-gray-500 my-4'>
                  <div className='flex flex-col w-full justify-center items-center gap-2'>
                    <label htmlFor="">Pilih Tanggal</label>
                    <input type="date" name="" id="" className='w-1/3 rounded-md' />
                    <div className='flex items-center gap-3 my-2'>
                      <input type="checkbox" name="" id="" className='rounded-sm'/>
                      <p>Pilih semua sebagai "Hadir"</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <form>
                    <div className='grid grid-cols-3 text-center max-h-56 overflow-y-auto'>
                      <div class="mb-2">
                        <label for="guru" class="mb-2 text-md font-medium text-gray-500">Id Siswa</label>
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        <input type="text" value="01 - Anissa Ayu Kasih" className='mt-2 w-44 focus:outline-none' disabled />
                        {/* maaf banyak, test scroll */}
                      </div>
                      <div class="mb-2">
                        <label for="guru" class="mb-2 text-md font-medium text-gray-500">Tanggal</label>
                        <input type="date" className='mt-2 w-44' />
                      </div>
                      <div class="mb-2 flex flex-col">
                        <label for="guru" class="mb-2 text-md font-medium text-gray-500">Status</label>
                        <select name="" id="" className='w-44'>
                          <option value="">Hadir</option>
                          <option value="">Sakit</option>
                          <option value="">Izin</option>
                          <option value="">Alfa</option>
                        </select>
                      </div>  
                    </div>
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

const Absensi = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInputAbsensiModalOpen, setAbsenModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleModalAbsen = () => {
    setAbsenModalOpen(!isInputAbsensiModalOpen);
  };

  return (
    <div>
      <h1 className="w-full text-center my-12 text-gray-500 text-xl font-medium">Data Absensi</h1>
      <div className="lg:ml-72 lg:mr-44 mb-5">
        <div className="flex justify-between">
          <button className="bg-[#2068F3] hover:bg-blue-700 text-white flex items-center gap-4 px-4 rounded-md shadow-md" onClick={toggleModalAbsen}>
            Input Absensi
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8.5H8V14.5H6V8.5H0V6.5H6V0.5H8V6.5H14V8.5Z" fill="white" />
            </svg>
          </button>
          <button className="bg-[#1B438F] hover:bg-blue-700 text-white flex items-center gap-2 px-2 py-2 rounded-md shadow-md" onClick={toggleModal}>
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9992 12V19.88C14.0392 20.18 13.9392 20.5 13.7092 20.71C13.6166 20.8027 13.5068 20.8762 13.3858 20.9264C13.2648 20.9766 13.1351 21.0024 13.0042 21.0024C12.8732 21.0024 12.7435 20.9766 12.6225 20.9264C12.5016 20.8762 12.3917 20.8027 12.2992 20.71L10.2892 18.7C10.1802 18.5933 10.0973 18.4629 10.047 18.319C9.99666 18.175 9.9803 18.0213 9.99915 17.87V12H9.96915L4.20915 4.62C4.04676 4.41153 3.97349 4.14726 4.00534 3.88493C4.0372 3.6226 4.17159 3.38355 4.37915 3.22C4.56915 3.08 4.77915 3 4.99915 3H18.9992C19.2192 3 19.4292 3.08 19.6192 3.22C19.8267 3.38355 19.9611 3.6226 19.993 3.88493C20.0248 4.14726 19.9515 4.41153 19.7892 4.62L14.0292 12H13.9992Z" fill="white"/>
            </svg>
            Filter Data
          </button>
        </div>
      </div>
      <div className="lg:ml-72 lg:mr-40">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-md text-white bg-[#1D48A6]">
              <tr>
                <th scope="col" className="px-6 py-3">Nama Siswa</th>
                <th scope="col" className="px-6 py-3">Senin, 1 Mei</th>
                <th scope="col" className="px-6 py-3">Selasa, 2 Mei</th>
                <th scope="col" className="px-6 py-3">Rabu, 3 Mei</th>
                <th scope="col" className="px-6 py-3">Kamis, 4 Mei</th>
                <th scope="col" className="px-6 py-3">Jumat, 5 Mei</th>
                <th scope="col" className="px-6 py-3">Sabtu, 6 Mei</th>
                <th scope="col" className="px-6 py-3">Persentase</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-gray-300">
                <td className="px-6 py-4">Berliana gamink batam</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">0.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      <InputAbsensiModal isOpen={isInputAbsensiModalOpen} onClose={toggleModalAbsen} />
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Absensi;
