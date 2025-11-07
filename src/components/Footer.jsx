const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: info@university.edu</p>
            <p>Phone: +91-123-456-7890</p>
            <p>Address: Mumbai, India</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#overview" className="hover:text-blue-300">Overview</a></li>
              <li><a href="/brochure.pdf" className="hover:text-blue-300">Brochure</a></li>
              <li><a href="#apply" className="hover:text-blue-300">Apply Now</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/university" className="text-2xl hover:text-blue-300">🐦</a>
              <a href="https://linkedin.com/company/university" className="text-2xl hover:text-blue-300">💼</a>
              <a href="https://instagram.com/university" className="text-2xl hover:text-blue-300">📷</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4">
          <p>&copy; 2025 {new Date().getFullYear()} University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;