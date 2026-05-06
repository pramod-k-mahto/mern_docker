import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const getData = async () => {
    try {
      let res = await fetch(`${apiUrl}/api/user/get`);
      let data = await res.json();

      console.log(data.data);

      // ✅ FIXED
      setUsers(data.data);
    } catch (error) {
      console.log("GET error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/api/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
        }),
      });

      const data = await res.json();
      console.log(data);

      // reset form
      setName("");
      setAge("");

      // refresh list
      getData();
    } catch (error) {
      console.log("POST error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>This is Home page</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Create User
        </button>
      </form>

      {/* USER LIST */}
      <div style={{ marginTop: "30px" }}>
        <h3>User List</h3>

        {users?.length === 0 ? (
          <p>No users found</p>
        ) : (
          users?.map((user, index) => (
            <div
              key={user._id || index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              <p><b>Name:</b> {user?.name}</p>
              <p><b>Age:</b> {user?.age}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;