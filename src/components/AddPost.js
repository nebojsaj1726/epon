import React from "react";

const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="col-md-6 my-4">
      <div className="form-group">
        <label htmlFor="titleInput">Add Title</label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Add Title"
          name="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contentTxt">Add Content</label>
        <textarea
          id="contentTxt"
          rows="3"
          className="form-control"
          placeholder="Add Content"
          name="body"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-info">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
