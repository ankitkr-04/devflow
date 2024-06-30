import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-center min-h-screen w-full">{children}</main>;
};

export default AuthLayout;
