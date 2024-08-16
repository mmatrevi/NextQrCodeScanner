import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Scan() {
  const router = useRouter();
  const [data, setData] = useState("No result");
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null);

  const handleScan = (result, error) => {
    if (!!result) {
      setData(result?.text);
      setShowModal(true);
      qrRef.current.stop();
    }

    if (!!error) {
      console.info(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.reload(); // Reload the page or handle cancellation
  };

  const handleOK = async () => {
    const sessionId = "YOUR_SESSION_ID"; // Replace with actual session ID or retrieve it from context/state

    try {
      const response = await axios.post('/api/validateCode', {
        enteredCode: data,
        sessionId,
      });

      if (response.data.valid) {
        console.log('Code is valid.');
        // Handle valid code case (e.g., redirect or show a success message)
        router.push("/success"); // Example: redirect to a success page
      } else {
        console.log('Invalid code.');
        // Handle invalid code case (e.g., show an error message)
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error sending code to API:', error);
    }

    setShowModal(false);
    router.reload(); // Reload the page or handle post-submission behavior
  };

  return (
    <>
      <Head>
        <title>QR Scan</title>
        <meta name="description" content="QR Code Scanner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen mt-[5rem] justify-center items-center px-4">
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">QR Scanner</h1>
          <div className="w-full flex justify-center">
            <QrReader
              onResult={handleScan}
              constraints={{ facingMode: "environment" }}
              style={{ width: "100%", maxWidth: "400px", height: "auto", maxHeight: "300px" }}
              ref={qrRef}
            />
          </div>
          <Link
            href={`/`}
            className="bg-yellow-200 mt-4 text-md rounded-md px-4 py-2 hover:underline"
          >
            Back to home..
          </Link>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
              <div className="bg-white rounded-md p-4 w-full max-w-md">
                <p className="text-xl font-bold mb-2">Scanned data:</p>
                <p className="mb-4">{data}</p>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                    onClick={handleOK}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
