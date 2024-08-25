import connectDB from '../../../utils/db';
import CodeStore from '../../../models/CodeStore';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { enteredCode, sessionId } = req.body;

  if (!enteredCode || !sessionId) {
    return res.status(400).json({ valid: false, message: 'Invalid data provided.' });
  }

  try {
    const codeEntry = await CodeStore.findOne({ sessionId });

    if (!codeEntry) {
      console.log('Session not found.');
      return res.status(400).json({ valid: false, message: 'Session not found.' });
    }

    const isValid = enteredCode === codeEntry.code;
    console.log(isValid ? 'Code is valid.' : 'Invalid code.');

    return res.status(200).json({ valid: isValid });
  } catch (error) {
    console.error('Error validating code:', error);
    return res.status(500).json({ valid: false, message: 'Internal Server Error' });
  }
}
