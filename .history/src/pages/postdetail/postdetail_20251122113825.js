function postdetail() {

    const { id } = useparams();
    
  return (
    <>
    <h1>Post nr; (id)</h1>
    { id ? <h1>post nr:</h1> : null }
    </>
  );
}

export default postdetail;