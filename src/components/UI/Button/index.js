export const Button=({onClick,children,...rest})=>{
    return(
        <button onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export const PrimaryButton=({children,...rest})=>{
    return(
        <div className="d-flex justify-content-center my-3">
        <Button {...rest} className="btn btn-success btn btn-primary px-5 rounded-pill  mx-auto ">
            {children}
        </Button>
        </div>
    );
}


export const SecondaryButton=({children,...rest})=>{
    return(
        <Button {...rest} className="btn btn-info">
            {children}
        </Button>
    );
}