import { Navigate, Route, Routes } from "react-router-dom";
import { DairyPage } from "pages";

export function DairyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DairyPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
