import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import useProductsFetch from "../../hooks/useProductsFetch";
import styles from "./Shop.module.css";

const Shop = () => {
  const { products, loading } = useProductsFetch();
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFetchedProducts(products);
    }
  }, [products]);
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>All Products</h2>
        <div className={styles.row}>
          {loading ? (
            <p>Loading...</p>
          ) : fetchedProducts ? (
            fetchedProducts.map((product) => (
              <Card key={product.id} data={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
