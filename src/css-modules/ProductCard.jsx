import Button from "./Button";
import Monitor2 from "../assets/monitor3.jpeg";
import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import SkeletonCard from "../Skeleton";
import styles from "./product.module.css"
import buttonStyles from "./button.module.css"

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
        <div className={styles.product_card_container}>
          <span className={styles.product_target}>Promo</span>
          <picture>
            <img
              src={Monitor2}
              alt="monitor"
              className={styles.product_image}
              loading="lazy"
            />
          </picture>
          <div className={styles.product_content}>
            <h2>Monitor Gamer Clanm Pulsar, 23.8" Full HD, 165Hz, 3-5ms</h2>
            <span className={styles.stars}>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </span>
            <span>R$ 649,99</span>

            <Button text="Adicionar" buttonClass={buttonStyles.solid} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
