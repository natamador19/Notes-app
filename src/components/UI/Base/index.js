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
    const curatedClassName="d-flex mt-4";
    const _onChange=onChange || function(e){return null;};
    return(
        <div className="d-flex flex-column ">
            <label className="py-2 mx-3">
                {label} 
            </label>
            <input className="m-3"
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                {...elseProps}
                />
        </div>
    );
}

export default Base;