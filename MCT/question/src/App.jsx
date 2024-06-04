// import './App.css'
// import Accordion from './components/Accordion'
// import Tab from './components/Tab'
import NestedComments from './components/NestedComments'

const data = [
  {
    id: 1,
    comment: "comment 1",
    replies: [
      {
        id: 11,
        comment: "comment 1 reply 1",
        replies: []
      },
      {
        id: 12,
        comment: "comment 1 reply 2",
        replies: [
          {
            id: 121,
            comment: "comment 1 reply 2 reply 1",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    comment: "comment 2",
    replies: []
  }
]

function App() {
  
  return (
    <>
      {/* <Accordion /> */}
      {/* <Tab /> */}
      <NestedComments data={data} />
    </>
  )
}

export default App
