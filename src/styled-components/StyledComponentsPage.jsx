import styled from "styled-components";
import Menu from "../Menu";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: fit-content;
  margin: 20px auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const CssModulesPage = () => {
  let i = 0;
  return (
    <>
      <Navbar />
      <Menu />
      <main>
        <ProductSection>
          {Array.from({ length: 8 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </ProductSection>
      </main>
    </>
  );
};

export default CssModulesPage;
