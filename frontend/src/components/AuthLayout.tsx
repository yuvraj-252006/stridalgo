import type { ReactNode } from "react";
import "../styles/auth.css";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="auth-page">
      <div className="auth-glow glow-1"></div>
      <div className="auth-glow glow-2"></div>

      <div className="auth-card">
        <h1 className="auth-logo">StridAlgo</h1>

        <h2>{title}</h2>

        <p>{subtitle}</p>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;