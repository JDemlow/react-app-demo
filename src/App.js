import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg",
    },
    {
      name: "Corey",
      role: "The DevOps Guy",
      img: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg",
    },
    {
      name: "Jake",
      role: "Senior",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      name: "John",
      role: "Director of Engineering",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
