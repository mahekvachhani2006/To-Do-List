import { ApexChart } from "./ApexChart"

export const Dashboard =()=>{
    const data=[2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2];
    const category=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return(
        <>
          <h1>Welcome to Dashboard!!</h1>
          <ApexChart data={data} category={category}/>
        </>
    )
}