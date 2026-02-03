import React from 'react';

function PersonalInfo({ email, phone }) {
  return (
    <div className="personal-info">
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default PersonalInfo;