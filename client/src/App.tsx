import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY_TEST);
console.log(import.meta.env.STRIPE_SECRET_KEY_TEST);

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "test", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.setClientSecret));
  }, []);

  return (
    <>
      <main></main>
    </>
  );
}

export default App;
