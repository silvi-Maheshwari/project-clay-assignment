import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
import { formSchema } from "./data/formSchema";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: {
      degree: "",
      institution: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <DynamicForm schema={formSchema} formData={formData} setFormData={setFormData} />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default App;
