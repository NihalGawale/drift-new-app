import Breadcrumbs from "@/app/components/Breadcrumbs/breadcrumbs";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full h-auto pt-20 md:pt-32 flex justify-center items-center">
      <div className="w-[90%] h-[80%] flex flex-col">
        <Breadcrumbs />
        <div className="w-full h-[800px] py-6">Product Details</div>
      </div>
    </div>
  );
};

export default ProductDetails;
