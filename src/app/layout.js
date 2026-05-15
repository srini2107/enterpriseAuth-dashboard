export const metadata = {
  title: "EnterpriseAuth",
  description: "Secure Authentication Platform",
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}