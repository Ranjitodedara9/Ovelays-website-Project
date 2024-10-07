import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Orders = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [Order, setOrder] = useState([]);
  const [statusFilter, setStatusFilter] = useState();
  const [showUserData, setShowUserData] = useState(false);
  const [showProductData, setShowProductData] = useState(false);

  const getapi = async () => {
    try {
      let response = await fetch("http://localhost:4000/order/get");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data2 = await response.json();
      setFetchedData(data2);
      setShowUserData(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getapi();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/person/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User deleted successfully!");
        setFetchedData(fetchedData.filter((user) => user._id !== id));
      } else {
        alert("Error deleting user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClearDatastore = async () => {
    try {
      const response = await fetch(`http://localhost:4000/person`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("All users deleted successfully!");
        setFetchedData([]);
      } else {
        alert("Error deleting all users");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const statusupdate = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:4000/order/${id}`, {
        status,
      });
      if (response.status === 200) {
        alert("Order status updated successfully!");
        setOrder(
          Order.map((order) =>
            order._id === id ? { ...order, status } : order
          )
        );
      } else {
        alert("Error updating order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleUserChange = () => {
    setShowUserData(!showUserData);
    setShowProductData(false); // Hide product data when showing user data
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    setShowProductData(true); // Show product data when any order status filter is clicked
    setShowUserData(false); // Hide user data when showing product data
  };

  const filteredOrders =
    statusFilter === "All"
      ? Order
      : Order.filter((order) => order.status === statusFilter);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 p-4 mt-24 ">
        <h2 className="mb-4 text-xl font-semibold">Profile</h2>
        <ul>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              showUserData ? "bg-gray-300" : ""
            }`}
            onClick={handleUserChange}>
            Users
          </li>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              statusFilter === "All" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleFilterChange("All")}>
            All Orders
          </li>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              statusFilter === "Pending" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleFilterChange("Pending")}>
            Pending
          </li>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              statusFilter === "Shipped" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleFilterChange("Shipped")}>
            Shipped
          </li>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              statusFilter === "Delivered" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleFilterChange("Delivered")}>
            Delivered
          </li>
          <li
            className={`mb-2 p-2 cursor-pointer ${
              statusFilter === "Cancelled" ? "bg-gray-300" : ""
            }`}
            onClick={() => handleFilterChange("Cancelled")}>
            Cancelled
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 mt-24 bg-white rounded-lg shadow-md mx3-auto max-w-7xl">
        {showUserData && (
          <div id="userid">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">User Data</h2>
              <button
                onClick={handleClearDatastore}
                className="px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Delete All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Email
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Mobile
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fetchedData.map((user, id) => (
                    <tr key={id}>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        <img
                          src={"sa"}
                          alt={`${user.username}`}
                          className="object-cover w-16 h-16 mx-auto rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {user.mobile}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        <button
                          onClick={() => deleteUser(user._id)}
                          className="px-4 py-2 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Delete User
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showProductData && (
          <div>
            <h3 className="mt-8 text-2xl font-bold">Product Details</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full mt-4 bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Image
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Title
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Price
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Address
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Status
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300">
                      Set Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((product, productId) => (
                    <tr key={productId}>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="object-cover w-16 h-16 mx-auto rounded"
                        />
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        ${product.total} - {product.qunt}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {product.address}/{product.city}/{product.state}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        {product.status}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-gray-300">
                        <button
                          onClick={() => statusupdate(product._id, "Pending")}
                          className="px-4 py-2 m-1 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Pending
                        </button>
                        <button
                          onClick={() => statusupdate(product._id, "Shipped")}
                          className="px-4 py-2 m-1 text-white bg-yellow-600 rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                          Shipped
                        </button>
                        <button
                          onClick={() => statusupdate(product._id, "Delivered")}
                          className="px-4 py-2 m-1 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Delivered
                        </button>
                        <button
                          onClick={() => statusupdate(product._id, "Cancelled")}
                          className="px-4 py-2 m-1 text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Cancelled
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
