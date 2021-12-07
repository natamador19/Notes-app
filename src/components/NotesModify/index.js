import { useEffect, useState } from 'react';
import Page from '../Page';
import Content from '../UI/Content';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { privateAxios } from "../../store/utils/Axios";
import { UpdateNote } from '../../store/reducers/notes/actions';
import { notebyId } from '../../store/reducers/notes/actions';
import { useParams } from 'react-router';
const NotesModify =()=>{
    const notes =useSelector(({notes})=>notes);
    const dispatch=useDispatch();    
    const navigate = useNavigate();

    
    const [txtTitle, setTxtTitle]=useState();
    const[txtContent,setTxtContent]=useState();
    const {id}=useParams();
    useEffect(()=>{
      privateAxios.get(`api/notes/notebyid/${id}`).then((data)=>{
        setTxtContent(data.data.noteContent);
          setTxtTitle(data.data.noteTitle);
          console.log(data.data.noteContent)
      }).catch((err)=>{
          
      });
    },[]);
    
   
   
    
    const onChangeHandler = (e)=> {
        const {name, value} = e.target;
        switch(name){
          case "txtTitle":
            setTxtTitle(value);
            break;
          case "txtContent":
            setTxtContent(value);
            break;
        }
      }
    const onBtnClick = (e)=> {
        e.preventDefault();
        e.stopPropagation();
       
       UpdateNote(dispatch,txtTitle,txtContent,id, navigate, "/list" )
      }
       return(
        <Page showHeader showNavBar title="Modificar Nota">
        <Content>
            <TextBox
              label="Título"
              value={txtTitle}
              name="txtTitle"
              onChange={onChangeHandler}
            ></TextBox>
            <TextBox
              label="Contenido"
              value={txtContent}
              name="txtContent"
              onChange={onChangeHandler}
              
            ></TextBox>
            <div>
                <PrimaryButton onClick={onBtnClick}>Guardar</PrimaryButton>
            </div>
        </Content>

    </Page>
       );
}
export default NotesModify;