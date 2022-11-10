import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Products } from "./Components/Products";
import { MyAccount } from "./Components/MyAccount";
import { AddPersonalDetails } from "./Components/AddPersonalDetails";
import { NavigationBar } from "./Components/NavigationBar";
import { Cart } from "./Components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
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
  CustomerData,
  CustomerCreditcardData,
  CustomerArrayGotUpdated,
  CustomerCreditcardArrayGotUpdated,
} from "./index";
import { AddPaymentMethod } from "./Components/AddPaymentMethod";

function App() {
  const [creditcardArrayUpdate, setCreditcardArrayUpdate] = useState(false);

  const providerCreditcardArrayUpdate = useMemo(
    () => ({ creditcardArrayUpdate, setCreditcardArrayUpdate }),
    [creditcardArrayUpdate, setCreditcardArrayUpdate]
  );

  const [arrayUpdate, setArrayUpdate] = useState(false);

  const providerArrayUpdate = useMemo(
    () => ({ arrayUpdate, setArrayUpdate }),
    [arrayUpdate, setArrayUpdate]
  );

  const [customerData, setCustomerData] = useState([]);

  const providerCustomerData = useMemo(
    () => ({ customerData, setCustomerData }),
    [customerData, setCustomerData]
  );

  const [customerCreditcardData, setCustomerCreditcardData] = useState([]);

  const providerCustomerCreditcardData = useMemo(
    () => ({ customerCreditcardData, setCustomerCreditcardData }),
    [customerCreditcardData, setCustomerCreditcardData]
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const providerUserAuthenticator = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated, setIsAuthenticated]
  );

  const [currentlyLoggedIn, setcurrentlyLoggedIn] = useState([]);

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

  const [creditcardList, setCreditcardList] = useState([]);

  const providerCreditcard = useMemo(
    () => ({ creditcardList, setCreditcardList }),
    [creditcardList, setCreditcardList]
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
  }, [isAuthenticated]);
  // console.log(userList);

  useEffect(() => {
    const getCustomers = async () => {
      await Axios.get("https://localhost:7117/api/CustomerAPI")
        .then((res) => {
          setCustomerList(res.data);
          console.log("Customer was updated");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCustomers();
  }, [arrayUpdate]);
  // console.log(customerList);

  useEffect(() => {
    const getCreditcard = async () => {
      await Axios.get("https://localhost:7117/api/CreditcardAPI")
        .then((res) => {
          setCreditcardList(res.data);
          console.log("Creditcardlist was updated");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCreditcard();
  }, [creditcardArrayUpdate]);
  // console.log(creditcardList);

  useEffect(() => {
    const getProducts = async () => {
      await Axios.get("https://localhost:7117/api/ProductAPI")
        .then((res) => {
          setProductList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
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
  // console.log(CategoryList);

  return (
    <div className="App">
      <CustomerCreditcardData.Provider value={providerCustomerCreditcardData}>
        <CustomerData.Provider value={providerCustomerData}>
          <CurrentlyLoggedin.Provider value={providerCurrentlyLoggin}>
            <UserAuthenticator.Provider value={providerUserAuthenticator}>
              <NavigationBar />
            </UserAuthenticator.Provider>
          </CurrentlyLoggedin.Provider>
        </CustomerData.Provider>
      </CustomerCreditcardData.Provider>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/Login"
          element={
            <CustomerCreditcardData.Provider
              value={providerCustomerCreditcardData}
            >
              <CustomerData.Provider value={providerCustomerData}>
                <CreditcardArray.Provider value={providerCreditcard}>
                  <CustomerArray.Provider value={providerCustomer}>
                    <UserArray.Provider value={providerUsers}>
                      <UserAuthenticator.Provider
                        value={providerUserAuthenticator}
                      >
                        <CurrentlyLoggedin.Provider
                          value={providerCurrentlyLoggin}
                        >
                          <Login />
                        </CurrentlyLoggedin.Provider>
                      </UserAuthenticator.Provider>
                    </UserArray.Provider>
                  </CustomerArray.Provider>
                </CreditcardArray.Provider>
              </CustomerData.Provider>
            </CustomerCreditcardData.Provider>
          }
        />
        <Route
          path="/MyAccount"
          element={
            <CustomerCreditcardArrayGotUpdated.Provider
              value={providerCreditcardArrayUpdate}
            >
              <CustomerArray.Provider value={providerCustomer}>
                <UserAuthenticator.Provider value={providerUserAuthenticator}>
                  <CustomerCreditcardData.Provider
                    value={providerCustomerCreditcardData}
                  >
                    <CustomerData.Provider value={providerCustomerData}>
                      <CurrentlyLoggedin.Provider
                        value={providerCurrentlyLoggin}
                      >
                        <CustomerArrayGotUpdated.Provider
                          value={providerArrayUpdate}
                        >
                          <CreditcardArray.Provider value={providerCreditcard}>
                            <MyAccount />
                          </CreditcardArray.Provider>
                        </CustomerArrayGotUpdated.Provider>
                      </CurrentlyLoggedin.Provider>
                    </CustomerData.Provider>
                  </CustomerCreditcardData.Provider>
                </UserAuthenticator.Provider>
              </CustomerArray.Provider>
            </CustomerCreditcardArrayGotUpdated.Provider>
          }
        />
        <Route
          path="/AddPaymentMethod"
          element={
            <CustomerCreditcardData.Provider
              value={providerCustomerCreditcardData}
            >
              <CustomerData.Provider value={providerCustomerData}>
                <AddPaymentMethod />
              </CustomerData.Provider>
            </CustomerCreditcardData.Provider>
          }
        />

        <Route
          path="/AddPersonalDetails"
          element={
            <CurrentlyLoggedin.Provider value={providerCurrentlyLoggin}>
              <CustomerData.Provider value={providerCustomerData}>
                <AddPersonalDetails />
              </CustomerData.Provider>
            </CurrentlyLoggedin.Provider>
          }
        />

        <Route
          path="/Signup"
          element={
            <CurrentlyLoggedin.Provider value={providerCurrentlyLoggin}>
              <UserAuthenticator.Provider value={providerUserAuthenticator}>
                <Signup />
              </UserAuthenticator.Provider>
            </CurrentlyLoggedin.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
