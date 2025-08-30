import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import multer from 'multer';

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// =======================
// Database configuration
// =======================
const dbConfig = {
  host: 'mysql',          // Docker service name for MySQL
  user: 'root',
  password: 'yourpassword', 
  database: 'business_permit_db'
};

// =======================
// GET all business applications
// =======================
app.get('/applications', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(`
      SELECT b.business_id, a.name AS applicant_name, bn.business_name, bl.business_structure
      FROM businesses b
      JOIN applicants a ON a.applicant_id = b.applicant_id
      LEFT JOIN business_names bn ON bn.business_id = b.business_id
      LEFT JOIN business_legal_info bl ON bl.business_id = b.business_id
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch applications' });
  } finally {
    if (connection) await connection.end();
  }
});

// =======================
// POST submit new application
// =======================
app.post('/applications', upload.single('scanned_id'), async (req, res) => {
  const { applicant_name, contact_number, email, is_nano_enterprise, business_name, business_structure } = req.body;

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // 1️⃣ Insert applicant
    const [applicantResult] = await connection.execute(
      `INSERT INTO applicants (name, contact_number, email, is_nano_enterprise) VALUES (?, ?, ?, ?)`,
      [applicant_name, contact_number, email, is_nano_enterprise]
    );
    const applicant_id = applicantResult.insertId;

    // 2️⃣ Insert business
    const [businessResult] = await connection.execute(
      `INSERT INTO businesses (applicant_id, ownership_status) VALUES (?, 'Owned')`,
      [applicant_id]
    );
    const business_id = businessResult.insertId;

    // 3️⃣ Insert business name
    await connection.execute(
      `INSERT INTO business_names (business_id, business_name, same_as_business_name) VALUES (?, ?, true)`,
      [business_id, business_name]
    );

    // 4️⃣ Insert legal info
    await connection.execute(
      `INSERT INTO business_legal_info (business_id, business_structure, registration_number, tin) VALUES (?, ?, 'TEMP', 'TEMP')`,
      [business_id, business_structure]
    );

    // 5️⃣ Store scanned ID if uploaded
    if (req.file) {
      await connection.execute(
        `INSERT INTO business_applicants (business_id, applied_by, name, scanned_id) VALUES (?, 'Business Owner', ?, ?)`,
        [business_id, applicant_name, req.file.buffer]
      );
    }

    res.json({ success: true, business_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  } finally {
    if (connection) await connection.end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Business Permit Service running on port ${PORT}`);
});
