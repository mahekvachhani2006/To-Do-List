import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext, useEffect, useState } from "react";
import { Form } from "./Form";
import Box from "./Box";

const getLocalTasks = () => {
  let tasks = localStorage.getItem("data");
  return tasks ? JSON.parse(tasks) : [];
};

export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  const [allData, setAllData] = useState(getLocalTasks);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: "" });

  const getFormData = (noteData) => {
    if (editId !== null) {
      // update
      const updated = allData.map((item) =>
        item.id === editId ? { ...item, title: noteData.title } : item
      );
      setAllData(updated);
      setEditId(null);
    } else {
      // add
      const newItem = {
        id: Math.random().toString(),
        title: noteData.title,
      };
      setAllData((prev) => [...prev, newItem]);
    }

    setFormData({ title: "" });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allData));
  }, [allData]);

  const deleteHandler = (id) => {
    const filter = allData.filter((task) => task.id !== id);
    setAllData(filter);
  };

  const editHandler = (id) => {
    const found = allData.find((task) => task.id === id);
    if (found) {
      setEditId(id);
      setFormData({ title: found.title });
    }
  };

  return (
    <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
      <Form
        getFormData={getFormData}
        formData={formData}
        editId={editId}
      />

      <Box
        taskList={allData}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};
