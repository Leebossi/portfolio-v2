import React, { useEffect, useState } from "react";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Routes, Route } from "react-router";
import CheckoutForm from "./components/CheckoutForm";

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

  const appearance = {
    theme: "night",
  } as Appearance;

  const loader = "auto";
  return (
    <>
      <main>
        {clientSecret && (
          <Elements
            options={{ clientSecret, appearance, loader }}
            stripe={stripePromise}
          >
            <Routes>
              <Route path="/checkout" element={<CheckoutForm />}></Route>
            </Routes>
          </Elements>
        )}
      </main>
    </>
  );
}

export default App;
