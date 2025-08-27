import './App.css'
import Card from './profile/Card'
import Profile from './profile/Profile'
import Time from "./Time/Time"
import Footer from "./profile/footer"
import "./profile/card.css"



function App() {
  return (
    <div className='app'>
    <Time/>
    <Profile/>
    <div className='mainCard'>
    <Card
    img='./public/yehuda.jpeg'
    name = "yehuda"
    description = "A tall person with dark hair and thoughtful eyes, always seeming to ponder the world around them."
    button = "detels"
    person='Friend'
    />
    <Card
    img='./public/shmuelb.jpeg'
    name = "shmuel"
    description = "A lofty figure, black-haired, who gazes curiously at everything, as if searching for hidden stories."
    button = "detels"
    person='Student'

    />
    <Card
    img='./public/ariel.jpeg'
    name = "ariel"
    description = "A high-standing individual with jet-black hair and a pensive look, carrying an air of quiet wisdom wherever they go."
    button = "detels"
    person='Teacher'
    />
    </div>
    <Footer/>
    </div>
  )
}
export default App
