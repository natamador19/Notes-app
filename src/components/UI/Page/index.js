import {Fragment} from 'react';
import NavBar from '../NavBar';


const Page = ({children, className, showHeader, showNavBar, title})=>{
  //JSX
  let classNames ="";
  let header = null;
  let navBar = null;
  if (showHeader) {
  //  classNames.push("with_header");
    header = (<div className="fw-bold fs-1" >{title}</div>);
  }
  if (showNavBar) {
    //classNames.push("with_navbar");
    //navBar = (<div style={{ backgroundColor: "#000", color: "#FFF", minHeight: "64px" }}></div>);
    navBar = (<NavBar/>);
  }

  return (
    <Fragment >
      {header}
      <section className="">
        {children}
      </section>
      {navBar}
    </Fragment>
  );
}

export default Page;