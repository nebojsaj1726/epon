import React, { useState } from "react";

const Post = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, e.target.title.value, e.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <React.Fragment>
      {isEdit ? (
        <tr>
          <td className="col-md-6">
            <form onSubmit={handleOnEditSubmit}>
              <div className="form-group">
                <label htmlFor="titleInput">Edit Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="titleInput"
                  placeholder="Edit Title"
                  name="title"
                  defaultValue={title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contentTxt">Edit Content</label>
                <textarea
                  id="contentTxt"
                  rows="3"
                  className="form-control"
                  placeholder="Edit Content"
                  name="body"
                  defaultValue={body}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info">
                Edit Post
              </button>
            </form>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{body}</td>
          <td>
            <button type="button" onClick={handleEdit} className="btn btn-info">
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default Post;
