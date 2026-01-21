// components/PersonalInfo.js

function PersonalInfo(){
    const name = "Alex Johnson";
    const role = "Frontend Developer";
    const location = "San Francissco, CA";
    const email = "alex@example.com";

    return(
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>
        </div>
    )
}

export default PersonalInfo;