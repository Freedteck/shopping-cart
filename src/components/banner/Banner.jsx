import useBannerFetch from "../../hooks/useBannerFetch";
import styles from "./Banner.module.css";

const Banner = () => {
  const { data } = useBannerFetch();
  return (
    <section className={styles.banner}>
      {data ? (
        <>
          <div
            className={styles.bannerImg}
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
          <div className={styles.bannerText}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </>
      ) : (
        <>
          <div
            className={styles.bannerImg}
            style={{
              backgroundImage: `url(https://via.placeholder.com/150)`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className={styles.bannerText}>
            <h1>Mighty Super Deals</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quo quisquam eum ab. Ipsum consequatur, fugiat
              dignissimos enim porro soluta!{" "}
            </p>
            <p></p>
          </div>
        </>
      )}
    </section>
  );
};

export default Banner;
