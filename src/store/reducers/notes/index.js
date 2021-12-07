const initialState={
    hasMore:true,
    items:[],
    fetching:false,
    hasErrors:false,
    errors:[],
    currentPage:0,
    pageSize:15,
    totalPages:0,
    totalDocs:0,
    _id:0,
    noteTitle:'',
    noteContent:''
}




const notesReducer=(state=initialState,actions)=>{
    const {type,payload}=actions;
    switch(type){
        case "NOTES_START_FETCH":
            return{
                ...state,
                fetching:true,
                hasErrors:false,
                errors:[]
            }
        case "NOTES_FETCH_SUCCESS":
            const totalPages = (Math.ceil(payload.docsMatched / payload.itemsPerPage));
      const hasMore = payload.page !== totalPages;
            return{
                ...state,
                fetching:false,
                hasErrors:false,
                errors:[],
                totalPages:totalPages,
                currentPage:payload.page,
                items:[...state.items, ...payload.documents],
                hasMore:hasMore,
                totalDocs:payload.docsMatched
            }
        case "NOTES_LIST_CLEAR":return{...initialState};
        
        case "NOTES_SUCCESS":
            return {
                ...state,
                _id:[...payload._id],
                noteTitle :[...payload.noteTitle],
                noteContent:[...payload.noteContent]
            }
        
        default:return state;
    }
}

export default notesReducer;