import Menu from "../Menu";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const CssModulesPage = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <main>
        <section
          className="
            grid grid-cols-1 gap-5 max-w-fit mx-auto my-5
            lg:grid-cols-4 lg:gap-2.5
            md:grid-cols-3 md:gap-2.5
            sm:grid-cols-2 sm:gap-2.5
          "
        >
          {Array.from({ length: 8 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </section>
      </main>
    </>
  );
};

export default CssModulesPage;
