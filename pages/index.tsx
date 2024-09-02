import Head from 'next/head';
import Nav from "./Nav"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart2 Attendance</title>
        <meta name="description" content="A stylish landing page using Tailwind CSS and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center text-center py-20 px-5 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Our Smart Attendance App
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover the best solutions for your School. We offer a range of services in record taking tailored to meet your needs.
          </p>
          <Link href="/Apply">
            <a className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </a>
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-20 px-5 w-full flex flex-col items-center bg-white">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            <div className="bg-indigo-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-700">
                State of the art QR code scannig system.
              </p>
            </div>
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-700">
                Unique Code generation system to validate QR codes.
              </p>
            </div>
            <div className="bg-pink-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-700">
                Our third feature ensures seamless integration with your existing systems.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-gray-800 text-white text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cyber Problem-Solving Group 12 Project. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
