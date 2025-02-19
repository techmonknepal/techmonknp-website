const NavbarLogo = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <img src="/logo.svg" alt="" className="h-[59px] w-[54px] left-[117px] " />
      <h1 className="text-[72px] leading-[108px] font-normal sm:hidden md:block">
        TechMonk
      </h1>
      <h1 className="text-black font-special font-extrabold text-4xl md:hidden sm:block">
        TM
      </h1>
    </div>
  );
};

export default NavbarLogo;
