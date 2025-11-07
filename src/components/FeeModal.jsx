import Modal from "react-modal";
import { useEffect, useState } from "react";
import axios from "axios";

Modal.setAppElement("#root");

const FeeModal = ({ isOpen, onClose }) => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    axios.get("https://kollege-backend-pomq.onrender.com/api/fees").then((res) => setFees(res.data));
  }, []);
console.log(fees)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-bold mb-4">Course-wise Fees</h2>
      <ul className="mb-4">
        {fees.map((fee, index) => (
          <li key={index} className="mb-2">
            {fee.course}: ₹{fee.feeRange}
          </li>
        ))}
      </ul>
      <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded">
        Close
      </button>
    </Modal>
  );
};

export default FeeModal;