function Conditionalrendering({isLoggedIn}) {


  return (
    <div>
      {isLoggedIn ? "done" : "not done"}
    </div>
  );
}


export default Conditionalrendering;

