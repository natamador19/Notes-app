import { useState } from 'react';
import Page from '../Page';
import Content from '../UI/Content';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';


import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addNewNote } from '../../store/reducers/notes/actions';

const NotesAdd=()=>{
    const [txtTitle, setTxtTitle]=useState();
    const[txtContent,setTxtContent]=useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
       le,txtContent,
        addNewNote(dispatch,txtTitle,txtContent, navigate, "/list" )
      }
      return(
          <Page showHeader showNavBar title="Nueva Nota">
              <Content>
                  <TextBox
                    label="Título"
                    placeholder="Título"
                    value={txtTitle}
                    name="txtTitle"
                    onChange={onChangeHandler}
                  ></TextBox>
                  <TextBox
                    label="Contenido"
                    placeholder="Escribe nota"
                    value={txtContent}
                    name="txtContent"
                    onChange={onChangeHandler}
                  ></TextBox>
                  <div className="d-flex justify-content-center ">
                      <PrimaryButton onClick={onBtnClick}>Guardar</PrimaryButton>
                  </div>
              </Content>

          </Page>
      );
    

}
export default NotesAdd;