import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";

function SignupPage() {
  return (
    <AuthLayout
      title="Create Your Kingdom"
      subtitle="Start your adventure and become an algorithm legend."
    >
      <form className="auth-form">
        <FormInput
          label="Name"
          placeholder="Enter your name"
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
        />

        <button className="auth-btn">
          Create Account
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;