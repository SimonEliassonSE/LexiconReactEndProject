import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Products } from "./Components/Products";
import { MyAccount } from "./Components/MyAccount";
import { AddShippingAddress } from "./Components/AddShippingAddress";
import { NavigationBar } from "./Components/NavigationBar";
import { Cart } from "./Components/Cart";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { Signup } from "./Components/Signup";
import { useState, useMemo, useEffect } from "react";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./Context/Auth";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import Axios from "axios";

import {
  UserArray,
  CustomerArray,
  CreditcardArray,
  ProductArray,
  CategoryArray,
  UserAuthenticator,
  CurrentlyLoggedin,
} from "./index";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const providerUserAuthenticator = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated, setIsAuthenticated]
  );

  const [currentlyLoggedIn, setcurrentlyLoggedIn] = useState(false);

  const providerCurrentlyLoggin = useMemo(
    () => ({ currentlyLoggedIn, setcurrentlyLoggedIn }),
    [currentlyLoggedIn, setcurrentlyLoggedIn]
  );

  const [userList, setUserList] = useState([]);

  const providerUsers = useMemo(
    () => ({ userList, setUserList }),
    [userList, setUserList]
  );

  const [customerList, setCustomerList] = useState([]);

  const providerCustomer = useMemo(
    () => ({ customerList, setCustomerList }),
    [customerList, setCustomerList]
  );

  const [CreditcardList, setCreditcardList] = useState([]);

  const providerCreditcard = useMemo(
    () => ({ CreditcardList, setCreditcardList }),
    [customerList, setCustomerList]
  );

  const [ProductList, setProductList] = useState([]);

  const providerProduct = useMemo(
    () => ({ ProductList, setProductList }),
    [ProductList, setProductList]
  );

  const [CategoryList, setCategoryList] = useState([]);

  const providerCategory = useMemo(
    () => ({ CategoryList, setCategoryList }),
    [CategoryList, setCategoryList]
  );

  useEffect(() => {
    const getUsers = async () => {
      await Axios.get("https://localhost:7117/api/IdentityAPI")
        .then((res) => {
          setUserList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUsers();
  }, []);
  console.log(userList);

  useEffect(() => {
    const getCustomers = async () => {
      await Axios.get("https://localhost:7117/api/CustomerAPI")
        .then((res) => {
          setCustomerList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCustomers();
  }, []);
  console.log(customerList);

  useEffect(() => {
    const getCustomers = async () => {
      await Axios.get("https://localhost:7117/api/CreditcardAPI")
        .then((res) => {
          setCreditcardList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCustomers();
  }, []);
  console.log(CreditcardList);

  useEffect(() => {
    const getCustomers = async () => {
      await Axios.get("https://localhost:7117/api/ProductAPI")
        .then((res) => {
          setProductList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCustomers();
  }, []);
  console.log(ProductList);

  useEffect(() => {
    const getCategorys = async () => {
      await Axios.get("https://localhost:7117/api/CategoryAPI/categories")
        .then((res) => {
          setCategoryList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCategorys();
  }, []);
  console.log(CategoryList);

  return (
    // <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/Login"
          element={
            <UserArray.Provider value={providerUsers}>
              <UserAuthenticator.Provider value={providerUserAuthenticator}>
                <CurrentlyLoggedin.Provider value={providerCurrentlyLoggin}>
                  <Login />
                </CurrentlyLoggedin.Provider>
              </UserAuthenticator.Provider>
            </UserArray.Provider>
          }
        />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/AddShippingAddress" element={<AddShippingAddress />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
    // </Auth.Provider>
  );
}

export default App;
