// "use client";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { convertToPlainObject } from "@/lib/utils";

const HomePage = async() => {
 const latestProducts= await getLatestProducts()
 console.log(latestProducts,"jjj")
  return <div>
    <ProductList data={convertToPlainObject(latestProducts)} title="New Arrivals"/>
  </div>;
};
export default HomePage;
