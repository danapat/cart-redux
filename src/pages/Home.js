import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";

export const Home = () => {
  useTitle("Home");
  const products = useSelector(state => state.productsState.products);
  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
