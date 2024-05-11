import { Link } from "react-router-dom"
import Header from "../components/Header"

function Home() {
  return (
    <div>

    <Link to="/about">Go to about using Link</Link>

<hr />

    <a href="/about">Go to About</a>

    </div>
  )
}

export default Home