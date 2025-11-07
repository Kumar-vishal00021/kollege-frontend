import { useState, useEffect } from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import FeeModal from "../components/FeeModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const University2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [universityData, setUniversityData] = useState({ details: {} });
  const [facilities, setFacilities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [uniRes, facilitiesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/university2`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/facilities`),
        ]);
        setUniversityData(uniRes.data);
        setFacilities(facilitiesRes.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header universityName={universityData.name || "University Two"} />
      <section className="container mx-auto py-10 px-4">
        {/* Hero Section */}
        <div id="hero" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-700">
            Welcome to {universityData.name || "University Two"}
          </h1>
          <p className="text-lg mb-6">
            {universityData.details?.tagline || "Shaping future leaders in business and technology."}
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Apply Now
          </button>
          <img
            src="/assets/university2-hero.jpg"
            alt="University Two Campus"
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-md"
          />
        </div>

        {/* Overview Section */}
        <section id="overview" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Overview</h2>
          <p>{universityData.details?.overview || "Loading overview..."}</p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(universityData.details?.courses || []).map((course, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{course.name}</h3>
                <p>Duration: {course.duration}</p>
                <p>Eligibility: {course.eligibility}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Fees</h2>
          <p>Explore our competitive fee structure.</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded mt-4 hover:bg-purple-700"
          >
            Check Course-wise Fees
          </button>
        </section>

        {/* Placements Section */}
        <section id="placements" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Placements</h2>
          <p>
            {universityData.details?.placements?.placementRate || "92%"} placement rate with an
            average package of ₹
            {universityData.details?.placements?.averagePackage?.toLocaleString() || "9,00,000"}.
          </p>
          <p>
            <strong>Top Companies:</strong>{" "}
            {(universityData.details?.placements?.topCompanies || []).join(", ") ||
              "Microsoft, Deloitte"}
          </p>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Facilities</h2>
          <ul className="list-disc pl-5">
            {Object.entries(facilities).map(([key, value], index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </section>

        {/* CTAs */}
        <div id="apply" className="text-center space-x-4 my-10">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Check Course-wise Fees
          </button>
          <a
            href="/brochure-university2.pdf"
            className="bg-gray-600 text-white px-6 py-2 rounded inline-block hover:bg-gray-700"
          >
            Download Brochure
          </a>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Apply Now
          </button>
        </div>

        {/* Lead Form */}
        <section id="apply-form" className="my-10">
          <LeadForm />
        </section>
      </section>
      <FeeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default University2;