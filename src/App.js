import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateAppointment from './components/CreateAppointment';
import AppointmentList from './components/AppointmentList';
import CreatePatient from './components/CreatePatient';
import PatientList from './components/PatientList';
import EditPatient from "./components/EditPatient";
import CreateDoctor from "./components/CreateDoctor";
import DoctorList from "./components/DoctorList";
import CreatePatientAdmin from './components/CreatePatientAdmin';
import PatientAdminList from './components/PatientAdminList';
import EditPatientAdmin from "./components/EditPatientAdmin";
import CreateDoctorAdmin from "./components/CreateDoctorAdmin";
import DoctorAdminList from "./components/DoctorAdminList";
import EditDoctorAdmin from "./components/EditDoctorAdmin";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />

          <Route path="/create-appointment" element={<CreateAppointment />} />
          <Route path="/appointment-list" element={<AppointmentList />} />

          <Route path="/create-patient" element={<CreatePatient />} />
          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />
          <Route path="/create-doctor" element={<CreateDoctor />} />
          <Route path="/doctor-list" element={<DoctorList />} />

          <Route path="/create-patientadmin" element={<CreatePatientAdmin />} />
          <Route path="/patientadmin-list" element={<PatientAdminList />} />
          <Route path="/edit-patientadmin/:id" element={<EditPatientAdmin />} />
          <Route path="/create-doctoradmin" element={<CreateDoctorAdmin />} />
          <Route path="/doctoradmin-list" element={<DoctorAdminList />} />
          <Route path="/edit-doctoradmin/:id" element={<EditDoctorAdmin />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
