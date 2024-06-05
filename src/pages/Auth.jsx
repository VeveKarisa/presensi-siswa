const Auth = () => {
    return (
        <section className="bg-[#1B438F] min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md max-w-3xl w-full flex lg:flex-row flex-col">
                <div className="bg-gray-200 flex items-center justify-center py-10">
                    <img src="logo.png" alt="Logo" className="w-2/3 object-contain"/>
                </div>
                <div className="flex flex-col p-10 bg-white w-full">
                    <h1 className="text-center text-xl font-bold text-[#1B438F] md:text-2xl">
                        PRESENSI SISWA <span className="text-base text-black">Login</span>
                    </h1>
                    <form className="py-6 md:space-y-6" action="#">
                        <div>
                            <label for="username" className="block mb-2 text-sm">Username</label>
                            <input type="username" name="username" id="username" className="border border-gray-600 sm:text-sm rounded-lg block w-full p-2" placeholder="Admin" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm">Password</label>
                            <input type="password" name="password" id="password" className="border border-gray-600 sm:text-sm rounded-lg block w-full p-2" placeholder="••••••" required />
                        </div>
                        <div>
                            <label for="level" className="block mb-2 text-sm">level</label>
                            <select id="" class="border border-gray-600 sm:text-sm rounded-lg block w-full p-2">
                                <option value="admin">Admin </option>
                                <option value="guru">Guru</option>
                                <option value="siswa">Siswa</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
  };
  
  export default Auth;