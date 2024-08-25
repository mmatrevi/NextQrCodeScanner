import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Scan() {
  const router = useRouter();
  const [qrData, setQrData] = useState({ code: "", sessionId: "" });
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef(null);

  const handleScan = (result, error) => {
    if (result?.text) {
      try {
        // Parse JSON from the QR code
        const parsedData = JSON.parse(result.text);

        // Ensure parsed data contains both 'code' and 'sessionId'
        if (parsedData.code && parsedData.sessionId) {
          setQrData({ code: parsedData.code, sessionId: parsedData.sessionId });
          setShowModal(true);
          qrRef.current.stop(); // Stop the QR reader once we get a valid result
        } else {
          throw new Error("Invalid QR code format.");
        }
      } catch (err) {
        console.error("Error parsing QR code:", err);
        alert("Invalid QR code format.");
      }
    }

    if (error) {
      console.error("QR Reader Error:", error);
      //alert("Error reading QR code. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.reload(); // Reload the page to reset the scanner and modal
  };

  const handleOK = async () => {
    const { code, sessionId } = qrData;
    if (!code || !sessionId) {
      alert("Invalid QR code data. Please scan again.");
      return;
    }

    try {
      console.log("Submitting Code:", code);
      console.log("Session ID:", sessionId);

      const response = await axios.post("/api/qr/validate-code", {
        enteredCode: code,
        sessionId,
      });

      console.log("API Response:", response.data);

      if (response.data.valid) {
        router.push("/Main"); // Redirect to home page on success
      } else {
        alert("Invalid code, please try again.");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
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
