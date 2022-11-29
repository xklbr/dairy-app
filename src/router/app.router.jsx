import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "features/auth";

import { DairyRoutes } from "features/dairy";
import { CheckingAuth } from "components";
import { useCheckAuth } from "features/auth/hooks";

export function AppRouter() {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DairyRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
