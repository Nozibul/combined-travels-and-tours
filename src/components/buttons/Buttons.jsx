const Buttons = ({text}) => {
  return (
    <button className=" m-4 h-[36px] pl-6 pr-3 py-3 border outline-double outline-[#162d59] outline-1 font-semibold outline-offset-2 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
      <span className="absolute top-0 left-0 w-5 h-full transition-all duration-500 ease-out bg-[#162d59] rounded-r-full group-hover:w-full group-hover:h-full group-hover:rounded-none -z-1"></span>
      <span className="w-full tracking-[2px] text-[#162d59] text-sm font-bold transition-colors duration-300 ease-in-out group-hover:text-white z-10">
        {text}
      </span>
    </button>
  );
};

export default Buttons;
