CREATE DATABASE IF NOT EXISTS barangay_permit_db;
USE barangay_permit_db;

CREATE TABLE IF NOT EXISTS barangay_permits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  applicant_name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  contact_number VARCHAR(20) NOT NULL,
  business_name VARCHAR(100),
  business_type VARCHAR(50),
  purpose VARCHAR(255) NOT NULL,
  status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  application_date DATETIME NOT NULL,
  approval_date DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);