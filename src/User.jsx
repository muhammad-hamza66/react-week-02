function User({ name, age, gender }) {
  return age > 20 ? (
    <li>
      {name} {age} {gender} {available ? "Available" : "Not Available"}
    </li>
  ) : null;
}

export default User;
