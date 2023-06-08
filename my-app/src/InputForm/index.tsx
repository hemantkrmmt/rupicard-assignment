import React, { useState } from "react";
import "./index.css";

export default function InputForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div className="phone-number-form">
      <input type="text" value={name} placeholder="Enter Phone Number" />
      <input
        className="submit-button"
        type="submit"
        name="Apply Now"
        value="Apply Now"
        onClick={handleSubmit}
      />
    </div>
  );
}
