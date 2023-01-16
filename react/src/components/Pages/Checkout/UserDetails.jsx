import { useState, useEffect } from "react";
import axios from "axios";
import "./UserDetails.css";
const UserDetails = () => {
  let loggedInUserAuth = JSON.parse(localStorage.getItem("loggedInUserAuth"));
  axios.defaults.headers.common = {
    Authorization: "Bearer " + loggedInUserAuth,
  };
  let loggedInUserID = JSON.parse(localStorage.getItem("loggedInUserID"));
  console.log(loggedInUserID, "logged user");
  const total = localStorage.getItem("localstoreTotal");
  const lists = localStorage.getItem("localdatastore");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState([]);
  const [userDetails, setUserdetails] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phoneNum: "",
  });
  //const [orderDetails, setOrderdetails] = useState({

  // });

  const fetchloggedInUser = async () => {
    if (loggedInUserID != null) {
      const fetched = await axios
        .get(`http://localhost:8081/v1/admin/user/userbyID/${loggedInUserID}`)
        .then((res) => {
          console.log(res.data.user, "fetched by logged in uer");
          setLoggedIn(res.data.user);
        });
    } else {
      console.log("login to create order");
    }
  };

  useEffect(() => {
    fetchloggedInUser();
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserdetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleCreateOrder = async (e) => {
    console.log(loggedIn._id, "logged id");
    if (
      loggedInUserID === null ||
      userDetails.fname === "" ||
      userDetails.lname === "" ||
      userDetails.email === "" ||
      userDetails.address === "" ||
      userDetails.city === "" ||
      userDetails.country === "" ||
      userDetails.phoneNum === ""
    ) {
      setError(true);
    } else {
      const orderDetails = {
        items: JSON.parse(lists),
        status: "Pending",
        shippingAddress: {
          address: userDetails.address,
          city: userDetails.city,
          country: userDetails.country,
        },
        customer: {
          customerId: loggedIn._id,
          fname: userDetails.fname,
          lname: userDetails.lname,
          email: userDetails.email,
          phoneNum: userDetails.phoneNum,
        },
        totalPrice: total,
      };

      await axios
        .post("http://localhost:8081/v1/admin/order/create-order", orderDetails)
        .then((res) => {
          console.log(res, "order creation");
        }); 
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="from__container">
        <form className="checkout-form">
          {/* Labels and inputs for form data */}
          <div className="outer_form_div">
            <div className="inner_form_div">
              <label className="label">First Name</label>
              <input
                onChange={handleInputs}
                className="input"
                name="fname"
                defaultValue={(userDetails.fname = loggedIn.firstname)}
                value={userDetails.fname}
                type="text"
              />
            </div>
            <div className="inner_form_div">
              <label className="label">Last Name</label>
              <input
                onChange={handleInputs}
                className="input"
                name="lname"
                defaultValue={(userDetails.lname = loggedIn.lastname)}
                value={userDetails.lname}
                type="text"
              />
            </div>
          </div>

          <div className="outer_form_div">
            <div className="inner_form_div">
              <label className="label">Email</label>
              <input
                onChange={handleInputs}
                className="input"
                name="email"
                defaultValue={(userDetails.email = loggedIn.email)}
                value={userDetails.email}
                type="email"
              />
            </div>

            <div className="inner_form_div">
              <label className="label">Address</label>
              <input
                onChange={handleInputs}
                className="input"
                name="address"
                value={userDetails.address}
                type="text"
              />
            </div>
          </div>

          <div className="outer_form_div">
            <div className="inner_form_div">
              <label className="label">City</label>
              <input
                onChange={handleInputs}
                className="input"
                name="city"
                value={userDetails.city}
                type="text"
              />
            </div>

            <div className="inner_form_div">
              <label className="label">Country</label>
              <input
                onChange={handleInputs}
                className="input"
                name="country"
                value={userDetails.country}
                type="text"
              />
            </div>
          </div>

          <div className="outer_form_div">
            <div className="inner_form_div">
              <label className="label">Phone no.</label>
              <input
                onChange={handleInputs}
                className="input"
                name="phoneNum"
                value={userDetails.phoneNum}
                type="text"
              />
            </div>
          </div>
          <div>Payment Mode: Cash on delivery</div>
          <button
            onClick={(e)=>handleCreateOrder(e)}
            className="checkout_btn"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserDetails;
