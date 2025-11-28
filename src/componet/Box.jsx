import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Box({ editHandler, taskList, deleteHandler }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="main" style={{paddingBottom:"10%"}}>
        {taskList.length === 0 ? (
          <h2>No Tasks Added</h2>
        ) : (
          taskList.map((task) => (
            <div className="box" key={task.id}>
              <h1>{task.title}</h1>

              <div className="icons">
                <div className="icon">
                  <MdOutlineDoneOutline size={30} style={{ backgroundColor: "yellow" }} />
                </div>

                <div className="icon">
                  <CiEdit
                    size={30}
                    onClick={() => editHandler(task.id)}
                    style={{ backgroundColor: "blue" }}
                  />
                </div>

                <div className="icon">
                  <MdDelete
                    size={30}
                    onClick={() => deleteHandler(task.id)}
                    style={{ backgroundColor: "red" }}
                  />
                </div>

                <div className="icon">
                  <FaArrowRight
                    size={30}
                    onClick={() => navigate(`/tododetail/${task.id}`)}
                    style={{ backgroundColor: "black" }}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Box;