import { useState } from "react";
import { useRouter } from "next/router";
import QrReader from "react-qr-scanner";  // Correct import for `react-qr-scanner`

export default function Scan() {
  const [qrData, setQrData] = useState("");
  const router = useRouter();

  const handleScan = (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data.text); // Parse the JSON string from 'text' field
        const currentTime = new Date().getTime();
        const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds

        if (currentTime - parsedData.timestamp < fifteenMinutes) {
          setQrData(parsedData.value);
          // Proceed with valid QR code (e.g., navigate to home page)
          router.push("/home");
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

  return (
    <div className="flex flex-col h-screen justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">Scan QR</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {qrData && <p>Data: {qrData}</p>}
    </div>
  );
}
