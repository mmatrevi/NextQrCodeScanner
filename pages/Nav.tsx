import { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle screen resize
  const handleResize = () => {
    if (window.innerWidth >= 640) { // Adjust this breakpoint based on your needs
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative isolate flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 overflow-hidden bg-gray-50 px-6 py-4 sm:py-2.5">
      {/* Background decorations */}
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>

      <div className="flex flex-1 items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <img
            src="data:image/png;base64,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" // Add your logo URL here
            className="h-8 w-auto sm:h-12"
            alt="Your Company"
          />
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 cursor-pointer hidden sm:flex">
            <Link href="/">
              <a>
                <p>Lecture Attendance Form</p>
              </a>
            </Link>
          </div>
        </div>

        <button
          className="sm:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white bg-opacity-80 shadow-lg rounded-lg z-50 flex flex-col items-center pt-16">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href="/">
              <a className="py-4 text-blue-500 hover:text-blue-700 text-lg">Lecture Attendance Form</a>
            </Link>
            <Link href="/generate-qr-front">
              <a className="py-4 text-blue-500 hover:text-blue-700 text-lg">Generate QR Code</a>
            </Link>
            <Link href="/scan">
              <a className="py-4 text-blue-500 hover:text-blue-700 text-lg">Scan QR Code</a>
            </Link>
            <Link href="/ViewDataPage">
              <a className="py-4 text-blue-500 hover:text-blue-700 text-lg">ViewDataPage</a>
            </Link>
          </div>
        )}

        {/* Desktop view links */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-y-2 sm:gap-x-4">
          <Link
            href="/generate-qr-front"
            className="bg-blue-500 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Generate QR Code
          </Link>
          <Link
            href="/scan"
            className="bg-blue-500 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Scan QR Code
          </Link>
          <Link
            href="/ViewDataPage"
            className="bg-blue-500 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-blue-600"
          >
            ViewDataPage
          </Link>
        </div>
      </div>
    </div>
  );
}
