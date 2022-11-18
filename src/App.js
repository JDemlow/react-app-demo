import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    },
    {
      id: 3,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg",
    },
    {
      id: 4,
      name: "Corey",
      role: "The DevOps Guy",
      img: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg",
    },
    {
      id: 5,
      name: "Jake",
      role: "Senior",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 6,
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
