import logo from './logo.svg';
import './App.css';
import StudentsContainer from "./components/students/StudentsContainer";
import CoachesContainer from "./components/coaches/CoachesContainer";
import Coach from "./components/coaches/Coach";
import Student from "./components/students/Student";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AppointmentForm from './components/appointments/AppointmentForm';
import BookAppointment from "./components/appointments/BookAppointment"

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<Outlet />}>
            <Route index element={<StudentsContainer />} />
            <Route path=":id" element={<Outlet />}>
              <Route index element={<Student />} />
              <Route path="appointments/new" element={<BookAppointment />} />
            </Route>
          </Route>
          <Route path="coaches" element={<Outlet />}>
            <Route index element={<CoachesContainer />} />
            <Route path=":id" element={<Outlet />}>
              <Route index element={<Coach />} />
              <Route path="appointments/new" element={<AppointmentForm />} />
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coaches">Coaches</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
