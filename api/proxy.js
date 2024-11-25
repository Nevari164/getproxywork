// api/proxy.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Handle POST method
        const targetUrl = req.body.targetUrl;
        const postData = req.body.data;

        try {
            const response = await fetch(targetUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            const result = await response.json();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to make POST request' });
        }
    } else if (req.method === 'GET') {
        // Handle GET method
        const targetUrl = req.query.targetUrl;
        try {
            const response = await fetch(targetUrl);
            const result = await response.json();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to make GET request' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
