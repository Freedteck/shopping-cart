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
    });
}

export async function checkoutAction({ request }) {
  const formData = await request.formData();
  const method = formData.get("method");

  const checkOutWithCard = method === "card";
  const checkOutWithBank = method === "bank";
  const checkOutWithTransfer = method === "transfer";

  if (checkOutWithCard) {
    return { success: true, method: "card" };
  } else if (checkOutWithBank) {
    return { success: true, method: "bank" };
  } else if (checkOutWithTransfer) {
    return { success: true, method: "transfer" };
  }

  return { success: false, error: "Invalid payment method" };
}
