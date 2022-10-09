const Header = () => {
  return (
      <header className="fixed top-0 z-10 w-full  px-20 py-1 md:px-4 transition">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <span className="mx-2 my-1 font-['Orbitron'] text-[white] text-[30px] font-bold justify-left">
                Backstage
              </span>
            </a>
            <a href="/">
              <span className="text-white mx-3">
              Browse
              </span>
            </a>
            <a href="/">
              <span className="text-white mx-3">
              About
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a
            href="/"
            className="flex hover:bg-primarydark transition rounded-lg text-center cursor-pointer">
              <span className="mx-3">
                <button className="self-center text-center py-0.5 rounded bg-blue-700 px-2.5">Sign Up</button>
              </span>
            </a>
              <span className="mx-3">
                <img className="inline object-cover w-8 h-8 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
              </span>
          </div>
        </nav>
      </header>
  );
};

export default Header;