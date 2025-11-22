import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

function postdetail() {
  const { id } = useparams();

  useEffect(() => {
    console.log(typeoff )
  }, []);

  return (
    <>
      {id ? <h1>post nr:</h1> : <h1>brak postu</h1>}
    </>
  );
}

export default postdetail;
