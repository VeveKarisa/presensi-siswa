import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jaehyun from "../assets/jaehyun.jpeg";

const Sidebar = () => {

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubMenuOpen = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
    const [activePage, setActivePage] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

    return (
        <div>
            <div className="flex overflow-hidden bg-white pt-16">
                <aside id="sidebar" className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
                    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex-1 px-3 bg-white divide-y space-y-1">
                                <ul className="space-y-2 pb-2">
                                    <li>
                                        <div className="flex p-4">
                                            <img className="w-12 h-12 rounded-full shadow-xl object-cover" src={jaehyun} alt="profile"/>
                                            <div className="ml-4">
                                                <p>Jaehyun</p>
                                                <p className="font-bold">Admin</p>
                                            </div>
                                        </div>
                                    </li>
                                    <hr />
                                    <li>
                                        <a href="/admin/dashboard" className={`text-base font-normal rounded-lg flex items-center hover:bg-blue-800 hover:text-white p-2 group ${activePage === '/admin/dashboard' ? 'bg-[#1B438F]' : ''}`}>
                                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2393 4.154C11.1753 4.09559 11.0902 4.06299 11.0017 4.06299C10.9131 4.06299 10.828 4.09559 10.7641 4.154L2.85352 11.3674C2.81992 11.3981 2.79319 11.435 2.77495 11.4758C2.75671 11.5166 2.74733 11.5605 2.74738 11.6049L2.74609 18.3749C2.74609 18.723 2.89096 19.0569 3.14882 19.303C3.40668 19.5492 3.75642 19.6874 4.12109 19.6874H8.25039C8.43273 19.6874 8.60759 19.6183 8.73653 19.4952C8.86546 19.3722 8.93789 19.2052 8.93789 19.0312V13.4531C8.93789 13.366 8.97411 13.2826 9.03857 13.221C9.10304 13.1595 9.19047 13.1249 9.28164 13.1249H12.7191C12.8103 13.1249 12.8977 13.1595 12.9622 13.221C13.0267 13.2826 13.0629 13.366 13.0629 13.4531V19.0312C13.0629 19.2052 13.1353 19.3722 13.2643 19.4952C13.3932 19.6183 13.5681 19.6874 13.7504 19.6874H17.878C18.2426 19.6874 18.5924 19.5492 18.8502 19.303C19.1081 19.0569 19.253 18.723 19.253 18.3749V11.6049C19.253 11.5605 19.2436 11.5166 19.2254 11.4758C19.2072 11.435 19.1804 11.3981 19.1468 11.3674L11.2393 4.154Z" fill={activePage === '/admin/dashboard' ? 'white' : 'gray'} />
                                            <path d="M21.0938 10.014L17.8797 7.07889V2.625C17.8797 2.45095 17.8073 2.28403 17.6784 2.16096C17.5494 2.03789 17.3746 1.96875 17.1922 1.96875H15.1297C14.9474 1.96875 14.7725 2.03789 14.6436 2.16096C14.5147 2.28403 14.4422 2.45095 14.4422 2.625V3.9375L11.9535 1.66605C11.7206 1.44129 11.3743 1.3125 11 1.3125C10.627 1.3125 10.2816 1.44129 10.0487 1.66646L0.909235 10.0131C0.641969 10.2592 0.608454 10.6641 0.851657 10.9307C0.912729 10.998 0.987507 11.0527 1.07144 11.0915C1.15538 11.1303 1.24671 11.1525 1.33989 11.1565C1.43306 11.1606 1.52613 11.1465 1.61343 11.1152C1.70072 11.0838 1.78042 11.0358 1.84767 10.9741L10.7637 2.84156C10.8277 2.78315 10.9128 2.75055 11.0013 2.75055C11.0898 2.75055 11.175 2.78315 11.2389 2.84156L20.1558 10.9741C20.2871 11.0944 20.4631 11.16 20.645 11.1566C20.827 11.1532 21.0001 11.0811 21.1265 10.9561C21.3903 10.6952 21.3684 10.2646 21.0938 10.014Z" fill={activePage === '/admin/dashboard' ? 'white' : 'gray'}/>
                                            </svg>
                                            <span className={`ml-3 font-medium ${activePage === '/admin/dashboard' ? 'text-white' : 'text-gray-500'}`}>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <p className="ml-3 text-[12px] text-gray-400">Menu Utama</p>
                                    </li>
                                    <li>
                                        <a href="edit_profile" className={`text-base text-gray-900 font-normal rounded-lg flex items-center hover:bg-blue-800 hover:text-white p-2 group ${activePage === '/admin/edit_profile' ? 'bg-[#1B438F]' : ''}`}>
                                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.8174 1.36964 5.76516 3.80761 3.51472C6.24558 1.26428 9.55219 0 13 0C16.4478 0 19.7544 1.26428 22.1924 3.51472C24.6304 5.76516 26 8.8174 26 12C26 15.1826 24.6304 18.2348 22.1924 20.4853C19.7544 22.7357 16.4478 24 13 24C9.55219 24 6.24558 22.7357 3.80761 20.4853C1.36964 18.2348 0 15.1826 0 12ZM13 1.72127C10.8417 1.72134 8.72989 2.30041 6.92154 3.38802C5.1132 4.47563 3.68625 6.02491 2.81428 7.84739C1.94232 9.66986 1.66292 11.687 2.01009 13.6533C2.35726 15.6197 3.31602 17.4505 4.76974 18.9231C5.65229 17.6471 6.86905 16.597 8.30756 15.8699C9.74608 15.1428 11.3599 14.7622 13 14.7631C14.6401 14.762 16.254 15.1426 17.6926 15.8697C19.1311 16.5968 20.3478 17.647 21.2303 18.9231C22.684 17.4505 23.6427 15.6197 23.9899 13.6533C24.3371 11.687 24.0577 9.66986 23.1857 7.84739C22.3137 6.02491 20.8868 4.47563 19.0785 3.38802C17.2701 2.30041 15.1583 1.72134 13 1.72127ZM19.8347 20.1154C19.1401 19.0103 18.143 18.0932 16.9435 17.456C15.744 16.8187 14.384 16.4836 13 16.4844C11.616 16.4836 10.256 16.8187 9.0565 17.456C7.85695 18.0932 6.85993 19.0103 6.16533 20.1154C8.11791 21.5208 10.524 22.2824 13 22.2787C15.5753 22.2787 17.9464 21.4706 19.8347 20.1154ZM8.38729 10.1972C8.38729 9.06793 8.87327 7.98492 9.73832 7.18641C10.6034 6.3879 11.7766 5.9393 13 5.9393C14.2234 5.9393 15.3966 6.3879 16.2617 7.18641C17.1267 7.98492 17.6127 9.06793 17.6127 10.1972C17.6127 11.3265 17.1267 12.4095 16.2617 13.208C15.3966 14.0065 14.2234 14.4551 13 14.4551C11.7766 14.4551 10.6034 14.0065 9.73832 13.208C8.87327 12.4095 8.38729 11.3265 8.38729 10.1972ZM13 7.66058C12.6391 7.66058 12.2818 7.72619 11.9484 7.85367C11.615 7.98114 11.312 8.16799 11.0569 8.40353C10.8017 8.63908 10.5993 8.91871 10.4612 9.22647C10.3231 9.53423 10.252 9.86408 10.252 10.1972C10.252 10.5303 10.3231 10.8602 10.4612 11.1679C10.5993 11.4757 10.8017 11.7553 11.0569 11.9908C11.312 12.2264 11.615 12.4132 11.9484 12.5407C12.2818 12.6682 12.6391 12.7338 13 12.7338C13.7288 12.7338 14.4278 12.4666 14.9431 11.9908C15.4585 11.5151 15.748 10.8699 15.748 10.1972C15.748 9.52444 15.4585 8.87924 14.9431 8.40353C14.4278 7.92783 13.7288 7.66058 13 7.66058Z" fill={activePage === '/admin/edit_profile' ? 'white' : 'gray'}/>
                                            </svg>
                                            <span className={`ml-3 font-medium  ${activePage === '/admin/edit_profile' ? 'text-white' : 'text-gray-500'}`}>Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="registrasi_user" className={`text-base text-gray-900 font-normal rounded-lg flex items-center hover:bg-blue-800 hover:text-white p-2 group ${activePage === '/admin/registrasi_user' ? 'bg-[#1B438F]' : ''}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_142_720)">
                                                <rect width="24" height="24" fill="none"/>
                                                <path d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z" stroke-width="1.5" stroke={activePage === '/admin/registrasi_user' ? 'white' : 'gray'}/>
                                                <path d="M21.998 20C22 19.836 22 19.669 22 19.5C22 17.015 18.418 15 14 15C9.582 15 6 17.015 6 19.5C6 21.985 6 24 14 24C16.231 24 17.84 23.843 19 23.563" stroke={activePage === '/admin/registrasi_user' ? 'white' : 'gray'} stroke-width="1.5" stroke-linecap="round"/>
                                                </g>
                                            </svg>
                                            <span className={`ml-3 font-medium  ${activePage === '/admin/registrasi_user' ? 'text-white' : 'text-gray-500'}`}>User</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="data_kelas" className={`text-base text-gray-900 font-normal rounded-lg flex items-center hover:bg-blue-800 hover:text-white p-2 group ${activePage === '/admin/data_kelas' ? 'bg-[#1B438F]' : ''}`}>
                                            <svg width="35" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.625H30.8333V8.47917H29.1667V6.16667H6.66667V23.8958H24.4892V25.4375H5V4.625ZM30 14.6458C30.663 14.6458 31.2989 14.4022 31.7678 13.9685C32.2366 13.5348 32.5 12.9466 32.5 12.3333C32.5 11.72 32.2366 11.1318 31.7678 10.6981C31.2989 10.2645 30.663 10.0208 30 10.0208C29.337 10.0208 28.7011 10.2645 28.2322 10.6981C27.7634 11.1318 27.5 11.72 27.5 12.3333C27.5 12.9466 27.7634 13.5348 28.2322 13.9685C28.7011 14.4022 29.337 14.6458 30 14.6458ZM31.6925 16.1952C32.775 16.1952 33.6317 16.6454 34.1925 17.3407C34.7167 17.992 34.9383 18.7975 34.9883 19.5414C35.0379 20.3045 34.9255 21.0691 34.6575 21.7922C34.4075 22.4629 33.985 23.1566 33.3333 23.6322V31.2188C33.3339 31.5093 33.2163 31.7893 33.0038 32.0033C32.7913 32.2172 32.4996 32.3493 32.1866 32.3733C31.8736 32.3973 31.5623 32.3114 31.3147 32.1328C31.067 31.9541 30.9011 31.6958 30.85 31.4091L29.775 25.4375H29.5267L28.3117 31.4315C28.254 31.7144 28.0843 31.9672 27.8357 32.1405C27.5872 32.3138 27.2777 32.3951 26.9678 32.3685C26.6579 32.3419 26.3699 32.2093 26.1601 31.9966C25.9503 31.784 25.8338 31.5066 25.8333 31.2188V20.2213C25.6667 20.4561 25.5022 20.6922 25.34 20.9297L25.275 21.0245L25.2583 21.0491L25.2542 21.0561C25.1419 21.2229 24.9854 21.3605 24.7997 21.4558C24.6139 21.5512 24.4049 21.6012 24.1925 21.6011H20.0258C19.6943 21.6011 19.3764 21.4792 19.142 21.2624C18.9075 21.0456 18.7758 20.7515 18.7758 20.4448C18.7758 20.1382 18.9075 19.8441 19.142 19.6272C19.3764 19.4104 19.6943 19.2886 20.0258 19.2886H23.5067C23.7092 18.9987 23.9758 18.6226 24.2558 18.2449C24.5475 17.851 24.8692 17.4339 25.1558 17.1071C25.295 16.9475 25.4508 16.781 25.6075 16.6446C25.6842 16.5775 25.7908 16.4904 25.9208 16.4134C26.1498 16.2733 26.4179 16.1977 26.6925 16.196L31.6925 16.1952Z" fill={activePage === '/admin/data_kelas' ? 'white' : 'gray'}/>
                                            </svg>
                                            <span className={`ml-1 font-medium  ${activePage === '/admin/data_kelas' ? 'text-white' : 'text-gray-500'}`}>Data Kelas</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={toggleSubMenuOpen} className={`text-base text-gray-900 font-normal rounded-lg flex items-center hover:bg-blue-800 hover:text-white p-2 group ${activePage === '/admin/data_user' || activePage === '/admin/data_guru' || activePage === '/admin/data_siswa' ? 'bg-[#1B438F]' : ''}`}>
                                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.3988 6.58563L15.1488 3.08563C15.0522 3.05544 14.9478 3.05544 14.8512 3.08563L3.60117 6.58563C3.50804 6.61473 3.42705 6.6704 3.36965 6.74478C3.31225 6.81916 3.28132 6.90849 3.28125 7.00016V15.7502C3.28125 15.8662 3.33064 15.9775 3.41854 16.0595C3.50645 16.1416 3.62568 16.1877 3.75 16.1877C3.87432 16.1877 3.99355 16.1416 4.08146 16.0595C4.16936 15.9775 4.21875 15.8662 4.21875 15.7502V7.60719L9.36094 9.20734C8.72604 10.0033 8.29279 10.9232 8.09379 11.898C7.89479 12.8727 7.93522 13.8769 8.21204 14.835C8.48886 15.793 8.99485 16.6801 9.69196 17.4293C10.3891 18.1785 11.2591 18.7704 12.2367 19.1605C9.79219 19.7883 7.66641 21.2528 6.16992 23.3878C6.10794 23.4849 6.08863 23.6006 6.11604 23.7107C6.14345 23.8208 6.21545 23.9168 6.31696 23.9784C6.41846 24.0401 6.54159 24.0627 6.66055 24.0415C6.77951 24.0203 6.88505 23.9569 6.95508 23.8647C8.80898 21.2102 11.7422 19.6877 15 19.6877C18.2578 19.6877 21.191 21.2102 23.0449 23.8636C23.1149 23.9558 23.2205 24.0192 23.3394 24.0404C23.4584 24.0616 23.5815 24.039 23.683 23.9773C23.7845 23.9157 23.8566 23.8198 23.884 23.7097C23.9114 23.5996 23.8921 23.4838 23.8301 23.3867C22.3395 21.2517 20.2078 19.7872 17.7633 19.1594C18.7409 18.7693 19.6109 18.1774 20.308 17.4282C21.0051 16.679 21.5111 15.792 21.788 14.8339C22.0648 13.8758 22.1052 12.8716 21.9062 11.8969C21.7072 10.9221 21.274 10.0022 20.6391 9.20625L26.3988 7.41359C26.4918 7.38432 26.5725 7.32858 26.6297 7.25421C26.6869 7.17985 26.7177 7.09061 26.7177 6.99906C26.7177 6.90752 26.6869 6.81828 26.6297 6.74391C26.5725 6.66955 26.4918 6.6138 26.3988 6.58453V6.58563ZM21.0938 13.1252C21.0938 14.0378 20.8585 14.937 20.4078 15.7469C19.9571 16.5568 19.3042 17.2536 18.5042 17.7784C17.7042 18.3032 16.7807 18.6407 15.8116 18.7622C14.8425 18.8838 13.8563 18.7859 12.9362 18.4768C12.0162 18.1677 11.1893 17.6565 10.5255 16.9864C9.86174 16.3163 9.38047 15.5069 9.12236 14.6266C8.86426 13.7464 8.83692 12.821 9.04263 11.9288C9.24835 11.0366 9.68108 10.2037 10.3043 9.50047L14.8512 10.9147C14.9477 10.9453 15.0523 10.9453 15.1488 10.9147L19.6957 9.50047C20.6006 10.5194 21.0952 11.8017 21.0938 13.1252ZM15 10.0386L5.23242 7.00016L15 3.96172L24.7676 7.00016L15 10.0386Z"  fill={activePage === '/admin/data_user' || activePage === '/admin/data_guru' || activePage === '/admin/data_siswa' ? 'white' : 'gray'}/>
                                        </svg>
                                        <span className={`ml-1 font-medium ${activePage === '/admin/data_user' || activePage === '/admin/data_guru' || activePage === '/admin/data_siswa' ? 'text-white' : ''}`}>Data User</span>
                                        </a>
                                        {isSubMenuOpen && (
                                            <div className="z-10 divide-y divide-gray-100">
                                                <ul className="py-2 text-sm text-gray-700">
                                                    <li>
                                                        <a href="/admin/data_guru" className={`block px-4 py-2 border rounded-md hover:bg-gray-100 mb-2 ${activePage === '/admin/data_guru' ? 'bg-[#1B438F] text-white' : ''}`}>Guru</a>
                                                    </li>
                                                    <li>
                                                        <a href="/admin/data_siswa" className={`block px-4 py-2 border rounded-md hover:bg-gray-100 ${activePage === '/admin/data_siswa' ? 'bg-[#1B438F] text-white' : ''}`}>Siswa</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
     )
}

export default Sidebar;
