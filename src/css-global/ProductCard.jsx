import Button from "./Button";
import Monitor2 from "../assets/monitor2.jpeg";
import { IoMdStar } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <span className="product-target">Novo</span>
      <picture>
        <img src={Monitor2} alt="monitor" className="product-image" loading="lazy" />
      </picture>
      <div className="product-content">
        <h2>
          Monitor Gamer Clanm Pulsar, 23.8" Full HD, 165Hz, 3-5ms
          dfgvsdfsdffdfsdfsd dfsdfsdfsdfsdfsdfds dsfs
        </h2>
        <span className="stars">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </span>
        <span>R$ 649,99</span>

        <Button text="Adicionar" buttonClass="solid"/>
      </div>
    </div>
  );
};

export default ProductCard;
