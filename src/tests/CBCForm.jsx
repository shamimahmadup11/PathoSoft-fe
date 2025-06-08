import React, { useState } from "react";

const CBCForm = () => {
  const [formData, setFormData] = useState({
    hemoglobin: "",
    rbc: "",
    pcv: "",
    mcv: "",
    mch: "",
    mchc: "",
    rdw: "",
    wbc: "",
    neutrophils: "",
    lymphocytes: "",
    eosinophils: "",
    monocytes: "",
    basophils: "",
    platelets: "",
  });

  const [showReport, setShowReport] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReport(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showReport ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Complete Blood Count (CBC) Form
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Hemoglobin */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hemoglobin (g/dL)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="hemoglobin"
                  value={formData.hemoglobin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* RBC */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RBC Count (mill/comm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="rbc"
                  value={formData.rbc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Blood Indices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: "PCV (%)", name: "pcv", step: "1" },
                  { label: "MCV (fL)", name: "mcv", step: "0.1" },
                  { label: "MCH (pg)", name: "mch", step: "0.1" },
                  { label: "MCHC (g/dL)", name: "mchc", step: "0.1" },
                  { label: "RDW (%)", name: "rdw", step: "0.1" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      step={field.step}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                ))}
              </div>

              {/* WBC */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WBC Count (/comm)
                </label>
                <input
                  type="number"
                  name="wbc"
                  value={formData.wbc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              {/* Differential WBC */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Neutrophils (%)", name: "neutrophils" },
                  { label: "Lymphocytes (%)", name: "lymphocytes" },
                  { label: "Eosinophils (%)", name: "eosinophils" },
                  { label: "Monocytes (%)", name: "monocytes" },
                  { label: "Basophils (%)", name: "basophils" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Platelets */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Platelet Count (/comm)
                </label>
                <input
                  type="number"
                  name="platelets"
                  value={formData.platelets}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Generate Report
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6">CBC Report</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-2 border">Test</th>
                  <th className="p-2 border">Results</th>
                  <th className="p-2 border">Bio Ref Range</th>
                  <th className="p-2 border">Units</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border">Hemoglobin</td>
                </tr>
                <tr>
                  <td className="p-2 border">Hemoglobin</td>
                  <td className="p-2 border">{formData.hemoglobin}</td>
                  <td className="p-2 border">13.0 - 17.0</td>
                  <td className="p-2 border">g/dL</td>
                </tr>

                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border">RBC</td>
                </tr>
                <tr>
                  <td className="p-2 border">Total RBC</td>
                  <td className="p-2 border">{formData.rbc}</td>
                  <td className="p-2 border">4.5 - 5.5</td>
                  <td className="p-2 border">mill/comm</td>
                </tr>

                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border">Blood Indices</td>
                </tr>
                {[
                  { label: "PCV", value: formData.pcv, ref: "40 - 50", unit: "%" },
                  { label: "MCV", value: formData.mcv, ref: "80 - 100", unit: "fL" },
                  { label: "MCH", value: formData.mch, ref: "27 - 32", unit: "pg" },
                  { label: "MCHC", value: formData.mchc, ref: "32 - 36", unit: "g/dL" },
                  { label: "RDW", value: formData.rdw, ref: "11.5 - 14.5", unit: "%" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.label}</td>
                    <td className="p-2 border">{item.value}</td>
                    <td className="p-2 border">{item.ref}</td>
                    <td className="p-2 border">{item.unit}</td>
                  </tr>
                ))}

                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border">WBC</td>
                </tr>
                <tr>
                  <td className="p-2 border">Total WBC</td>
                  <td className="p-2 border">{formData.wbc}</td>
                  <td className="p-2 border">4000 - 11000</td>
                  <td className="p-2 border">/comm</td>
                </tr>

                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border"> DLC (Differential  Leukocyte Count)</td>
                </tr>
                {[
                  { label: "Neutrophils", value: formData.neutrophils, ref: "40 - 70" },
                  { label: "Lymphocytes", value: formData.lymphocytes, ref: "20 - 40" },
                  { label: "Eosinophils", value: formData.eosinophils, ref: "1 - 6" },
                  { label: "Monocytes", value: formData.monocytes, ref: "2 - 10" },
                  { label: "Basophils", value: formData.basophils, ref: "0 - 1" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.label}</td>
                    <td className="p-2 border">{item.value}</td>
                    <td className="p-2 border">{item.ref}</td>
                    <td className="p-2 border">%</td>
                  </tr>
                ))}

                <tr className="bg-gray-50 font-bold">
                  <td colSpan="4" className="p-2 border">Platelets</td>
                </tr>
                <tr>
                  <td className="p-2 border">Platelet Count</td>
                  <td className="p-2 border">{formData.platelets}</td>
                  <td className="p-2 border">150000 - 450000</td>
                  <td className="p-2 border">/comm</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center mt-6">
              <button
                onClick={handlePrint}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Print Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CBCForm;
