import { AuthLayout } from "layouts";
import { LoginAuthForm } from "features/auth";

export function LoginAuthPage() {
  return (
    <AuthLayout title="Login">
      <LoginAuthForm />
    </AuthLayout>
  );
}
