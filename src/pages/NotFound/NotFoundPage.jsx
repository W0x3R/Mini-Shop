import notFoundImg from "@assets/images/notFoundImg.gif";
import { Text } from "@shared/ui/Text";
import { Wrapper } from "@shared/ui/Wrapper";

import * as styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={styles["not-found"]}>
      <Wrapper className={styles.wrapper}>
        <Text tag="h1" className={styles.title} variant="big">
          Page Not Found
        </Text>
        <img
          className={styles.img}
          width={800}
          height={600}
          src={notFoundImg}
          alt="Page not found image"
        />
      </Wrapper>
    </section>
  );
}
