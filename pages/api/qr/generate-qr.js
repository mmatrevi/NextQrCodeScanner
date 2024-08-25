import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '../../../utils/db';
import CodeStore from '../../../models/CodeStore';
import { generateUniqueCode } from '../../../utils/generateUniqueCode';
import { setCookie } from 'cookies-next';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const uniqueCode = generateUniqueCode(10);
    const sessionId = uuidv4();

    const qrData = { code: uniqueCode, sessionId };
    const qrCodeData = await QRCode.toDataURL(JSON.stringify(qrData));

    const newCodeEntry = new CodeStore({ sessionId, code: uniqueCode });
    await newCodeEntry.save();

    setCookie('sessionId', sessionId, {
      req,
      res,
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    });

    console.log(`Generated Code: ${uniqueCode}, Session ID: ${sessionId}`);
    return res.status(200).json({ qrCodeData, sessionId });
  } catch (error) {
    console.error('Error generating QR code:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
