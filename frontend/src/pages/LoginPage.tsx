import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Continue your journey and conquer new challenges."
    >
      <form className="auth-form">
        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
        />

        <button className="auth-btn">
          Login
        </button>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;