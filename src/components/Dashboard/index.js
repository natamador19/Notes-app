import Page from "../Page";
import { useSelector } from "react-redux";
import Content from "../UI/Content";
const getSecurity = ({security})=>security;
const Dashboard=()=>{
    const {user}=useSelector(getSecurity);
    return(
        <Page title="NOTES APP" showHeader showNavBar>
            <Content >
                {user.email}
                <br/>
                {user._id}
            </Content>
        </Page>
    );
}
export default Dashboard;