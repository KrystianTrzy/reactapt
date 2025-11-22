import { useEffect } from "react";

function postdetail() {
  const { id } = useparams();

  useEffect

  return (
    <>
      {id ? <h1>post nr:</h1> : <h1>brak postu</h1>}
    </>
  );
}

export default postdetail;
