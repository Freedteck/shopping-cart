import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Cart from "../routes/cart/Cart";

describe("Cart component", () => {
  const cartItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Item 1",
      price: 10,
      count: 1,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Item 2",
      price: 20,
      count: 2,
    },
  ];

  it("should display 'Your Cart (2)' and price as $50", async () => {
    const setCartItems = vi.fn();
    const handleClick = vi.fn();

    render(
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleClick={handleClick}
      />
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Your Cart (2)"
    );
    expect(screen.getByText("$50.00")).toBeInTheDocument();
  });

  it("should disable checkout button when cart is empty", async () => {
    const setCartItems = vi.fn();
    const handleClick = vi.fn();

    render(
      <Cart
        cartItems={[]}
        setCartItems={setCartItems}
        handleClick={handleClick}
      />
    );

    expect(screen.getByRole("button", { name: /checkout/i })).toBeDisabled();
  });

  it("should call handleClick when checkout button is clicked", async () => {
    const setCartItems = vi.fn();
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleClick={handleClick}
      />
    );

    await user.click(screen.getByRole("button", { name: /checkout/i }));

    expect(handleClick).toHaveBeenCalled();
  });
});
