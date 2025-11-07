import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const LeadForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("https://your-pipedream-endpoint.m.pipedream.net", data);
      setMessage("Form submitted successfully!");
      reset();
    } catch (error) {
      setMessage("Error submitting form. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
      <div className="mb-4">
        <input
          {...register("fullName", { required: "Full Name is required" })}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
      </div>
      <div className="mb-4">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
          })}
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
        />
        {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
      </div>
      <div className="mb-4">
        <select {...register("state", { required: "State is required" })} className="w-full p-2 border rounded">
          <option value="">Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
        </select>
        {errors.state && <p className="text-red-600">{errors.state.message}</p>}
      </div>
      <div className="mb-4">
        <select
          {...register("course", { required: "Course is required" })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
        </select>
        {errors.course && <p className="text-red-600">{errors.course.message}</p>}
      </div>
      <div className="mb-4">
        <select
          {...register("intakeYear", { required: "Intake Year is required" })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Intake Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        {errors.intakeYear && <p className="text-red-600">{errors.intakeYear.message}</p>}
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register("consent", { required: "You must agree to proceed" })}
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
        {errors.consent && <p className="text-red-600">{errors.consent.message}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full">
        Submit
      </button>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </form>
  );
};

export default LeadForm;