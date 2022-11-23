
const InputValues = ({
  type,
  className,
  placeholder,
  arialLabel,
  name,
  onChange,
  errorMessage,
  required,
  pattern,
  focused,
  onBlur
}) => {
  // const [focused,setFocused] = useState(false)

  // const handleFocus = (e) => {setFocused(true)}

  return (
    <div className="mb-4">
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          aria-label={arialLabel}
          name={name}
          onChange={onChange}
          required = {required}
          pattern = {pattern}
          onBlur = {onBlur}
          focused = {focused}
        />
      <span className="errorInput">{errorMessage}</span>
    </div>
  );
};

export default InputValues;

