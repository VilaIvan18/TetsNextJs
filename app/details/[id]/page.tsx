"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentProduct } from "@/src/services";

const Details = () => {
  const params = useParams();
  const [currentProductData, setCurrentProductData] = useState<any>(null);
  const currentId = params?.id;

  useEffect(() => {
    getCurrentProduct(currentId).then((it) => setCurrentProductData(it.data));
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-[1440px] bg-white h-[800px] flex justify-center items-center">
        <div className="flex justify-center flex-col">
          <Image
            src={currentProductData?.url}
            width={500}
            height={500}
            alt="Current Product"
          />
          <div className="">Description</div>
          <div className="">{currentProductData?.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
