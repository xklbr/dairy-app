import { AppRouter } from "./router/app.router";
import { AppTheme } from "./theme";

export function DairyApp() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}
