import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail({}) {
  const { id } = useParams();

  useEffect(() => {
    console.log(typeof id);
  }, []);

  return <>{id ? <h1>post nr:</h1> : <h1>brak postu</h1>}</>;
}

export default PostDetail;
