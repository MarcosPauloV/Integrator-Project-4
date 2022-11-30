import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Promoter from "./Pages/beaPromoter";
import SignUP from "./Pages/signUP";
import Sellers from "./Pages/sellers";
import SignIN from "./Pages/signIN";
import ResetEmail from "./Pages/resetEmail";
import Main from "./Components/Main";
import NewEvent from "./Pages/newEvent";
import NewTicket from "./Pages/newTicket";
import {EventDetails } from "./Pages/eventDetails";
import Profile from "./Pages/profile";
export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />}></Route>
          <Route path="events" element={<Events />}></Route>
          <Route path="beaPromoter" element={<Promoter />}></Route>
          <Route path="signUP"  element={<SignUP />}></Route>
          <Route path="sellers" element={<Sellers />}></Route>
          <Route path="signIN" element={<SignIN />}></Route>
          <Route path="resetEmail" element={<ResetEmail />}></Route>
          <Route path="newEvent" element={<NewEvent/>}></Route>
          <Route path="newTicket" element={<NewTicket/>}></Route>
          <Route path="eventDetails/:id" element={<EventDetails/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    
  );
}
