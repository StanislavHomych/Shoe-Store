import Main from "./Components/Main/Main";
import { Routes, Route } from "react-router-dom";
import NewArrivalsComponent from "./Components/NewArivals/NewArrivals"
import LogIn from "./Components/Account/LogIn";
import Registration from "./Components/Account/Registration";
import UserAccount from "./Components/Account/UserAccount";
import ItemPage from "./Components/ItemPage/ItemPage";
import MajorComponent from "./Components/Main/MajorComponent/MajorComponent";
import MaleFemaleItems from "./Components/MaleFemaleItems/MaleFemaleItems";
import MakePurchase from "./Components/MakePurchase/MakePurchase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<MajorComponent />}></Route>
          <Route path="logIn" element={<LogIn />}></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="userAccount" element={<UserAccount />}></Route>
          <Route path="/:itemId" element={<ItemPage />}></Route>
          <Route path="maleElements" element={<MaleFemaleItems gender="male" />}></Route>
          <Route path="femaleElements" element={<MaleFemaleItems gender="female" />}></Route>
          <Route path="makePurchase" element={<MakePurchase/>} ></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
