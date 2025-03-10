import React from "react";

const DynamicForm = ({ schema, formData, setFormData }) => {

  const handleChange = (name, value) => {
    setFormData((prevData) => {
      const newData = { ...prevData };

   
      const keys = name.split(".");
      let temp = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!temp[keys[i]] || typeof temp[keys[i]] !== "object") {
          temp[keys[i]] = {}; 
        }
        temp = temp[keys[i]];
      }

      temp[keys[keys.length - 1]] = value; 

      return newData;
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{schema.title || "Dynamic Form"}</h2>
      {schema.fields.map((field, index) => (
        <div key={index} className="form-group">
          {field.type === "section" ? (
            <div className="form-section">
              <h3 className="section-title">{field.label}</h3>
              {field.fields.map((subField, subIndex) => (
                <div key={subIndex} className="form-group">
                  <label className="form-label">{subField.label}</label>
                  <input
                    type={subField.type}
                    className="form-input"
                    name={`${field.name}.${subField.name}`} 
                    value={formData[field.name]?.[subField.name] || ""}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    required={subField.required}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                className="form-input"
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                required={field.required}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
