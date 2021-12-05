const Base=({
    type,
    name,
    id,
    className,
    placeholder,
    value,
    onChange,
    label,
    ...elseProps
})=>{
    const curatedClassName="form-control ";
    const _onChange=onChange || function(e){return null;};
    return(
        <div className={curatedClassName}>
            <label>
                {label}
                <input
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                {...elseProps}
                />
            </label>
        </div>
    );
}

export default Base;