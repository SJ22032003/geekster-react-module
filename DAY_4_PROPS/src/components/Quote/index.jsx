import Card from "./Card";

function Quote() {
  const quotes = [
    {
      q: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      author: "Adelle Davis",
    },
    {
      q: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Adelle Davis"
    },
    {
      q: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      author: "Adelle Davis",
    },
    {
      q: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Adelle Davis"
    },
    {
      q: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      author: "Adelle Davis",
    },
    {
      q: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Shobhit"
    },
  ];

  return (
    <div>
      <h1>Quote</h1>
      <section>
        {
          quotes.map(item => {
            return <Card quote={item.q} author={item.author}  />
          })
        }
      </section>
    </div>
  );
}

export default Quote;
