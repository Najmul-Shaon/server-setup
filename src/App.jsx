import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.proventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.name.value;
  };
  return (
    <>
      <h3>User management : {users.length}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="email" />
        <br />
        <input type="submit" />
      </form>
      <div>
        {users.map((user) => (
          <p>{user.name} & { user.email}</p>
        ))}
      </div>
    </>
  );
}

export default App;
