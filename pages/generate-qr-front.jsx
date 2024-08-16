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

  return (
    <>
      <Nav />
      <div>
        <h1>Generate QR Code</h1>
        <button onClick={fetchQRCode}>Generate QR Code</button>
        {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
      </div>
    </>
  );
};

export default GenerateQRPage;
