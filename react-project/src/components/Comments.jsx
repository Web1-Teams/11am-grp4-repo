import React from "react";
import commentsData from "../data/comments.json";
import "../styles/Comments.css"; 

const Comments = ({ productId }) => {
    const filteredComments = commentsData.filter(
        (comment) => comment.productId === parseInt(productId)
    );
    return (
        <div className="comments-section mt-5 border border-primary p-2">
            <h3 className="mb-4">التعليقات</h3>
            {filteredComments.length > 0 ? (
                <ul className="list-unstyled">
                    {filteredComments.map((comment) => (
                        <li key={comment.id} className="mb-3 border p-4">
                            <strong>{comment.name}:</strong>
                            <p className="mb-0">{comment.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default Comments;
