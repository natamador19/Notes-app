import { Fragment } from "react";
import NavBar from '../NavBar';


const Page=({children,className,showHeader,showNavBar,title})=>{
    let classNames="";
    let header=null;
    let navBar=null;
    if(showHeader){
        header=(<div className="bg-success bg-gradient w-100 text-center text-light py-2">{title}</div>);
    }
    if(showNavBar){
        navBar=(<NavBar/>);
    }

    return(
        <Fragment>
            {header}
            <section>
                {children}
            </section>
            {navBar}
        </Fragment>
    );
}

export default Page;