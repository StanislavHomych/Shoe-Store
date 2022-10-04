import Main from "./Components/Main/Main";
import { Routes, Route } from "react-router-dom";
import NewArrivalsComponent from "./Components/NewArivals/NewArrivals"
import LogIn from "./Components/Account/LogIn";
import Registration from "./Components/Account/Registration";
import Profile from "./Components/Profile/Profile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<NewArrivalsComponent />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<LogIn />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
