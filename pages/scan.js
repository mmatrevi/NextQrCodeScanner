import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Scan() {
  const router = useRouter();
  const [qrData, setQrData] = useState("No result");
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null);

  const handleScan = (result, error) => {
    if (result?.text) {
      try {
        const parsedData = JSON.parse(result.text); // Parse JSON from the QR code
        const { code, sessionId } = parsedData; // Extract enteredCode and sessionId

        setQrData({ code, sessionId });
        setShowModal(true);
        qrRef.current.stop(); // Stop the QR reader once we get a valid result
      } catch (err) {
        console.error("Error parsing QR code:", err);
        alert("Invalid QR code format.");
      }
    }

    if (error) {
      console.error("QR Reader Error:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.reload(); // Reload the page to reset the scanner and modal
  };

  const handleOK = async () => {
    const { code, sessionId } = qrData;
    try {
      const response = await axios.post("/api/qr/validate-code", {
        enteredCode: code,
        sessionId,
      });

      if (response.data.valid) {
        alert("Code validated successfully!");
        router.push("/"); // Redirect to home page on success
      } else {
        alert("Invalid code, please try again.");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
      alert("Failed to validate QR code. Please try again.");
    }
    handleCloseModal(); // Close the modal after handling the OK action
  };

  return (
    <>
      <Head>
        <title>QR Scan</title>
        <meta name="description" content="QR code scanner page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col mt-[5rem] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">QR Scanner</h1>
          <div>
            <QrReader
              className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
              onResult={handleScan}
              constraints={{ facingMode: "environment" }}
              style={{ width: "40%", height: "40%" }}
              ref={qrRef}
            />
          </div>
          <Link
            href="/"
            className="bg-yellow-200 m-4 text-md rounded-md px-4 py-2 hover:underline"
          >
            Back to home..
          </Link>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-md p-4">
                <p className="text-xl font-bold mb-2">Scanned data:</p>
                <p>Code: {qrData.code}</p>
                <p>Session ID: {qrData.sessionId}</p>
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-4 hover:bg-gray-300"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mx-4 mt-4 hover:bg-gray-300"
                  onClick={handleOK}
                >
                  Ok
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
