import "./card.css"
type cardProp = {
    name:string
    img:string
    description:string
    button:string
    person: "Teacher" | "Friend" | "Student";
}
export default function Card(prop:cardProp) {
    let backgroundColor;
    if (prop.person == "Teacher"){
        backgroundColor = "blue"
    }
    if (prop.person == "Friend"){
        backgroundColor = "green"
    }
    if (prop.person == "Student"){
        backgroundColor = "purple"
    }
    return (
        <div className='card'>
            <img className="img" src={prop.img} alt="" />
            <p className='name'>{prop.name}</p>
            <p className='description'>{prop.description}</p> 
            <button style={{ backgroundColor, color: "white" }} className='button'>{prop.button}</button>
        </div>
    )
}
