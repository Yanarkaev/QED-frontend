import React from "react";
import { I18nProvider } from "../contexts/I18nContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <I18nProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </I18nProvider>
    </AuthProvider>
  );
};
