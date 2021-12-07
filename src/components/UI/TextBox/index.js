import Base from "../Base";

const TextBox=(
    {
        label,
        onChange,
        placeholder,
        value,
        className,
        name,
        ...elseProps
    }
)=>{
    return (
        <Base
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            label={label}
            className={className}
            name={name}
            {...elseProps}
        ></Base>
    );
}

export default TextBox;