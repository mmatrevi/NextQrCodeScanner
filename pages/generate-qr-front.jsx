import { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const GenerateQRPage = () => {
  const [qrCodeData, setQrCodeData] = useState('');

  const fetchQRCode = async () => {
    try {
      const response = await axios.get('/api/qr/generate-qr');
      const { qrCodeData, sessionId, uniqueCode } = response.data;

      setQrCodeData(qrCodeData);

      // Store sessionId and uniqueCode in localStorage
      localStorage.setItem('sessionId', sessionId);
      localStorage.setItem('uniqueCode', uniqueCode);

      console.log('Generated sessionId:', sessionId);
      console.log('Generated uniqueCode:', uniqueCode);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  const printQRCode = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print QR Code</title></head><body>');
    printWindow.document.write('<img src="' + qrCodeData + '" alt="QR Code" style="width:100%; height:auto;"/>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <button
          onClick={fetchQRCode}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mb-6"
        >
          Generate QR Code
        </button>
        {qrCodeData && (
          <div className="flex flex-col items-center">
            <img src={qrCodeData} alt="QR Code" className="w-64 h-64 object-contain mb-4" />
            <button
              onClick={printQRCode}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            >
              Print QR Code
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GenerateQRPage;
