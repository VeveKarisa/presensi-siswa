const Auth = () => {
    return (
        <section className="bg-[#1B438F] min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md max-w-3xl w-full flex lg:flex-row flex-col mx-7 lg:mx-0">
                <div className="bg-gray-200 flex items-center justify-center py-10">
                    <img src="logo.png" alt="Logo" className="lg:w-2/3 md:w-1/4 w-24 object-contain"/>
                </div>
                <div className="flex flex-col p-10 bg-white w-full py-16">
                    <h1 className="text-center text-xl font-bold text-[#1B438F] md:text-2xl">
                        PRESENSI SISWA <span className="text-base text-black">Login</span>
                    </h1>
                    <form className="py-6 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email</label>
                            <input type="email" name="email" id="email" className="border border-gray-600 sm:text-sm rounded-lg block w-full p-2" placeholder="admin@gmail.com" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Password</label>
                            <input type="password" name="password" id="password" className="border border-gray-600 sm:text-sm rounded-lg block w-full p-2" placeholder="••••••" required />
                        </div>
                        {/* <div>
                            <label for="level" className="block mb-2 text-sm">level</label>
                            <select id="" class="border border-gray-600 sm:text-sm rounded-lg block w-full p-2">
                                <option value="admin">Admin </option>
                                <option value="guru">Guru</option>
                                <option value="wali">Wali Murid</option>
                            </select>
                        </div> */}
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 lg:mt-0 shadow-md">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
  };
  
  export default Auth;