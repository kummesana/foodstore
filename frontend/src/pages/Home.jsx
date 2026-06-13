import { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "40px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, #f10668, #fad0c4)",
          borderRadius: "20px",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
        Welcome to Food Store 🍔
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Discover fresh Veg items, tasty Non-Veg dishes, and delicious meals
          made with love. Order your favorite food anytime, anywhere.        </p>
      </div>

      {/* Features Section */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Why Choose Us?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "250px",
            background: "#0e9bec",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>🥗 Fresh Veg Items 🥦</h3>
          <p>Healthy and fresh vegetables cooked with pure ingredients</p>
          
        </div>

        <div
          style={{
            width: "250px",
            background: "#0e9bec",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3> Non-Veg Specials 🍗</h3>
          <p>Spicy and tasty chicken, mutton and seafood dishes.</p>
        </div>

        <div
          style={{
            width: "250px",
            background: "#0e9bec",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Fast Delivery 🚀</h3>
          <p>Get your food delivered fast and fresh to your doorstep.</p>
        </div>
      </div>

      {/* Specials Section */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "30px",
        }}
      >
        ⭐ Today's Specials
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#f3169e9f",
            width: "220px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3> Margherita Pizza</h3>
          <p>₹200</p>
        </div>

        <div
          style={{
            background: "#f3169e9f",
            width: "220px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Chicken Shawarma</h3>
          <p>₹150</p>
        </div>

        <div
          style={{
            background: "#f3169e9f",
            width: "220px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Zinger Burger</h3>
          <p>₹150</p>
        </div>
      </div>
    </div>
  );
}

export default Home;