import { Container } from "@shared/ui";
import customerImg from "@assets/images/customerImg.png";
import * as styles from "./About.module.css";
import { Text, Link } from "@shared/ui";

export const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.wrapper}>
        <Text className={styles.title} variant="h1">
          About Our Store
        </Text>
        <div className={styles["content-wrapper"]}>
          <div className={styles["description-wrapper"]}>
            <Text className={styles.description}>
              Welcome to our online store, your go-to destination for
              high-quality beauty, personal care, and lifestyle products. From
              top-brand cosmetics like Essence Mascara Lash Princess to
              carefully selected everyday essentials, we bring you products that
              are loved by our customers worldwide.
            </Text>
            <Text className={styles.description}>
              Every item in our collection is chosen for quality, functionality,
              and style. We provide detailed product information, customer
              reviews, and real-time availability so you can shop confidently.
            </Text>
            <Text className={styles.description}>
              Enjoy great deals, clear shipping details, and a hassle-free
              return policy. Our mission is to make your shopping experience
              smooth, enjoyable, and rewarding. Discover our exclusive selection
              today and find the perfect product for your needs!
            </Text>
          </div>
          <img
            className={styles["customer-img"]}
            width={550}
            height={395}
            src={customerImg}
            alt="Happy customer shopping beauty products"
          />
        </div>
        <Link className={styles.link} href="/products">
          Shop Now
        </Link>
      </Container>
    </section>
  );
};
