import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen h-20 px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="lg:ml-44 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg text-center font-medium text-gray-500 leading-6 mb-3" id="modal-title">
                  Detail Siswa
                </h3>
                <hr />
                <h3 className="text-lg font-medium text-gray-500 leading-6 mt-3" id="modal-title">
                  Guru : Vivi Nalia
                </h3>
                <div className='w-full justify-end items-end flex px-10 mb-4'>
                  <a href='#' className='flex bg-red-100 hover:bg-red-200 px-2 py-1 items-end rounded-md shadow-xl gap-1 text-sm font-medium'>
                    Cetak
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.53 9L13 3.47C12.8595 3.32931 12.6688 3.25018 12.47 3.25H8C7.27065 3.25 6.57118 3.53973 6.05546 4.05546C5.53973 4.57118 5.25 5.27065 5.25 6V18C5.25 18.7293 5.53973 19.4288 6.05546 19.9445C6.57118 20.4603 7.27065 20.75 8 20.75H16C16.7293 20.75 17.4288 20.4603 17.9445 19.9445C18.4603 19.4288 18.75 18.7293 18.75 18V9.5C18.7421 9.3116 18.6636 9.13309 18.53 9ZM13.25 5.81L16.19 8.75H13.25V5.81ZM16 19.25H8C7.66848 19.25 7.35054 19.1183 7.11612 18.8839C6.8817 18.6495 6.75 18.3315 6.75 18V6C6.75 5.66848 6.8817 5.35054 7.11612 5.11612C7.35054 4.8817 7.66848 4.75 8 4.75H11.75V9.5C11.7526 9.69811 11.8324 9.88737 11.9725 10.0275C12.1126 10.1676 12.3019 10.2474 12.5 10.25H17.25V18C17.25 18.3315 17.1183 18.6495 16.8839 18.8839C16.6495 19.1183 16.3315 19.25 16 19.25Z" fill="black"/>
                      <path d="M13.4895 14.8499C12.8746 14.4641 12.4119 13.8777 12.1795 13.1899C12.3948 12.5465 12.4598 11.8624 12.3695 11.1899C12.3407 11.0205 12.2581 10.8649 12.1339 10.7461C12.0097 10.6273 11.8506 10.5517 11.6801 10.5303C11.5096 10.509 11.3367 10.5432 11.1871 10.6278C11.0376 10.7123 10.9192 10.8428 10.8495 10.9999C10.7357 11.8083 10.8215 12.6323 11.0995 13.3999C10.7197 14.2872 10.2959 15.1549 9.82952 15.9999C9.11952 16.3999 8.14952 16.9999 7.99952 17.6899C7.87952 18.2499 8.92952 19.6899 10.7195 16.5699C11.5155 16.2745 12.3307 16.0339 13.1595 15.8499C13.7722 16.2002 14.4556 16.4087 15.1595 16.4599C15.3211 16.4641 15.4804 16.4204 15.6173 16.3344C15.7541 16.2483 15.8625 16.1237 15.9288 15.9762C15.995 15.8288 16.0162 15.665 15.9896 15.5055C15.9631 15.346 15.89 15.198 15.7795 15.0799C15.3595 14.6499 14.1095 14.7699 13.4895 14.8499ZM8.70952 17.8499C8.98976 17.3704 9.35985 16.9493 9.79952 16.6099C9.11952 17.6899 8.70952 17.8799 8.70952 17.8599V17.8499ZM11.6295 11.0399C11.8895 11.0399 11.8695 12.1899 11.6895 12.4999C11.5539 12.0283 11.5334 11.5311 11.6295 11.0499V11.0399ZM10.7595 15.9199C11.0983 15.3018 11.3924 14.6601 11.6395 13.9999C11.9044 14.4929 12.2729 14.9227 12.7195 15.2599C12.0486 15.428 11.3929 15.6521 10.7595 15.9299V15.9199ZM15.4595 15.7399C15.4595 15.7399 15.2795 15.9599 14.1295 15.4599C15.3795 15.3799 15.5895 15.6699 15.4595 15.7499V15.7399Z" fill="black"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-2 max-h-60 overflow-y-auto"> {/* Wrapper div untuk tabel */}
                  <table className="w-full text-sm text-center rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-[#334C8A]">
                      <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        <th scope="col" className="px-6 py-3">NISN</th>
                        <th scope="col" className="px-6 py-3">Nama Siswa</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">No Telp</th>
                        <th scope="col" className="px-6 py-3">Kelamin (L/P)</th>
                        <th scope="col" className="px-6 py-3">Kelas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border border-gray-300">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
                        <td className="px-6 py-4">334568810</td>
                        <td className="px-6 py-4">jaehyun ganteng</td>
                        <td className="px-6 py-4">jaehyun@email.com</td>
                        <td className="px-6 py-4">089971717188</td>
                        <td className="px-6 py-4">L</td>
                        <td className="px-6 py-4">Kelas</td>
                      </tr>
                      <tr className="bg-white border border-gray-300">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
                        <td className="px-6 py-4">334568810</td>
                        <td className="px-6 py-4">jaehyun ganteng</td>
                        <td className="px-6 py-4">jaehyun@email.com</td>
                        <td className="px-6 py-4">089971717188</td>
                        <td className="px-6 py-4">L</td>
                        <td className="px-6 py-4">Kelas</td>
                      </tr>
                      <tr className="bg-white border border-gray-300">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
                        <td className="px-6 py-4">334568810</td>
                        <td className="px-6 py-4">jaehyun ganteng</td>
                        <td className="px-6 py-4">jaehyun@email.com</td>
                        <td className="px-6 py-4">089971717188</td>
                        <td className="px-6 py-4">L</td>
                        <td className="px-6 py-4">Kelas</td>
                      </tr>
                      <tr className="bg-white border border-gray-300">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
                        <td className="px-6 py-4">334568810</td>
                        <td className="px-6 py-4">jaehyun ganteng</td>
                        <td className="px-6 py-4">jaehyun@email.com</td>
                        <td className="px-6 py-4">089971717188</td>
                        <td className="px-6 py-4">L</td>
                        <td className="px-6 py-4">Kelas</td>
                      </tr>
                      {/* sorry banyak, tes scroll nya bisa gak mwehe */}
                    </tbody>
                  </table>
                </div>
                <hr className='border-gray-300 my-5' />
                <div className="bg-gray-50 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#D40B0B] hover:bg-red-700 px-4 py-1 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kelas = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1 className="w-full text-center my-12 text-gray-500 text-xl font-medium">Data Kelas</h1>
      <div className="lg:ml-72 lg:mr-44 mb-5">
        <div className="flex justify-end">
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
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">Guru</th>
                <th scope="col" className="px-6 py-3">Kelas</th>
                <th scope="col" className="px-6 py-3">Data Siswa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-gray-300">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">1</th>
                <td className="px-6 py-4">Berliana</td>
                <td className="px-6 py-4">5 A</td>
                <td className="px-6 py-4">
                    <button className='bg-[#2068F3] hover:bg-blue-700 px-3 py-1 text-white rounded-md shadow-lg'  onClick={toggleModal}>
                        Lihat
                    </button>
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

export default Kelas;
