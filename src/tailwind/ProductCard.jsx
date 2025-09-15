import Monitor4 from "../assets/monitor4.jpeg";
import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import SkeletonCard from "../Skeleton";
import Button from "./Button";

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
        <div className="relative flex flex-col items-center w-[240px] border border-gray-400/60 rounded-xl p-5">
          <span className="absolute top-2.5 right-2.5 z-[998] bg-[#e44d07] text-white px-2 py-1 rounded text-[10px] font-semibold">
            Promo
          </span>
          <picture>
            <img
              src={Monitor4}
              alt="monitor"
              className="w-[200px] h-[200px] object-cover rounded-md z-[997]"
              loading="lazy"
            />
          </picture>
          <div className="flex flex-col gap-2.5 pt-5">
            <h2 className="text-lg overflow-hidden text-ellipsis line-clamp-2">
              Monitor Gamer Clanm Pulsar, 23.8&quot; Full HD, 165Hz, 3-5ms
            </h2>
            <span className="flex gap-1">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </span>

            <span className="font-medium">R$ 649,99</span>

            <Button />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
