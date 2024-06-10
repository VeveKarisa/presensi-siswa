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


const RekapAbsensi = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1 className="w-full text-center my-12 text-gray-500 text-xl font-medium">Rekap Data Absensi</h1>
      <div className="lg:ml-72 lg:mr-44">
        <div className="flex flex-col gap-3">
          <select className="flex items-center rounded-md shadow-sm w-28 border-gray-300">
            <option selected>Kelas</option>
            <option value="">1a</option>
            <option value="">1b</option>
          </select>
          <select className="flex items-center rounded-md shadow-sm w-1/6 border-gray-300">
            <option selected>Nama</option>
            <option value="">Berliana</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end lg:ml-72 lg:mr-44 mb-5">
            <div className="flex gap-4">
                <a href='#' className='flex bg-red-100 hover:bg-red-200 px-2 py-1 items-center rounded-md shadow-xl gap-1 text-sm font-medium'>
                    Cetak
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.53 9L13 3.47C12.8595 3.32931 12.6688 3.25018 12.47 3.25H8C7.27065 3.25 6.57118 3.53973 6.05546 4.05546C5.53973 4.57118 5.25 5.27065 5.25 6V18C5.25 18.7293 5.53973 19.4288 6.05546 19.9445C6.57118 20.4603 7.27065 20.75 8 20.75H16C16.7293 20.75 17.4288 20.4603 17.9445 19.9445C18.4603 19.4288 18.75 18.7293 18.75 18V9.5C18.7421 9.3116 18.6636 9.13309 18.53 9ZM13.25 5.81L16.19 8.75H13.25V5.81ZM16 19.25H8C7.66848 19.25 7.35054 19.1183 7.11612 18.8839C6.8817 18.6495 6.75 18.3315 6.75 18V6C6.75 5.66848 6.8817 5.35054 7.11612 5.11612C7.35054 4.8817 7.66848 4.75 8 4.75H11.75V9.5C11.7526 9.69811 11.8324 9.88737 11.9725 10.0275C12.1126 10.1676 12.3019 10.2474 12.5 10.25H17.25V18C17.25 18.3315 17.1183 18.6495 16.8839 18.8839C16.6495 19.1183 16.3315 19.25 16 19.25Z" fill="black"/>
                    <path d="M13.4895 14.8499C12.8746 14.4641 12.4119 13.8777 12.1795 13.1899C12.3948 12.5465 12.4598 11.8624 12.3695 11.1899C12.3407 11.0205 12.2581 10.8649 12.1339 10.7461C12.0097 10.6273 11.8506 10.5517 11.6801 10.5303C11.5096 10.509 11.3367 10.5432 11.1871 10.6278C11.0376 10.7123 10.9192 10.8428 10.8495 10.9999C10.7357 11.8083 10.8215 12.6323 11.0995 13.3999C10.7197 14.2872 10.2959 15.1549 9.82952 15.9999C9.11952 16.3999 8.14952 16.9999 7.99952 17.6899C7.87952 18.2499 8.92952 19.6899 10.7195 16.5699C11.5155 16.2745 12.3307 16.0339 13.1595 15.8499C13.7722 16.2002 14.4556 16.4087 15.1595 16.4599C15.3211 16.4641 15.4804 16.4204 15.6173 16.3344C15.7541 16.2483 15.8625 16.1237 15.9288 15.9762C15.995 15.8288 16.0162 15.665 15.9896 15.5055C15.9631 15.346 15.89 15.198 15.7795 15.0799C15.3595 14.6499 14.1095 14.7699 13.4895 14.8499ZM8.70952 17.8499C8.98976 17.3704 9.35985 16.9493 9.79952 16.6099C9.11952 17.6899 8.70952 17.8799 8.70952 17.8599V17.8499ZM11.6295 11.0399C11.8895 11.0399 11.8695 12.1899 11.6895 12.4999C11.5539 12.0283 11.5334 11.5311 11.6295 11.0499V11.0399ZM10.7595 15.9199C11.0983 15.3018 11.3924 14.6601 11.6395 13.9999C11.9044 14.4929 12.2729 14.9227 12.7195 15.2599C12.0486 15.428 11.3929 15.6521 10.7595 15.9299V15.9199ZM15.4595 15.7399C15.4595 15.7399 15.2795 15.9599 14.1295 15.4599C15.3795 15.3799 15.5895 15.6699 15.4595 15.7499V15.7399Z" fill="black"/>
                    </svg>
                </a>
                <button className="bg-[#1B438F] hover:bg-blue-700 text-white flex items-center gap-2 px-2 py-2 rounded-md shadow-md" onClick={toggleModal}>
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9992 12V19.88C14.0392 20.18 13.9392 20.5 13.7092 20.71C13.6166 20.8027 13.5068 20.8762 13.3858 20.9264C13.2648 20.9766 13.1351 21.0024 13.0042 21.0024C12.8732 21.0024 12.7435 20.9766 12.6225 20.9264C12.5016 20.8762 12.3917 20.8027 12.2992 20.71L10.2892 18.7C10.1802 18.5933 10.0973 18.4629 10.047 18.319C9.99666 18.175 9.9803 18.0213 9.99915 17.87V12H9.96915L4.20915 4.62C4.04676 4.41153 3.97349 4.14726 4.00534 3.88493C4.0372 3.6226 4.17159 3.38355 4.37915 3.22C4.56915 3.08 4.77915 3 4.99915 3H18.9992C19.2192 3 19.4292 3.08 19.6192 3.22C19.8267 3.38355 19.9611 3.6226 19.993 3.88493C20.0248 4.14726 19.9515 4.41153 19.7892 4.62L14.0292 12H13.9992Z" fill="white"/>
                    </svg>
                    Filter Data
                </button>
        </div>
      </div>
      <div className='lg:ml-72 lg:mr-40 py-2 text-center my-2 text-white text-sm font-medium bg-[#1B438F]'>
        Bulan Mei, Minggu 1
      </div>
      <div className="lg:ml-72 lg:mr-40">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-md text-white bg-[#1D48A6]">
              <tr>
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
        <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default RekapAbsensi;
