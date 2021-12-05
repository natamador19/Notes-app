import { privateAxios } from "../../utils/Axios";

export const fetchNotesData=(dispatch,page,pageItem,text)=>{
    dispatch(
        {
            type:"NOTES_START_FETCH",
            payload:null
        }
    )

}

export const addNewNote=(dispatch,noteTitle,noteContent,navigate,to)=>{
 dispatch(
     {type:"NOTES_ADD_START",payload:null}
 );
 
 privateAxios.get(`api/notes/newNote`,{noteTitle,noteContent}).then(({daya})=>{
    console.log(data);
    dispatch({
        type:"NOTES_ADD_SUCCESS",
        payload:null
    });
    dispatch({type:"NOTES_LIST_CLEAR",payload:null});
    navigate(to);
}).catch((err)=>{
    console.log(err);
    dispatch({type:"NOTES_ADD_ERROR",payload:null})
});
}