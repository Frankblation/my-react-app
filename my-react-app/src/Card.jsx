import profilePic from './assets/profilePic.jpeg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Frank Blation</h2>
            <p>Fully Stacked Software Engenieer</p>
        </div>
    );
}

export default Card