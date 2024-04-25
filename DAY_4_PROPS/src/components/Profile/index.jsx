import Card from "../Quote/Card";

function Profile({ name = "SJ", age, isAdult }) {
  return (
    <div id="profile-container">
      <h2>Profile</h2>
      <p>{name}</p>
      <p>{age}</p>
      <p>Is user adult  = { isAdult ? "yes": "no" }</p>
      <Card quote={"hi from profile"} author="geekster" />
    </div>
  )
}

export default Profile