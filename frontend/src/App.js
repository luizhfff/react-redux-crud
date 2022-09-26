import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import DisplayCompanies from './pages/company/DisplayCompanies';
import DisplayCompany from './pages/company/DisplayCompany';
import CreateCompany from './pages/company/CreateCompany';
import DisplayPeople from './pages/company/DisplayPeople';
import DisplayPerson from './pages/people/DisplayPerson';
import CreatePerson from './pages/people/CreatePerson';
import Home from './pages/Home';
import UpdateCompany from './pages/company/UpdateCompany';
import UpdatePerson from './pages/people/UpdatePerson';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies/:companyId' element={<DisplayCompany />} />
        <Route path='/companies/:companyId/edit' element={<UpdateCompany />} />
        <Route path='/companies/:companyId/people' element={<DisplayPeople />} />
        <Route path='/companies/create' element={<CreateCompany />} />
        <Route path='/companies' element={<DisplayCompanies />} />
        <Route path='/people/:personId' element={<DisplayPerson />} />
        <Route path='/people/:personId/edit' element={<UpdatePerson />} />
        <Route path='/people/create' element={<CreatePerson />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
