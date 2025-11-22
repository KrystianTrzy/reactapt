function postdetail() {
  const { id } = useparams();

  return (
    <>
      <h1>Post nr; (id)</h1>
      {id ? <h1>post nr:</h1> : <h1>brak postu</h1>}
    </>
  );
}

export default postdetail;
