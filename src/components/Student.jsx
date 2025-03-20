import React from "react";

const Student = ({ name, age, isStudent }) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
    </div>
  );
};

export default Student;
