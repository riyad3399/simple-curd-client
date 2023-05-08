import { Link,  useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userUpdated = { name, email };
    console.log(userUpdated);

    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdated),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
              alert('user updated successful')
          }
      });
  };

  return (
    <div>
      <h3>{loadedUsers.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUsers?.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
      <br />
      <Link to="/users">
        <button>All Users</button>
      </Link>
    </div>
  );
};

export default Update;
