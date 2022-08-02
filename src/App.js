import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import AddCoupon from './components/addCoupon';
import GetCoupon from './components/getCoupon';
import Controller from './components/controller';
import Dashboard from './components/publicDashboard';


function App() {
  return (
    <>
    
              <BrowserRouter>
              <Routes >
              <Route path="/" element={<Controller />}>
                <Route index element={<Dashboard />} />
                <Route path="add" element={<AddCoupon />} />
                <Route path="get" element={<GetCoupon />} />
              </Route>
              </Routes>
              </BrowserRouter>
    </>
  );
}

export default App;
