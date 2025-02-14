import useContextValue from "../../hooks/useContextValue";
import Navbar from "./Navbar";

const Header = () => {
  const { isDark } = useContextValue();

  return (
    <header
      className={`${
        isDark && "dark"
      } sticky top-0 z-50 max-w-screen-2xl mx-auto`}
    >
      <section className="px-5 lg:px-10 w-full bg-sky-200/70 backdrop-blur dark:bg-gray-950/80 text-darkTwo dark:text-lightTwo shadow-md">
        <Navbar />
      </section>
    </header>
  );
};

export default Header;
