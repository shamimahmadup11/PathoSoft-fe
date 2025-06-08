// CBCForm.jsx
import React, { useState } from "react";

const BMPForm = () => {
  const [formData, setFormData] = useState({
    hemoglobin: "",
    wbc: "",
    platelet: "",
  });

  const handleChange = (e) => {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("CBC Report submitted!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Complete Blood Count (CBC)</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Hemoglobin (g/dL):
          <input
            type="number"
            name="hemoglobin"
            value={formData.hemoglobin}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          White Blood Cell Count (10^3/uL):
          <input
            type="number"
            name="wbc"
            value={formData.wbc}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-4">
          Platelet Count (10^3/uL):
          <input
            type="number"
            name="platelet"
            value={formData.platelet}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BMPForm;
