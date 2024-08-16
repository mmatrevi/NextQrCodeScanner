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
      <div>
        <h1>Enter Code</h1>
        <input
          type="text"
          placeholder="Enter Code"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>Submit</button>
        {isValid === false && <p>Invalid code, please try again.</p>}
      </div>
    </>
  );
};

export default EnterCodePage;
