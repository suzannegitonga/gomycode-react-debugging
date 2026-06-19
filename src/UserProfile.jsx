function UserProfile(props) {
  return (
    <div className="profile">
      {/* Notice what prop names we are trying to read here */}
      <h2>Hello, {props.userName}!</h2>
      <p>Role: {props.userTitle}</p>
    </div>
  )
}

export default UserProfile