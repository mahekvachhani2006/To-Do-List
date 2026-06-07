import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Box from "./Box";
import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const getLocalTasks = () => {
  let tasks = localStorage.getItem("data");
  return tasks ? JSON.parse(tasks) : [];
};

export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  const [allData, setAllData] = useState(getLocalTasks);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: "" });

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const getFormData = (noteData) => {
    setLoading(true);

    setTimeout(() => {
      if (editId !== null) {
        const updated = allData.map((item) =>
          item.id === editId ? { ...item, title: noteData.title } : item
        );
        setAllData(updated);
        setEditId(null);
      } else {
        const newItem = {
          id: Math.random().toString(),
          title: noteData.title,
        };
        setAllData((prev) => [...prev, newItem]);
      }

      setFormData({ title: "" });
      setLoading(false);
    }, 800); // loader duration
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allData));
  }, [allData]);

  const deleteHandler = (id) => {
    setLoading(true);
    setTimeout(() => {
      const filter = allData.filter((task) => task.id !== id);
      setAllData(filter);
      setLoading(false);
    }, 600);
  };

  const editHandler = (id) => {
    const found = allData.find((task) => task.id === id);
    if (found) {
      setEditId(id);
      setFormData({ title: found.title });
    }
  };

  return (
    <div className={`${!isDarkMode ? "toDo-dark" : "toDo-light"}`}>
      <div className={`${!isDarkMode ? "homeToDo-dark" : "homeToDo-light"}`}>
        <div className="page-title">My Todos</div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <FadeLoader
          color={color}
          loading={loading}
          cssOverride={override}
          height={15}
          width={5}
          radius={2}
          margin={2}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

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
    </div>
  );
};
