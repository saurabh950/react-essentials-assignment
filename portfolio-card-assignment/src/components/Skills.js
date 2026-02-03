import React from 'react';

function Skills({ skills }) {
  return (
    <div className="skills">
      {skills.map(skill => (
        <span key={skill} className="skill-badge">{skill}</span>
      ))}
    </div>
  );
}

export default Skills;