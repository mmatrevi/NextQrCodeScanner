import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import { getCookie } from 'cookies-next';

export default function Login() {
  const [enteredCode, setEnteredCode] = useState('');
  const [isValid, setIsValid] = useState(null);
  const router = useRouter();

  // Get the session ID from the cookie
  const sessionId = getCookie('sessionId');

  const handleCodeSubmit = async () => {
    try {
      const response = await axios.post('/api/qr/validate-code', {
        enteredCode,
        sessionId,
      });
      setIsValid(response.data.valid);
      if (response.data.valid) {
        router.push('/Main'); // Ensure this path is correct
      } else {
        alert('Invalid code');
      }
    } catch (error) {
      console.error('Error validating code:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Enter the code from the QR code to login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex flex-col h-screen justify-center text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          <input
            type="text"
            placeholder="Enter Code"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg mb-4"
          />
          <button
            onClick={handleCodeSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
          {isValid === false && <p className="text-red-500">Invalid code, please try again.</p>}
        </div>
      </main>
    </>
  );
}
