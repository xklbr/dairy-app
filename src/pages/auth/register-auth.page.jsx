import { AuthLayout } from "layouts";
import { RegisterAuthLForm } from "features/auth";

export function RegisterAuthPage() {
  return (
    <AuthLayout title="Create account">
      <RegisterAuthLForm />
    </AuthLayout>
  );
}
