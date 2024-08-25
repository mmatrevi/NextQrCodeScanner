import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import Nav from "./Nav"; // Adjust the path to Nav component

const Main: NextPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission status

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      firstname,
      lastname,
      email,
      phone,
      company,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const content = await response.json();
      
      // Reset the form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setCompany("");

      // Set the submission status to true
      setIsSubmitted(true);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Nav />
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-10">
          {/* Conditionally render the form or thank you message */}
          {!isSubmitted ? (
            <form className="py-4 space-y-4" onSubmit={handleSubmit}>
              <div className="flex items-center justify-center">
                <label htmlFor="firstname" className="sr-only">
                  First Name
                </label>
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="lastname" className="sr-only">
                  Last Name
                </label>
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="company" className="sr-only">
                  Student ID number
                </label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  name="company"
                  id="company"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                  placeholder="Student ID number"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Thank you for submitting your information!</h2>
              <p className="text-gray-600">We have received your lecture attendance data.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
