const Register = () => {
    return (
      <section className="bg-[#1B438F] min-h-screen flex items-center justify-center">
          <div className="bg-white shadow-md max-w-md w-full flex lg:flex-row flex-col">
              <div className="flex flex-col p-10 bg-white w-full">
                  <h1 className="text-center text-xl font-bold text-[#1B438F] md:text-2xl">
                      REGISTER FORM
                  </h1>
                  <form className="py-6 md:space-y-6" action="#">
                      <div>
                          <label for="nama" className="block mb-2 text-sm">Nama Lengkap</label>
                          <input type="nama" name="nama" id="nama" className="border border-gray-600 sm:text-sm rounded-lg block w-full p-2" placeholder="Admin" required />
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
                              <option value="wali">Wali Murid</option>
                          </select>
                      </div>
                      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                  </form>
              </div>
          </div>
      </section>
    );
};

export default Register ;