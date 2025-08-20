// import Card from "./card";
import Welcome from "./Welcome";
import User from "./User";
import Conditionalrendering from "./Coditional";
import Message from "./Message";
import Counter from "./Count";

function App() {
  const user = [
    { name: "hamza", age: 25, gender: "male", available: true },
    { name: "khizer", age: 10, gender: "male", available: false },
    { name: "ali", age: 12, gender: "male", available: false },
    { name: "sara", age: 24, gender: "female", available: true },
    { name: "noor", age: 26, gender: "female", available: false },
  ];
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

// const students = [
//   { name: "hamza", id: 1, rollno: 11 },
//   { name: "salman", id: 2, rollno: 12 },
//   { name: "khan", id: 3, rollno: 13 },
// ];

// <div>
//     <h1>Welcome to my website</h1>

//     <div style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
//       {students?.map((student) => (
//         <Card key={student.id}>
//           <div style={{ width: "206px", height: "308px" }}>
//             <h3>{student.name}</h3>
//             <h5>ID: {student.id}</h5>
//             <h5>Roll No: {student.rollno}</h5>
//           </div>
//         </Card>
//       ))}
//     </div>
//   </div>
