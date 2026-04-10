import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  projectTitle: "",
  projectType: "",
  location: "",
  description: "",
  estimatedBudget: "",
};

function BoQForm() {
  const [formData, setFormData] = useState(initialForm);
  const [drawingFile, setDrawingFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0] || null;
    setDrawingFile(file);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Temporary frontend-only simulation
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Submitted form:", formData);
      console.log("Uploaded drawing:", drawingFile);

      setMessage("BoQ request submitted successfully.");
      setFormData(initialForm);
      setDrawingFile(null);
      event.target.reset();
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="+254..."
          />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
          >
            <option value="">Select project type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Interior">Interior</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="projectTitle"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Project Title
          </label>
          <input
            id="projectTitle"
            name="projectTitle"
            type="text"
            value={formData.projectTitle}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="Example: 4-bedroom residential house"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Project Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="Karen, Nairobi"
          />
        </div>

        <div>
          <label
            htmlFor="estimatedBudget"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Estimated Budget
          </label>
          <input
            id="estimatedBudget"
            name="estimatedBudget"
            type="text"
            value={formData.estimatedBudget}
            onChange={handleChange}
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="Optional"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
            placeholder="Describe the project and the kind of BoQ support you need"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="drawingFile"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Upload Drawings
          </label>
          <input
            id="drawingFile"
            name="drawingFile"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.dwg"
            onChange={handleFileChange}
            className="block w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-700"
          />
          <p className="mt-2 text-sm text-neutral-500">
            Accepted: PDF, PNG, JPG, JPEG, DWG
          </p>
          {drawingFile && (
            <p className="mt-2 text-sm text-neutral-700">
              Selected file: {drawingFile.name}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>

        {message && (
          <p className="text-sm text-neutral-700">{message}</p>
        )}
      </div>
    </form>
  );
}

export default BoQForm;