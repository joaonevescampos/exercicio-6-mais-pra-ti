import Menu from "../Menu";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import styles from "./product.module.css"

const CssModulesPage = () => {
  let i = 0;
  return (
    <>
      <Navbar />
      <Menu />
      <main>
        <section className={styles.product_list}>
          {Array.from({ length: 8 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </section>
      </main>
    </>
  );
};

export default CssModulesPage;
