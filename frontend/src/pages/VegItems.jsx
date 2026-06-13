import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";

function VegItems() {
  const vegProducts = useSelector(
    (state) => state.products.veg
  );

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Veg Items
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {vegProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "280px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              textAlign: "center",
              padding: "15px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              onError={(e) => {
                console.log("Image not found:", product.image);
                e.target.src =
                  "https://via.placeholder.com/280x200?text=Image+Not+Found";
              }}
            />

            <h2>{product.name}</h2>

            <h3 style={{ color: "green" }}>
              ₹{product.price}
            </h3>

            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegItems;