import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import { dbConfig } from './config.js'; // make sure you have your DB config

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/user/barangaypermitsubmit-application', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    // Your existing code logic here
    res.json({ success: true, message: 'Submission endpoint works' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  } finally {
    if (connection) await connection.end();
  }
});

app.post('/user/submit-application', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const { 
      applicant_name,
      address,
      contact_number,
      business_name,
      business_type,
      purpose
    } = req.body;

    const [result] = await connection.execute(
      `INSERT INTO barangay_permits 
       (applicant_name, address, contact_number, business_name, business_type, purpose, status, application_date) 
       VALUES (?, ?, ?, ?, ?, ?, 'Pending', NOW())`,
      [applicant_name, address, contact_number, business_name, business_type, purpose]
    );

    res.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationId: result.insertId 
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  } finally {
    if (connection) await connection.end();
  }
});

// Start server
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Barangay Permit Service running on port ${PORT}`);
});
