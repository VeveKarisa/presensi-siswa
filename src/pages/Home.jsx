
const Home = () => {
    return (
      <div className="bg-slate-200 w-full h-screen flex items-center justify-center text-center font-black text-2xl">
            <div className=" justify-center gap-44 w-full items-center">
                <p>
                    hai anjing
                </p>
                <p>please check for your interest and contact me :D</p>  
                <p class="text-sm text-gray-500 dark:text-gray-400 my-4">Frontend Enthusiast | Designer</p>
                <button type="button" class=" bg-yellow-200 hover:bg-yellow-300 focus:ring-2 focus:outline-none focus:ring-yellow-500 gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Download My CV
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>    
                <div className="py-3 flex gap-1 text-center w-full justify-center">
                    <marquee behavior="" direction="">
                        <div className="flex gap-5">
                            <img className="w-12" src="react.svg" alt="react" />
                            <img className="w-11" src="vite.svg" alt="vite" />
                            <img className="w-14" src="tailwind.svg" alt="tailwind"/>
                            <img className="w-14" src="php.svg" alt="php" />
                            <img className="w-10" src="figma.svg" alt="figma" />
                            <img className="w-10" src="ps.svg" alt="ps" />
                            <img className="w-10" src="ai.svg" alt="ai" />
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Home;
