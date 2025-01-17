import './index.css'; // Adjust the path to your CSS file if needed
import Timeline from "./Pages/Timeline"
import Main from "./Pages/Main"
import CardSection from "./Pages/CardSection"

export default function App() {
  return (
    <div className='pb-16 pr-16 pl-16 bg-slate-200'>
      <Main/>
      <Timeline/>
      <CardSection/>
    </div>
  )
}