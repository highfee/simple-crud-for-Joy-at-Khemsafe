import { Header } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="p-4 pt-0">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
