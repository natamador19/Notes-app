import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Page from "../Page";
import {List,ListItem} from '../UI/List';
import { fetchNotesData } from "../../store/reducers/notes/actions";
import { Link } from "react-router-dom";

const Loader =()=>{
    return (<div> Cargando ....</div>)
}

const NotesList=()=>{
    const notes=useSelector(({notes})=>notes);
    const dispatch=useDispatch();
    const {hasMore,items, currentPage,pageSize,totalDocs}=notes;
    const fetchMore=()=>{
        console.log("Loading More");
        fetchNotesData(dispatch,currentPage +1,pageSize)
    }

    useEffect(()=>{
        if(hasMore){
            fetchMore();
        }
    },[]);
    let id=0;
    const itemsUI =items.map((o,i)=>{
      
        return (<Link className="text-decoration-none " to={`/NotesModify/${o._id}`}><ListItem  key={o._id}>{o.noteTitle}</ListItem></Link>);
    });
    return(
        <Page showHeader title="Notes List" showNavBar>
            <List
                id="noteList"
                hasMore={hasMore}
                fetchMore={fetchMore}
                loader={(<Loader/>)}
                dataLength={items.length}
            >
               {itemsUI}
                
            </List>
        </Page>
    );
}

export default NotesList;