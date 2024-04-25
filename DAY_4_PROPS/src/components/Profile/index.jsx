function Profile(props) {
  console.log(props);
  return (
    <div id="profile-container">
      <h2>Profile</h2>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>Is user adult  = { props.isAdult ? "yes": "no" }</p>
    </div>
  )
}

export default Profile