import useFetch from "../../hooks/use-fetch";

function CommentsList() {

  const {data,loading,err} = useFetch('https://dummyjson.com/comments')

  if(loading) return <h1>Fetching comments! Please Wait</h1>
    return (
      <div>
        <h1>Comments list</h1>
        <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((commentItem,index) => (
              <div key={commentItem?.id}
              >
                <h3>{commentItem?.user.username} </h3>
                <label>{commentItem?.body}</label>
                <p>{commentItem?.likes}</p>
              </div>
            ))
          : null}
      </ul>
      </div>
    )
  }
  
  export default CommentsList;