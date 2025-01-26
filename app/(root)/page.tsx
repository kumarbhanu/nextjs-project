// "use client";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { convertToPlainObject } from "@/lib/utils";

const HomePage = async() => {
 const latestProducts= await getLatestProducts()
 const updatedProducts = latestProducts.map(product => ({
  ...product,
  price: product.price.toString(), // Convert Decimal to string,
  rating: product.rating.toString()
}));
  return <div>
    <ProductList data={convertToPlainObject(updatedProducts)} title="New Arrivals"/>
  </div>;
};
export default HomePage;
