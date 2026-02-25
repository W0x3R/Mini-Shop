import { ProductsContent } from "@features/products/components/ProductsContent";
import { Wrapper } from "@shared/ui/Wrapper";

import * as styles from "./ProductsPage.module.css";

export default function ProductsPage() {
  return (
    <section className={styles.products}>
      <Wrapper className={styles.wrapper}>
        <ProductsContent />
      </Wrapper>
    </section>
  );
}
