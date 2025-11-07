import { useState, useEffect } from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import FeeModal from "../components/FeeModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const University1 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [universityData, setUniversityData] = useState({});
  const [facilities, setFacilities] = useState({});
  const [placements, setPlacements] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [uniRes, facilitiesRes, placementsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/university1`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/facilities`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/placements`),
        ]);
        setUniversityData(uniRes.data);
        setFacilities(facilitiesRes.data);
        setPlacements(placementsRes.data);
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
    <div className="min-h-screen bg-gray-100">
      <Header universityName={universityData.name || "University One"} />
      <section className="container mx-auto py-10 px-4">
        {/* Hero Section */}
        <div id="hero" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Welcome to {universityData.name || "University One"}
          </h1>
          <p className="text-lg mb-6">
            {universityData.tagline || "Premier education for a bright future."}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
          <img
            src="/assets/university1-hero.jpg"
            alt="University One Campus"
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-md"
          />
        </div>

        {/* Overview Section */}
        <section id="overview" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Overview</h2>
          <p>{universityData.overview || "Loading overview..."}</p>
          <p className="mt-2">
            <strong>Location:</strong> {universityData.location || "Mumbai, India"} |{" "}
            <strong>Established:</strong> {universityData.established || 1995}
          </p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(universityData.courses || ["B.Tech in Computer Science", "MBA in Finance"]).map(
              (course, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <h3 className="font-semibold">{course}</h3>
                </div>
              )
            )}
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Fees</h2>
          <p>Explore our competitive fee structure.</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700"
          >
            Check Course-wise Fees
          </button>
        </section>

        {/* Placements Section */}
        <section id="placements" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Placements</h2>
          <p>
            {placements.stats?.placementRate || "95%"} placement rate with an average package of ₹
            {placements.stats?.averagePackage?.toLocaleString() || "8,00,000"}.
          </p>
          <p>
            <strong>Top Companies:</strong>{" "}
            {(placements.companies || []).map((c) => c.name).join(", ") || "Google, Amazon"}
          </p>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Facilities</h2>
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
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Check Course-wise Fees
          </button>
          <a
            href="/brochure-university1.pdf"
            className="bg-gray-600 text-white px-6 py-2 rounded inline-block hover:bg-gray-700"
          >
            Download Brochure
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
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

export default University1;