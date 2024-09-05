import { login } from "../../api/auth";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    login(data.email, data.password);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <legend className={styles.title}>Вход</legend>
      <div>
        <label className={styles.label} htmlFor="email">
          Логин
        </label>
        <input
          className={styles.input}
          type="email"
          placeholder="test@mail.ru"
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Не валидный email",
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={styles.label} htmlFor="password">
          Пароль
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="password"
          {...register("password", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 4,
              message: "Пароль должен содержать больше 4 символов",
            },
            maxLength: {
              value: 22,
              message: "Пароль должен содержать не больше 22 символов",
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button className={styles.button} type="submit" disabled={!isValid}>
        Отправить
      </button>
    </form>
  );
};
