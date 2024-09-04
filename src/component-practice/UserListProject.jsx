import { useEffect, useState } from "react";
import UserListUser from "../utils-components/UserListUser";

const UserListProject = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => setUser(res))
      .finally(setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {user != null &&
            user.map((user) => {
              return <UserListUser key={user?.id} {...user} />;
            })}
        </ul>
      )}
    </>
  );
};

export default UserListProject;
