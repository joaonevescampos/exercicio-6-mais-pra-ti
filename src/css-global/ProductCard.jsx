import Button from "./Button";
import Monitor1 from "../assets/monitor1.jpeg";
import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import SkeletonCard from "../Skeleton";

const ProductCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="product-card-container">
          <span className="product-target">Novo</span>
          <picture>
            <img
              src={Monitor1}
              alt="monitor"
              className="product-image"
              loading="lazy"
            />
          </picture>
          <div className="product-content">
            <h2>Monitor Gamer Clanm Pulsar, 23.8" Full HD, 165Hz, 3-5ms</h2>
            <span className="stars">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </span>
            <span>R$ 649,99</span>

            <Button text="Adicionar" buttonClass="solid" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
