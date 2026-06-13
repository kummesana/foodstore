// // import { Link } from "react-router-dom";
// // import { useSelector } from "react-redux";

// // function Navbar() {
// //   const cartCount = useSelector((state) =>
// //     state.cart.items.reduce(
// //       (total, item) => total + item.quantity,
// //       0
// //     )
// //   );

// //   return (
// //     <nav
// //       style={{
// //         backgroundColor: "#111",
// //         padding: "15px 30px",
// //         display: "flex",
// //         justifyContent: "center",
// //         gap: "40px",
// //       }}
// //     >
// //       <Link to="/" style={{ color: "white", textDecoration: "none" }}>
// //         Home
// //       </Link>

// //       <Link to="/veg" style={{ color: "white", textDecoration: "none" }}>
// //         Veg Items
// //       </Link>

// //       <Link to="/nonveg" style={{ color: "white", textDecoration: "none" }}>
// //         NonVeg Items
// //       </Link>

// //       <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
// //         Cart[{cartCount}]
// //       </Link>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {

//   const cartItems = useSelector(
//     (state) => state.cart
//   );

//   const totalItems = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/veg">Veg Items</Link>
//       <Link to="/nonveg">NonVeg Items</Link>

//       <Link to="/cart">
//         Cart[{totalItems}]
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Home
      </Link>

      <Link
        to="/veg"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Veg Items
      </Link>

      <Link
        to="/nonveg"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        NonVeg Items
      </Link>

      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Cart [{totalItems}]
      </Link>

      <Link
        to="/contact"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;