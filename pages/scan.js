import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Scan() {
  const router = useRouter();
  const [qrData, setQrData] = useState({ code: "", sessionId: "" });
  const qrRef = useRef(null);

  const handleScan = async (result, error) => {
    if (result?.text) {
      try {
        // Parse JSON from the QR code
        const parsedData = JSON.parse(result.text);

        // Ensure parsed data contains both 'code' and 'sessionId'
        if (parsedData.code && parsedData.sessionId) {
          setQrData({ code: parsedData.code, sessionId: parsedData.sessionId });
          qrRef.current.stop(); // Stop the QR reader once we get a valid result

          // Automatically submit the QR code data for validation
          const response = await axios.post("/api/qr/validate-code", {
            enteredCode: parsedData.code,
            sessionId: parsedData.sessionId,
          });

          console.log("API Response:", response.data);

          if (response.data.valid) {
            router.push("/Main"); // Redirect to home page on success
          } else {
            alert("Invalid code, please try again.");
            qrRef.current.start(); // Restart the QR reader if invalid
          }
        } else {
          throw new Error("Invalid QR code format.");
        }
      } catch (err) {
        console.error("Error parsing QR code:", err);
        alert("Error parsing QR code.");
      }
    }

    if (error) {
      console.error("QR Reader Error:", error);
    }
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
        </div>
      </main>
    </>
  );
}
