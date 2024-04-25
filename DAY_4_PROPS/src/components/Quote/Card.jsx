function Card(props) {
  return (
    <div>
      <p>"{props.quote}"</p>
      <span>{props.author}</span>
    </div>
  )
}

export default Card