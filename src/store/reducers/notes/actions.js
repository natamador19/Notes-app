import { privateAxios } from "../../utils/Axios";

export const fetchNotesData=(dispatch,page,pageItem,text)=>{
    dispatch(
        {
            type:"NOTES_START_FETCH",
            payload:null
        }
    )
    privateAxios.get(`/api/notes/facet/${page}/${pageItem}`).then(({data})=>{
        console.log(data);
        dispatch({
            type:"NOTES_FETCH_SUCCESS",
            payload:data
        })
    }).catch((err)=>{
        console.log(err);
        dispatch({
            type:"NOTES_FETCH_ERROR",
            payload:["Error al traer Info"]
        })
    });

}

export const addNewNote=(dispatch,noteTitle,noteContent,navigate,to)=>{
 dispatch(
     {type:"NOTES_ADD_START",payload:null}
 );
 
 privateAxios.post(`api/notes/newNote`,{noteTitle,noteContent}).then(({data})=>{
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

export const notebyId=(dispatch,id)=>{
    dispatch(
        {
            type:"NOTES_BRING_SUCCESS",payload:null
        });
        privateAxios.get(`api/notes/notebyid/${id}`).then(({data})=>{
            console.log(data);
            dispatch({
                type:"NOTES_SUCCESS",
                payload:data
            });
            dispatch({type:"NOTES_LIST_CLEAR",payload:null});
        }).catch((err)=>{
            console.log(err);
            dispatch({type:"NOTES_BRING_ERROR",payload:null})
        }); 

}

export const UpdateNote =(dispatch,noteTitle,noteContent,id,navigate,to)=>{
    dispatch({
        type:"NOTES_UPDATE_START",payload:null
    });

    privateAxios.put(`api/notes/update/${id}`,{noteTitle,noteContent,id}).then(({data})=>{
        console.log(data);
        dispatch({
            type:"NOTES_UPDATE_SUCCESS",
            payload:null
        });
        navigate(to);
    }).catch((err)=>{
        console.log(err);
        dispatch({type:"NOTES_UPDATE_ERROR",payload:null})
    });
}