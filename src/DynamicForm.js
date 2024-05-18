
import React, { useState } from 'react';

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <h2>Dynamic Output</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
};

export default DynamicForm;
