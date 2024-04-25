import Card from "../Quote/Card";
import { Bs6SquareFill } from "react-icons/bs";
import { CiAirportSign1 } from "react-icons/ci";

function Profile({ name = "SJ", age, isAdult }) {
  return (
    <div id="profile-container">
      <Bs6SquareFill /> 
      <CiAirportSign1 />
      <h2>Profile</h2>
      <p>{name}</p>
      <p>{age}</p>
      <p>Is user adult = {isAdult ? "yes" : "no"}</p>
      <Card quote={"hi from profile"} author="geekster" />
    </div>
  );
}

export default Profile;
