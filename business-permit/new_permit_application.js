import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const router = express.Router();

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // add your MySQL password
  database: 'business_permit_db'
};

// Create application endpoint
router.post('/submit-application', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Start transaction
    await connection.beginTransaction();

    try {
      // 1. Insert applicant
      const [applicantResult] = await connection.execute(
        'INSERT INTO applicants (is_nano_enterprise) VALUES (?)',
        [req.body.isNanoEnterprise]
      );
      const applicantId = applicantResult.insertId;

      // 2. Insert business
      const [businessResult] = await connection.execute(
        'INSERT INTO businesses (applicant_id) VALUES (?)',
        [applicantId]
      );
      const businessId = businessResult.insertId;

      // 3. Insert business name
      await connection.execute(
        'INSERT INTO business_names (business_id, business_name) VALUES (?, ?)',
        [businessId, req.body.businessName]
      );

      // 4. Insert business address
      await connection.execute(
        'INSERT INTO business_addresses (business_id, street_address, barangay, city) VALUES (?, ?, ?, ?)',
        [businessId, req.body.streetAddress, req.body.barangay, req.body.city]
      );

      // 5. Insert owner information
      await connection.execute(
        'INSERT INTO business_owners (business_id, owner_name, owner_address) VALUES (?, ?, ?)',
        [businessId, req.body.ownerName, req.body.ownerAddress]
      );

      // Commit transaction
      await connection.commit();
      res.json({ success: true, message: 'Application submitted successfully' });

    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.end();
    }

  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ success: false, message: 'Error submitting application' });
  }
});

// Get all applications endpoint
router.get('/applications', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    const [rows] = await connection.execute(`
      SELECT 
        b.business_id,
        bn.business_name,
        bo.owner_name,
        ba.street_address,
        ba.barangay,
        ba.city
      FROM businesses b
      JOIN business_names bn ON b.business_id = bn.business_id
      JOIN business_owners bo ON b.business_id = bo.business_id
      JOIN business_addresses ba ON b.business_id = ba.business_id
    `);

    connection.end();
    res.json(rows);

  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Error fetching applications' });
  }
});

export default router;