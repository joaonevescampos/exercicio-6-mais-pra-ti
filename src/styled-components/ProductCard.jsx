import Monitor5 from "../assets/monitor5.jpeg";
import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import SkeletonCard from "../Skeleton";
import styled from "styled-components";

const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  border: 1px solid rgba(128, 128, 128, 0.555);
  border-radius: 15px;
  padding: 20px;
`;

const ProductTarget = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 998;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: rgb(228, 77, 7);
  font-weight: 600;
  font-size: 10px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  z-index: 997;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0 0 0;
`;

const ProductTitle = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
`;

const ProductStars = styled.span`
  display: flex;
  gap: 2px;
`;

const ProductButton = styled.button`
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  height: 40px;
  background: ${(props) => (props.$solid ? "rgb(38, 38, 112)" : "transparent")};
`;

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
        <ProductCardContainer>
          <ProductTarget>Promo</ProductTarget>
          <picture>
            <ProductImage
              src={Monitor5}
              alt="monitor"
              className="product-image"
              loading="lazy"
            />
          </picture>
          <ProductContent>
            <ProductTitle>
              Monitor Gamer Clanm Pulsar, 23.8" Full HD, 165Hz, 3-5ms
            </ProductTitle>
            <ProductStars>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </ProductStars>
            <span>R$ 649,99</span>

            <ProductButton $solid>Adicionar</ProductButton>
          </ProductContent>
        </ProductCardContainer>
      )}
    </>
  );
};

export default ProductCard;
