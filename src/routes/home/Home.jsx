import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothings, setMensClothings] = useState([]);
  const [womenClothings, setWomenClothings] = useState([]);

  useEffect(() => {
    const fetchElectronics = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=4"
      );
      const data = await response.json();
      setCategories(data);
    };

    const fetchJewelery = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery?limit=4"
      );
      const data = await response.json();
      setJewelery(data);
    };

    const fetchMensClothings = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing?limit=4"
      );
      const data = await response.json();
      setMensClothings(data);
    };

    const fetchWomenClothings = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing?limit=4"
      );
      const data = await response.json();
      setWomenClothings(data);
    };

    fetchElectronics();
    fetchJewelery();
    fetchMensClothings();
    fetchWomenClothings();
  }, []);
  return (
    <div className={styles.container}>
      <Banner />
      <section className={styles.section}>
        <h2>Electronics</h2>
        <div className={styles.row}>
          {categories.map((category) => (
            <Card key={category.id} data={category} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Jewelery</h2>
        <div className={styles.row}>
          {jewelery.map((jewel) => (
            <Card key={jewel.id} data={jewel} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Men&lsquo;s Clothings</h2>
        <div className={styles.row}>
          {mensClothings.map((mensClothing) => (
            <Card key={mensClothing.id} data={mensClothing} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Women&lsquo;s Clothings</h2>
        <div className={styles.row}>
          {womenClothings.map((womenClothing) => (
            <Card key={womenClothing.id} data={womenClothing} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
