import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "Pawan", age: 25 });

  function increase() {
    setProfile((data) => ({ ...data, age: data.age + 1 }));
  }
  return (
    <div>
      <h1>Profile Details...</h1>
      <h2>{profile.name}</h2>
      <h2>{profile.age}</h2>

      <button onClick={increase}>Increase Age</button>
    </div>
  );
};

export default Profile;
