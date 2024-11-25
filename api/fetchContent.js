
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract the target URL from the request body
      const { targetUrl } = req.body;

      if (!targetUrl) {
        return res.status(400).json({ error: 'Target URL is required' });
      }

      // Fetch the content from the target URL
      const response = await axios.get(targetUrl);

      // Return the content of the target URL
      res.status(200).json({
        data: response.data
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching the content from the target URL' });
    }
  } else {
    // If the request is not POST, return a 405 Method Not Allowed response
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
