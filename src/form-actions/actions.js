export async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  return fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid credentials, Please try again");
      }
      return res.json();
    })
    .then((json) => {
      sessionStorage.setItem("token", json.token);
      return { success: true, token: json.token };
    })
    .catch((error) => {
      return { success: false, error: error.message };
    })
}
