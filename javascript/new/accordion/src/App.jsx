import Accordion from './components/accordion/Accordion'
import './App.css'


export default function App() {
  const items = [
    {
      title: "Item 1",
      content: "Content 1"
    },
    {
      title: "Item 2",
      content: "Content 2"
    }
  ];
  
  return (
    <main>
      <Accordion items={items} />
    </main>
  )
}
