// import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ToDoDetail() {
  const params = useParams();
  console.log(params);
  const allToDoData = JSON.parse(localStorage.getItem("data"));
  const currentTask = allToDoData.filter((item) => {
    console.log(item);
  });
  // useEffect(()=>{
  //   console.log(currentTask);
  //   console.log(allToDoData);

  // },[]);
  console.log(currentTask);
  return (
    <>
      ToDoDetail {params.id}
      {allToDoData.map((item) => {
        <div>{item.title}</div>;
      })}
    </>
  );
}