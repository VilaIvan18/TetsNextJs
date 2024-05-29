"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getProducts } from "@/src/services";

interface Product {
  id: string;
  url: string;
  title: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const router = useRouter();

  function navigateToDetals(id: string) {
    router.push(`/details/${id}`);
  }
  useEffect(() => {
    getProducts().then((it) => setProducts(it.data));
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full max-w-[1440px] bg-white min-h-screen p-9">
        <div className="flex flex-wrap gap-[30px]">
          {products
            ? products?.slice(0, 48).map((it) => {
                return (
                  <div
                    className="bg-decorationColor p-3 max-h-[800px] cursor-pointer"
                    key={it.id}
                  >
                    <Image
                      src={it.url}
                      alt="Description"
                      width={200}
                      height={200}
                    />
                    <div className="">Description</div>
                    <div className="w-full text-white mb-[10px]">
                      {it.title.split("").splice(0, 25)}
                    </div>
                    <button
                      onClick={() => navigateToDetals(it.id)}
                      className="bg-white p-2 text-decorationColor"
                    >
                      go to
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Products;
