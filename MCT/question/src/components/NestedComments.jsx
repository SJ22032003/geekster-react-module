import { useState } from "react";

function NestedComments({ data }) {
  const [comments, setComments] = useState(data);

  const deleteComment = (id) => {
   const filteredComment = comments.filter(ele => ele.id !== id);
   setComments(filteredComment);
  }

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} style={{ marginLeft: "100px", border: "1px solid red" }}>
            <h1>{comment.comment}</h1>
            <button
              onClick={() => deleteComment(comment.id)}
            >Delete</button>
            {comment.replies.length > 0 ? (
              <NestedComments data={comment.replies} />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default NestedComments;
