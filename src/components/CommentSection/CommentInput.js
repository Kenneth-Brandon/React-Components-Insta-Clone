import React from "react";

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={event => props.setCommentInput(event.target.value)}
        onKeyDown={event => {
          event.key === "Enter" && props.onEnterKeyDown(event);
        }}
      />
    </form>
  );
};

export default CommentInput;
