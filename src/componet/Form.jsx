import React, { useContext, useEffect, useState } from "react";
import ModeContext from "../context/Mode_context";

export const Form = ({ getFormData, formData, editId }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length === 0) return;

    // send only correct structure → { title: "something" }
    getFormData({ title });

    setTitle("");
  };

  useEffect(() => {
    if (editId !== null && formData?.title) {
      setTitle(formData.title);
    }
  }, [editId, formData]);

  const { isDarkMode } = useContext(ModeContext);

  return (
    <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
