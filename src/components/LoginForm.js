import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form className="form">
      <div className="login-header-wrapper">
        <h2 className="login-header">LOGIN</h2>
      </div>
      <input className="form-input" placeholder="Username" type="text" />
      <input className="form-input" placeholder="Password" type="password" />
      <button className="form-btn">Login</button>
    </form>
  );
};

export default LoginForm;
