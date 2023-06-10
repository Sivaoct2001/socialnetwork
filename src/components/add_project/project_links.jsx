import React from "react";
import "./project_links.css";
import closebutton from "../../assets/images/xbutton.jpeg";
const Project = () => {
  return (
    <div className="main_project">
      <form action="">
        <div className="project">
          <h2>Add Project</h2>
          <input type="text" placeholder="Project title" />
          <textarea
            placeholder="project Description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="main_preview">
          <div className="add_previews">
            <h2>Preview</h2>

            <input type="file" required />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Project;
