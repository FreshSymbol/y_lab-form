const EMAIL = "test@mail.ru";
const PASSWORD = "password";

const fetchLogin = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (EMAIL === email && PASSWORD === password) resolve({ success: true });
      else resolve({ success: false });
    }, 2000);
  });
};

export const login = (email, password) => {
  fetchLogin(email, password)
    .then((res) =>
      res.success
        ? alert("Аутентифицирован")
        : alert("Неверный логин или пароль")
    )
    .catch((error) => alert(`Ошибка: ${error}`));
};
