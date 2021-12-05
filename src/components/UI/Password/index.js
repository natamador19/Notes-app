import Base from "../Base";
const Password=(
    {
        label,
        onChange,
        placeholder,
        value,
        className,
        name
    }
)=>{
    return(
        <Base
            type="password"
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            label={label}
            className="form-control"
            name={name}
        >
        </Base>
    );
}

export default Password;