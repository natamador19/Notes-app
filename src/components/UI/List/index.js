import InfiniteScroll from 'react-infinite-scroll-component';

export const List=({id,dataLength,fetchMore,hasMore,loader,children})=>{
    return(
        <div id={id} >
            <InfiniteScroll
            dataLength={dataLength}
            next={fetchMore}
            hasMore={hasMore}
            loader={loader || <div>Loading ... </div>}
            scrollableTarget={id}
            >
                {children}
            </InfiniteScroll>
        </div>
    );
}
export const ListItem =({children})=>{
    return (<div className="card mx-2 my-3 py-2  text-dark border border-success  ">
        <div className="card-title m-2">
        {children}
        </div>
        
        </div>)
}