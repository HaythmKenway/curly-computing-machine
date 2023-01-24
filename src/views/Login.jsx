import React, {useEffect,useState} from 'react'
import "../components/login.css"

function Login() {
  const [obj, setObj] = useState({
    name: "",
    mobile: "",
    password: "",
    otp: "",
    email: "",
  });

  const mouseoverPass = () => {
    const visibility = document.getElementById("visibility");
    visibility.classList.add("fa-eye");
    visibility.classList.remove("fa-eye-slash");
  };
  
  const mouseoutPass = () => {
    const visibility = document.getElementById("visibility");
    visibility.classList.add("fa-eye-slash");
    visibility.classList.remove("fa-eye");
  };
  
  const handleChange = (event) => {
    setObj({
      ...obj,
      [event.target.id]: event.target.value
    });
  }

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch('http://localhost:4444/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    sendData();
  }, [obj]);

  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h1>User Login</h1>
          <label htmlFor="">
            <input type="text" onChange={handleChange} id="name" value={obj.name} name="username" placeholder="Enter Username" />
          </label>
          <label htmlFor="">
            <input type="email" name="email" onChange={handleChange} id="email" value={obj.email} placeholder="Enter mail id" />
          </label>
          <label htmlFor="" id="passip">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              value={obj.password}
            />
            <span
              className="icon"
              onMouseOver={mouseoverPass}
              onMouseOut={mouseoutPass}
              style={{ cursor: "pointer" }}
            >
              <i className="far fa-eye-slash" id="visibility" />
            </span>
            {/*javascript for visibility*/}
          </label>
          <label htmlFor="" id="mob">
            <input
              type="text"
              placeholder="Mobile Number"
              id="mobile"
              onChange={handleChange}
              value={obj.mobile}
              name="mobilenum"
            />
            <span id="getotp">
              <button type="submit" onChange={handleChange} id="otp" value={obj.otp} className="getotp" formAction="/getotp">
                Get OTP
              </button>
            </span>
          </label>
          <label htmlFor="">
            <input type="text" name="totp" placeholder="Enter OTP" />
          </label>
          <label htmlFor="">
            <button id="button" type="submit" formAction="/totp-validate">
              Submit
          </button>
        </label>
      </form>
    </div>
  </div>
  )
}

export default Login