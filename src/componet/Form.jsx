import { useState } from "react";

const Form = ({ getFormData, formData, editId }) => {
  const [value, setValue] = useState(formData.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData({ title: value });
    setValue("");
  };

  // Update local input when editing starts
  useState(() => {
    setValue(formData.title);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <input
        type="text"
        placeholder="Enter a task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">
        {editId ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;   // ✅ IMPORTANT
