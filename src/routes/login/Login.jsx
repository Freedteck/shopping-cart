import { Form, useActionData, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../../components/button/Button";
import { useEffect } from "react";

const Login = () => {
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if ((actionData?.success && actionData?.token) || token) {
      navigate("/");
    }
  }, [actionData, navigate]);

  return (
    <div className={styles.container}>
      <Form method="post" className={styles.form}>
        <fieldset>
          <legend>Login</legend>
          <label>
            Username
            <input type="text" name="username" required placeholder="JohnD" />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              placeholder="********"
            />
          </label>
          <Button label="Login" />
        </fieldset>
        <p className={styles.info}>
          You can use this user&lsquo; username and password to login. any other
          usernames return error.
          <span>{`{username: johnd, password: m38rmF$}`}</span>
        </p>
        {actionData?.error && (
          <p className={styles.error}>{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className={styles.success}>Login successful</p>
        )}
      </Form>
    </div>
  );
};

export default Login;
