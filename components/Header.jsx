import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-[60px] flex justify-between items-center sticky top-0 bg-white z-20">
      <div>
        <FaBars />
      </div>
      <div>
        <h1 className="text-xl">Khemsafe</h1>
      </div>
    </header>
  );
};

export default Header;
