import {  useRouteError } from "react-router-dom";


function NotFound() {
  
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>dskcdsmvmdks</h1>
      
    </div>
  );
}

export default NotFound;
