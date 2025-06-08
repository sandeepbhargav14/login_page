const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, subscribe } = req.body;

    // Basic validation
    if (!name || name.length <= 3) {
        return res.status(400).json({ message: 'Invalid name' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email' });
    }

    if (subscribe !== 'on' && subscribe !== true) {
        return res.status(400).json({ message: 'You must agree to the terms' });
    }

    // You can store to DB or send email here
    console.log('Received data:', { name, email, subscribe });

    return res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
