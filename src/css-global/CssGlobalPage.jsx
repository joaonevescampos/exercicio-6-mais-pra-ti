import Menu from "../Menu";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import "./global.css"

const CssModulesPage = () => {
  let i = 0;
  return (
    <>
      <Navbar />
      <Menu />
      <main>
        <section className="product-list">
          {Array.from({ length: 8 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </section>
      </main>
    </>
  );
};

export default CssModulesPage;
