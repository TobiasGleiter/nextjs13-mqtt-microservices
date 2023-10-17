import BaseIcon from "@/components/icons/BaseIcon";

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 text-secondary-600">
      <nav className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 text">
        <div className="flex antialiased items-center">
          <BaseIcon icon="logo" style="w-6 h-6 text-cyan-500" />
          <p className="ml-2 text-lg font-bold">
            Post-Comments Microservice (Frontend)
          </p>
        </div>
        <div className="flex"></div>
      </nav>
    </header>
  );
};

export default Header;
