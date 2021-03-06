import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {publicAxios} from '../../store/utils/Axios';
import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const getSecurity = ({security})=>security;


const Login=()=>{
    const [txtCorreo,setTxtCorreo]=useState("");
    const [txtPassword,setTextPassword]=useState("");

    const security=useSelector(getSecurity);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const onBtnClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            {
                type:"SEC_LOGIN_FETCH",
                payload:null,
            }
        );

        
        publicAxios.post('/api/sec/login',{email:txtCorreo,pswd:txtPassword,}).then(
            ({data})=>{
                console.log(data);
                dispatch({
                    type:"SEC_LOGIN_SUCCESS",
                    payload:data,
                });
                navigate('/list',{replace:true});
            }
        ).catch((err)=>{ console.log(err);
            dispatch({
                type:"SEC_LOGIN_ERROR",
                payload:err,
            });
        });
    };

    const onChangeHandler=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(e.target.name=="txtCorreo"){
            setTxtCorreo(e.target.value);
        }else{
            setTextPassword(e.target.value);
        }
    }

    const {hasErrors}=security;

    return(
        <Page showHeader={true}title="Iniciar Sesión"  showNavBar>
            <Content >
                <TextBox
                label="Correo Electrónico"
                value={txtCorreo}
                placeholder="Correo Electrónico Valido"
                onChange={onChangeHandler}
                name="txtCorreo"
                />
                <Password 
                  label="Contraseña"
                  value={txtPassword}
                  placeholder="Contraseña"
                  onChange={onChangeHandler}
                  name="txtPassword"
                />
                <div>
                    <PrimaryButton  onClick={onBtnClick}>Iniciar Sesión</PrimaryButton>
                </div>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-success btn btn-primary px-5 rounded-pill  mx-auto " to="/signin">Crear Cuenta </Link>
                </div>
                {
                    (hasErrors&&(
                        <div>
                            No se pudo validar su correo o contraseña, Intente nuevamente
                        </div>
                    ))
                }
            </Content>
        </Page>
    );
}

export default Login;