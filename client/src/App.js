import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Med from "./components/Medadd/Med";
import MedRet from "./components/MedRet/MedRet";
import MedEdit from "./components/MedEdit/MedEdit";
import CusRet from "./components/CusRet/CusRet";
import PhmCreate from "./components/PhmCreate/PhmCreate";
import PhmRet from "./components/PhmRet/PhmRet";
import MapCont from "./components/MapCont/MapCont";
// import Leafletmap from "./components/Leafletmap/Leafletmap";

function App() {
	const user = localStorage.getItem("token");

	return (
		
		<Routes>

           
			 {user && 
			<Route path="/" exact element={<Main />} /> } 
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/med" exact element={<Med />} />
			<Route path="/medret" exact element={<MedRet/>} />
			<Route path="/phmret" exact element={<PhmRet />} />
			<Route path="/phmcreate" exact element={<PhmCreate />} />
			<Route path="/mededit/:id"exact element={<MedEdit/>} />
			<Route path="/cusret" exact element={<CusRet />} />
			<Route path="/map" exact element={<MapCont />} />
			{/* <Route path="/mapl" exact element={<MedRet/>} /> */}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />

			
		</Routes>
	


	);
}

export default App;
