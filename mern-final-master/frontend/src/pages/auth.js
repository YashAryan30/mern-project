import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="main2-body">
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                fill="currentColor"
                className="bi bi-yelp"
                viewBox="0 0 16 16"
              >
                <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
              </svg>
              Recipe Island
            </h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link fw-bold py-1 px-0" to="/">
                Home
              </Link>
              <Link className="nav-link fw-bold py-1 mx-3" to="/Dashboard">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        <main className="auth">
          <Login />
          <Register />
        </main>

        <footer className="mt-auto">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
              <div className="col-md-4 d-flex align-items-center" id="footer">
                <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    fill="currentColor"
                    className="bi bi-yelp"
                    viewBox="0 0 16 16"
                    id="footer"
                  >
                    <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
                  </svg>
                </a>
                <span className="mb-3 mb-md-0" id="footer">
                  © 2023 Recipe Island
                </span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      fill="currentColor"
                      className="bi bi-twitter-x mx-2"
                      viewBox="0 0 16 16"
                      id="footer"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      fill="currentColor"
                      className="bi bi-instagram mx-2"
                      viewBox="0 0 16 16"
                      id="footer"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      fill="currentColor"
                      className="bi bi-facebook mx-2"
                      viewBox="0 0 16 16"
                      id="footer"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Original Code */}
      <div className="auth-container login">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Original Code*/}
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
