import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import University1 from './pages/University1.jsx';
import University2 from './pages/University2.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<University1 />} />  {/* Default to University 1 */}
        <Route path="/university1" element={<University1 />} />
        <Route path="/university2" element={<University2 />} />
      </Routes>
    </Router>
  );
}

export default App;