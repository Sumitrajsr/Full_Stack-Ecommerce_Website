import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import { Checkout } from "./pages/Checkout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductDetail from "./features/product/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected> <Home></Home></Protected>
     
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
    
  },
  {
    path: "/cart",
    element: <Protected>
    <CartPage></CartPage>
  </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected> ,
  },
  {
    path: "/product-detail/:id",
    element: <Protected> <ProductDetailPage></ProductDetailPage></Protected>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
