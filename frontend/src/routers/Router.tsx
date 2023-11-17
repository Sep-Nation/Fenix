import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}