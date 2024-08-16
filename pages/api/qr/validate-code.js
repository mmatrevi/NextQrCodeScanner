import connectDB from '../../../utils/db';
import CodeStore from '../../../models/CodeStore';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { enteredCode, sessionId } = req.body;

    console.log('Received enteredCode:', enteredCode);
    console.log('Received sessionId:', sessionId);

    try {
      // Find the code entry in the database by sessionId
      const codeEntry = await CodeStore.findOne({ sessionId });

      if (!codeEntry) {
        console.log('Session not found.');
        return res.status(400).json({ valid: false, message: 'Session not found.' });
      }

      // Compare the entered code with the stored code
      if (enteredCode === codeEntry.code) {
        console.log('Code is valid.');
        return res.status(200).json({ valid: true });
      } else {
        console.log('Invalid code.');
        return res.status(400).json({ valid: false, message: 'Invalid code.' });
      }
    } catch (error) {
      console.error('Error validating code:', error);
      return res.status(500).json({ valid: false, message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
