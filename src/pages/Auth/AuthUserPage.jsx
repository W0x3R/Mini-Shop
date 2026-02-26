import { LoginForm } from "@features/auth/components/LoginForm";
import { RegisterForm } from "@features/auth/components/RegisterForm";
import { Logo } from "@shared/ui/Logo";
import { Text } from "@shared/ui/Text";
import { Wrapper } from "@shared/ui/Wrapper";

import * as styles from "./AuthUserPage.module.css";

export default function AuthUserPage({ mode }) {
  const isLogin = mode === "login";

  return (
    <section className={styles.auth}>
      <Wrapper className={styles.wrapper}>
        <Logo className={styles["form-logo"]} width={55} height={55} />
        <Text className={styles["form-title"]} tag="h1" variant="medium">
          {isLogin ? "Login" : "Registration"}
        </Text>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </Wrapper>
    </section>
  );
}
