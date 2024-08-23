export default function handler(req, res) {
  if (process.env.NODE_ENV !== 'production') {
    // Your existing code for handling the /api/send request
    // For example:
    if (req.method === 'POST') {
      const { email, message } = req.body;

      // Perform actions such as sending an email, saving to a database, etc.
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } else {
    // Optionally, return a 404 or other response if accessed in production
    res.status(404).json({ message: 'This API route is not available in production.' });
  }
}
