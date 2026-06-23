import { useState } from "react";
import "../styles/form.css";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
}

function PasswordInput({
  label,
  placeholder,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="form-group">
      <label>{label}</label>

      <div className="password-wrapper">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;