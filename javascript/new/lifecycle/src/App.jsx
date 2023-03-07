import { useEffect, useState } from "react";

function App() {
  // Ví dụ sử dụng useEffect để đồng bộ trạng thái ứng dụng React với Server
  // Trạng thái của React => Client State (useState)
  // Dữ liệu lưu ở Server => Server State (jsonplaceholder)
  const [users, setUsers] = useState([]);
  const [newUserInfor, setNewUserInfor] = useState({});
  const handleInputChange = (e) => {
    setNewUserInfor((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) =>{
    e.prevenDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {method:"POST"}, headers:{"Content-Type": "appLication/jison"}, body:JSON.stringify{newUserInfor0,})
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rows = users.map((users) => (
    <tr key={users.id}>
      <th>{users.id}</th>
      <th>{users.name}</th>
      <th>{users.username}</th>
      <th>{users.email}</th>
      <th>{users.address.street}</th>
      <th>{users.website}</th>
      <th>{users.company.name}</th>
    </tr>
  ));
  return (
    <div className="App">
      <form action="">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInputChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="website">Website</label>
          <input
            type="link"
            id="website"
            name="website"
            onChange={handleInputChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
          />
        </div>
      </form>
      <table>
        <caption>User Table</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;
