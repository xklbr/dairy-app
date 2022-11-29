import { Navigate, Route, Routes } from "react-router-dom";
import { LoginAuthPage, RegisterAuthPage } from "pages";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginAuthPage />} />
      <Route path="register" element={<RegisterAuthPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
