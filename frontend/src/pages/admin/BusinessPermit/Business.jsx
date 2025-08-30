import { useState } from 'react';

export default function BusinessPermit() {
  const [formData, setFormData] = useState({
    businessName: '',
    isNanoEnterprise: 'No',
    streetAddress: '',
    barangay: '',
    city: '',
    ownerName: '',
    ownerAddress: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/business-permit/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        alert('Application submitted successfully!');
        // Reset form
        setFormData({
          businessName: '',
          isNanoEnterprise: 'No',
          streetAddress: '',
          barangay: '',
          city: '',
          ownerName: '',
          ownerAddress: ''
        });
      } else {
        alert('Error submitting application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting application');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Business Permit Application</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Is Nano Enterprise?</label>
          <select
            name="isNanoEnterprise"
            value={formData.isNanoEnterprise}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Barangay</label>
          <input
            type="text"
            name="barangay"
            value={formData.barangay}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Owner Address</label>
          <input
            type="text"
            name="ownerAddress"
            value={formData.ownerAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}