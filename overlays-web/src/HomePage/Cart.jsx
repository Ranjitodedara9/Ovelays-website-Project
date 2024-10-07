import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from "../Redux/newslice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ProductAdd } from "../Redux/newslice";
import { AddToCart, removeFromCart } from "../Redux/MySlices";

function Cart() {
  const cartItems = useSelector((state) => state.mainslice.CartItem);
  console.log(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    console.log(itemId);
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleBuyNow = (product) => {
    console.log(product);
    dispatch(ProductAdd(product));
    navigate("/productdetails", { state: product });
    window.scrollTo(0, 0);
    // Add your buy now logic here
  };

  let subtotal = 0;

  if (cartItems) {
    cartItems.reduce((firstval, currentval) => {
      return (subtotal = currentval.price * currentval.qty + firstval);
    }, 0);
  } else {
    subtotal = 0;
  }
  console.log(Number(subtotal));

  return (
    <>
      <div className="w-[100%] m-auto mt-10 header-box">
        <div className="flex justify-between  h-[40vh] items-center w-[80%] m-auto">
          <h1 className="text-4xl font-bold">Cart</h1>
          <div className="flex gap-5">
            <Link to={"/"}>
              <a className="text-blue-500 hover:underline">Home</a>
            </Link>
            /<span className="text-gray-500">Cart</span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mx-auto mt-10 lg:w-4/5 sm:px-6 lg:px-8 cart-table-container">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse cart-table">
            <thead>
              <tr>
                <th className="p-2 border-b lg:p-4">Image</th>
                <th className="p-2 border-b lg:p-4">Product</th>
                <th className="p-2 border-b lg:p-4">Quantity</th>
                <th className="p-2 border-b lg:p-4">Price</th>
                <th className="p-2 border-b lg:p-4">Total</th>
                <th className="p-2 border-b lg:p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b">
                  <td className="p-2 lg:p-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-20 h-20 cart-item-image"
                    />
                  </td>
                  <td className="p-2 lg:p-4">{item.name}</td>
                  <td className="p-2 lg:p-4">
                    <div className="flex quantity-controls">
                      <span
                        className="font-bold text-[16px]"
                        onClick={() => {
                          if (item.qty <= 1) {
                            dispatch(AddToCart({ qty: 1, mes: "minqty" }));
                          } else {
                            dispatch(
                              AddToCart({
                                qty: item.qty - 1,
                                id: item._id,
                                mes: "minqty",
                              })
                            );
                          }
                        }}>
                        -
                      </span>
                      <span>{item.qty}</span>
                      <span
                        className=" font-bold text-[16px]"
                        onClick={() =>
                          dispatch(
                            AddToCart({
                              qty: item.qty + 1,
                              id: item._id,
                              mes: "plusqty",
                            })
                          )
                        }>
                        +
                      </span>
                    </div>
                  </td>

                  <td className="p-2 lg:p-4">
                    {" "}
                    <span className="block font-bold lg:hidden">Price:</span>$
                    {item.price}
                  </td>

                  <td className="p-2 lg:p-4">
                    <span className="block font-bold lg:hidden">Total:</span>$
                    {item.total}
                  </td>
                  <td className="flex gap-3 p-2 lg:p-4">
                    <button
                      className="px-2 py-1 text-white bg-red-500 rounded lg:px-3 lg:py-2 remove-button hover:bg-red-600"
                      onClick={() => handleRemoveItem(item._id)}>
                      Remove
                    </button>
                    <button
                      className="px-2 py-1 text-white bg-red-500 rounded lg:px-3 lg:py-2 remove-button hover:bg-red-600"
                      onClick={() => handleBuyNow(item)}>
                      Buy now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end w-full px-4 mx-auto mt-10 lg:w-4/5 sm:px-6 lg:px-8">
        <div className="w-full gap-3 p-4 text-right bg-gray-100 rounded-lg shadow-lg md:p-6 md:w-2/3 lg:w-1/3">
          <div className="mb-4">
            <div className="flex justify-between pb-4">
              <span>Subtotal :</span>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="flex justify-between pt-4">
              <span>Total :</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
