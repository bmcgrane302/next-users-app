import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <nav className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
