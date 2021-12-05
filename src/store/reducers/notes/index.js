const initialState={
    hasMore:true,
    items:[],
    fetching:false,
    hasErrors:false,
    errors:[],
    currentPage:0,
    pageSize:15,
    totalPages:0,
    totalDocs:0
}

const notesReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case "NOTES_START_FETCH":
            return{
                ...state,
                fetching:true,
                hasErrors:false,
                errors:[]
            }
        case "NOTES_FETCH_SUCCESS":
            return{
                ...state,
                fetching:false,
                hasErrors:false,
                errors:[],
                totalPages:totalPages,
                currentPage:payload.page,
                items:[...state.items,...payload.documents],
                hasMore:hasMore,
                totalDocs:payload.docsMatched
            }
        case "NOTES_LIST_CLEAR":return{...initialState};
        default:return state;
    }
}

export default notesReducer;