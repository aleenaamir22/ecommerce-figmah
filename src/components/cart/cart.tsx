"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/cart1.png" },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/cart2.png" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/cart3.png" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/cart4.png" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/cart5.png" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT20") {
      setDiscount(0.2); // 20% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div style={{ backgroundColor: "white", fontFamily: "sans-serif" }}>
      <header style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "12rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "white", letterSpacing: "0.1rem" }}>Shopping Cart</h1>
      </header>
      <main style={{ padding: "3rem 1.5rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f7fafc", textAlign: "left" }}>
              <th style={{ padding: "1rem", fontWeight: "600" }}>Product</th>
              <th style={{ padding: "1rem", fontWeight: "600" }}>Price</th>
              <th style={{ padding: "1rem", fontWeight: "600" }}>Quantity</th>
              <th style={{ padding: "1rem", fontWeight: "600" }}>Total</th>
              <th style={{ padding: "1rem", fontWeight: "600" }}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #e2e8f0" }}>
                <td style={{ padding: "1rem", display: "flex", alignItems: "center" }}>
                  <Image src={item.image} alt={item.name} width={64} height={64} style={{ objectFit: "cover", borderRadius: "0.5rem", marginRight: "1rem" }} />
                  <span>{item.name}</span>
                </td>
                <td style={{ padding: "1rem" }}>${item.price.toFixed(2)}</td>
                <td style={{ padding: "1rem" }}>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                    style={{ width: "4rem", border: "1px solid #e2e8f0", borderRadius: "0.375rem", padding: "0.5rem", textAlign: "center" }}
                    min="0"
                  />
                </td>
                <td style={{ padding: "1rem" }}>${(item.price * item.quantity).toFixed(2)}</td>
                <td style={{ padding: "1rem", color: "#f56565", cursor: "pointer" }} onClick={() => handleRemoveItem(index)}>
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", marginTop: "2.5rem", gap: "1.5rem" }}>
          <div style={{ width: "100%", maxWidth: "50%", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Coupon Code</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt unde ratione eius voluptates. Quae quisquam nam ullam ea corrupti voluptates voluptatibus quis, deserunt nobis velit, minus, natus expedita sed debitis?<br></br> Coupon Code:DISCOUNT20
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your code"
                style={{ flexGrow: "1", border: "1px solid #e2e8f0", borderRadius: "0.375rem", padding: "0.75rem 1rem", marginRight: "0.5rem" }}
              />
              <button
                onClick={handleApplyCoupon}
                style={{
                  backgroundColor: "#FF9F0D",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.375rem",
                  fontWeight: "600"
                }}
              >
                Apply
              </button>
            </div>
          </div>

          <div style={{ width: "100%", maxWidth: "33.33%" }}>
            <div style={{ backgroundColor: "#f7fafc", padding: "2rem", borderRadius: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span>Discount</span>
                <span>${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span>Shipping Charges</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600", fontSize: "1.125rem" }}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
             
              <button style={{
           width: "100%",
  backgroundColor: "#FF9F0D",
  color: "white",
  marginTop: "1rem",
  padding: "1rem",
  borderRadius: "0.375rem",
  fontWeight: "600"
}}><Link href='checkout' style={{color:"white"}}>
  Proceed to Checkout</Link>
</button>

              </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
