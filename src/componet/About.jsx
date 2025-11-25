import { useContext } from "react";
import ModeContext from "../context/Mode_context";

export const About = () => {
  const { isDarkMode } = useContext(ModeContext);

  return (
    <div className={`${!isDarkMode ? "toDo-dark" : "toDo-light"}`}>
      <h1 className="page-title">About ToDo</h1>
      <div className="page-title-line "></div>
      <div className={`${!isDarkMode ? "aboutToDo-dark" : "aboutToDo-light"}`}>
        <p>
          A to-do list is a list of items that <span style={{color:"red"}}>need to be completed</span>. The items
          on the list can range from simple activities like replying to an
          email, to more complex tasks like creating project briefs.
        </p>
        <p>
          The items on a to-do list are usually <span style={{color:"red"}}>action-oriented</span>, such as
          “Schedule a meet with the R&D team” or “Call back customer X.” Some
          lists include more abstract goals, such as “improve your time
          management skills” or “learn how to use a new software program.”
        </p>
      </div>
    </div>
  );
};
