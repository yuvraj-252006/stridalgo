import "../styles/form.css";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

function FormInput({
  label,
  type = "text",
  placeholder,
}: FormInputProps) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;