// coponents/Bio.js

function Bio(){
    const bioText = "Passionate frontend developer with 3+ years of experience creating beautiful, responsive web applications. I love turning complex problems into simple, elegant solutions.";
    const skills = ["React", "Javascript", "CSS", "Node.js", "Git"];

    return(
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default Bio;