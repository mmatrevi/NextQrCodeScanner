import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";

import axios from "axios";

export default function Scan() {
  const [qrData, setQrData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sessionId, setSessionId] = useState(""); // Assuming you will set this appropriately
  const router = useRouter();
  const qrRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data.text); // Parse the JSON string from 'text' field
        const currentTime = new Date().getTime();
        const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds

        if (currentTime - parsedData.timestamp < fifteenMinutes) {
          setQrData(parsedData.value);
          setShowModal(true); // Show modal with the QR code data
          qrRef.current.stop();
        } else {
          alert("QR Code is expired!");
        }
      } catch (error) {
        console.error("Error parsing QR code data", error);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleOK = async () => {
    try {
      await axios.post("/api/validate-code", { enteredCode: qrData, sessionId });
      router.push("/");
    } catch (error) {
      console.error("Error sending QR code data:", error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    router.push("/"); // Redirect to home or another page
  };

  return (
    <div className="flex flex-col h-screen justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">Scan QR</h1>
      <div>
        <QrReader
          className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
          onResult={handleScan}
          constraints={{ facingMode: "environment" }}
          style={{ width: "40%", height: "40%" }}
          ref={qrRef}
        />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-4">
            <p className="text-xl font-bold mb-2">Scanned data:</p>
            <p>{qrData}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={handleOK}
              >
                OK
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
