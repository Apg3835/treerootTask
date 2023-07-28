import React, { useState } from "react";
import "./Form.css";

const Form = ({}) => {
  const [formData, setFormData] = useState({});
  const formConfig = [
    {
      name: "User Name",
      type: "text",
      required: true,
    },
    {
      name: "Email",
      type: "email",
      required: true,
    },
    {
      name: "Subscribe",
      type: "checkbox",
      required: true,
    },
    {
      name: "Gender",
      type: "radio",
      required: true,
      options: ["Male", "Female", "Other"],
    },
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {formConfig.map((field) => {
          const { name, type, required, options } = field;

          switch (type) {
            case "text":
              return (
                <div key={name} className="userName">
                  <label>{name}:</label>
                  <input
                    type="text"
                    name={name}
                    required={required}
                    onChange={handleChange}
                  />
                </div>
              );
            case "email":
              return (
                <div key={name} className="email">
                  <label>{name}:</label>
                  <input
                    type="email"
                    name={name}
                    required={required}
                    onChange={handleChange}
                  />
                </div>
              );
            case "checkbox":
              return (
                <div key={name} className="checkbox">
                  <input type="checkbox" name={name} onChange={handleChange} />
                  <label>{name}</label>
                </div>
              );
            case "radio":
              return (
                <div className="radio">
                  <div key={name} className="radio_name">
                    <span>{name}</span>
                    <div className="radio_circle">
                      {options.map((option) => (
                        <div key={option} className="radio_type">
                          <input
                            type="radio"
                            name={name}
                            value={option}
                            required={required}
                            onChange={handleChange}
                          />
                          <label>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
        <div className="button_f">
          <button type="submit" className="button_name">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
