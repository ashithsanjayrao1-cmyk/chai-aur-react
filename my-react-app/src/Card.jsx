import profilePic from './assets/PHOTO097.jpg'

function Card(){
    return(
        <div className = "card">
            <img clasName= "card image"src = {profilePic} alt ="profile picture"></img>
            <h2>Ashith</h2>
            <p>React JS Components</p>

        </div>
    );


}

export default Card