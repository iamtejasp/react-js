const UserListUser = ({ name, email, phone, username, address }) => {
  return (
    <>
      <li>{username}</li>
      <li>{name}</li>
      <li>{email}</li>
      <li>{phone}</li>
      <li>
        {address.street}, {address.city}
      </li>
      <br />
    </>
  );
};

export default UserListUser;
