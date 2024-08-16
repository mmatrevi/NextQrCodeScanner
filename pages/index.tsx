import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Nav from './Nav';

const EnterCodePage = () => {
  const [enteredCode, setEnteredCode] = useState('');
  const [isValid, setIsValid] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // No additional logic needed here as sessionId is retrieved during submission
  }, []);

  const handleCodeSubmit = async () => {
    try {
      const sessionId = localStorage.getItem('sessionId');

      console.log('Submitting Code:', enteredCode);
      console.log('Session ID:', sessionId);

      const response = await axios.post('/api/qr/validate-code', {
        enteredCode,
        sessionId,
      });

      setIsValid(response.data.valid);
      if (response.data.valid) {
        router.push('/Main');
      } else {
        alert('Invalid code');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
      } else if (error instanceof Error) {
        console.error('General error:', error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Enter Code</h1>
        <input
          type="text"
          placeholder="Enter Code"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          className="p-3 w-64 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleCodeSubmit}
          className="p-3 w-64 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        {isValid === false && (
          <p className="text-red-500 mt-4">Invalid code, please try again.</p>
        )}
      </div>
    </>
  );
};

export default EnterCodePage;
