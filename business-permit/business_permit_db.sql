CREATE DATABASE business_permit_db;
USE business_permit_db;

-- =======================
-- 1. APPLICANTS
-- =======================
CREATE TABLE applicants (
    applicant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    contact_number VARCHAR(20),
    email VARCHAR(100),
    is_nano_enterprise ENUM('Yes','No') NOT NULL
);

-- =======================
-- 2. BUSINESSES
-- =======================
CREATE TABLE businesses (
    business_id INT AUTO_INCREMENT PRIMARY KEY,
    applicant_id INT NOT NULL,
    ownership_status ENUM('Leased', 'Owned') NOT NULL,
    FOREIGN KEY (applicant_id) REFERENCES applicants(applicant_id)
);

-- =======================
-- 3. DOCUMENTS
-- =======================
CREATE TABLE submitted_documents (
    document_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    document_type ENUM(
        'Business Registration Proof',
        'Contract of Lease',
        'Tax Declaration',
        'Photo: Location of Business',
        'Photo: Front View',
        'Photo: Area of Business Activity',
        'Photo: Street View Left',
        'Photo: Street View Right',
        'Other'
    ) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INT,
    file_content LONGBLOB NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 4. LEGAL INFO
-- =======================
CREATE TABLE business_legal_info (
    legal_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    business_structure ENUM(
        'Sole Proprietorship',
        'Partnership',
        'Corporation',
        'Cooperative',
        'One-Person Corporation'
    ) NOT NULL,
    registration_number VARCHAR(50) NOT NULL,
    tin VARCHAR(20) NOT NULL,
    sss_no VARCHAR(20),
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 5. BUSINESS NAMES
-- =======================
CREATE TABLE business_names (
    name_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    business_name VARCHAR(200) NOT NULL,
    trade_name VARCHAR(200),
    same_as_business_name BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 6. ADDRESSES
-- =======================
CREATE TABLE business_addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    house_bldg_no VARCHAR(50),
    building_name VARCHAR(100),
    block_no VARCHAR(20),
    lot_no VARCHAR(20),
    street VARCHAR(100),
    subdivision VARCHAR(100),
    province VARCHAR(100),
    city_municipality VARCHAR(100),
    sub_municipality VARCHAR(100),
    barangay VARCHAR(100),
    zip_code VARCHAR(10),
    district VARCHAR(50),
    complete_address VARCHAR(255),
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 7. CONTACTS
-- =======================
CREATE TABLE business_contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    telephone VARCHAR(20),
    email VARCHAR(100),
    mobile VARCHAR(20),
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 8. OWNERS
-- =======================
CREATE TABLE business_owners (
    owner_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    surname VARCHAR(100),
    given_name VARCHAR(100),
    middle_name VARCHAR(100),
    suffix VARCHAR(20),
    sex ENUM('Male', 'Female') NOT NULL,
    filipino_percent DECIMAL(5,2),
    foreign_percent DECIMAL(5,2),
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 9. ESTABLISHMENT INFO
-- =======================
CREATE TABLE business_establishments (
    establishment_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    business_area DECIMAL(10,2),
    total_floor_area DECIMAL(10,2),
    operation_start TIME,
    operation_end TIME,
    total_employees INT,
    male_employees INT,
    female_employees INT,
    qc_residing_employees INT,
    delivery_vans INT DEFAULT 0,
    delivery_motorcycles INT DEFAULT 0,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 10. BUSINESS LOCATION ADDRESS
-- =======================
CREATE TABLE business_location_addresses (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    same_as_main_office BOOLEAN DEFAULT FALSE,
    house_bldg_no VARCHAR(50),
    building_name VARCHAR(100),
    block_no VARCHAR(20),
    lot_no VARCHAR(20),
    street VARCHAR(100),
    subdivision VARCHAR(100),
    province VARCHAR(100) DEFAULT 'NCR',
    city_municipality VARCHAR(100) DEFAULT 'Quezon City',
    sub_municipality VARCHAR(100),
    barangay VARCHAR(100),
    zip_code VARCHAR(10),
    district VARCHAR(50),
    display_address VARCHAR(255),
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    zoning_class VARCHAR(100),
    zoning_description TEXT,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 11. PROPERTY INFO
-- =======================
CREATE TABLE business_property_info (
    property_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    tax_declaration_no VARCHAR(100),
    property_identification_no VARCHAR(100),
    transfer_certificate_of_title VARCHAR(100),
    is_registered_owner ENUM('Yes','No') NOT NULL,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- =======================
-- 12. ACTIVITIES
-- =======================
CREATE TABLE business_activities (
    activity_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    total_capital_investment DECIMAL(15,2) NOT NULL,
    has_tax_incentives ENUM('Yes','No') NOT NULL,
    tax_incentive_certificate LONGBLOB,
    activity_type ENUM('Main Office', 'Branch', 'Admin Office Only') NOT NULL,
    description TEXT,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);

-- Line of business lookup
CREATE TABLE line_of_business_options (
    line_id INT AUTO_INCREMENT PRIMARY KEY,
    line_name VARCHAR(255) NOT NULL
);

-- Connect business activity to line of business
CREATE TABLE business_line_of_business (
    biz_line_id INT AUTO_INCREMENT PRIMARY KEY,
    activity_id INT NOT NULL,
    line_id INT NOT NULL,
    FOREIGN KEY (activity_id) REFERENCES business_activities(activity_id),
    FOREIGN KEY (line_id) REFERENCES line_of_business_options(line_id)
);

-- Products and services
CREATE TABLE products_services (
    ps_id INT AUTO_INCREMENT PRIMARY KEY,
    activity_id INT NOT NULL,
    product_service_desc VARCHAR(255) NOT NULL,
    FOREIGN KEY (activity_id) REFERENCES business_activities(activity_id)
);

-- Equipment listing
CREATE TABLE equipment (
    equipment_id INT AUTO_INCREMENT PRIMARY KEY,
    activity_id INT NOT NULL,
    units INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    size VARCHAR(100),
    FOREIGN KEY (activity_id) REFERENCES business_activities(activity_id)
);

-- =======================
-- 13. COMPLIANCE DECLARATIONS
-- =======================
CREATE TABLE business_compliance (
    compliance_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    office_only ENUM('Yes','No') NOT NULL,
    has_walk_in_transactions ENUM('Yes','No') NOT NULL,
    has_merchandise_storage ENUM('Yes','No') NOT NULL,
    serves_liquor ENUM('Yes','No') NOT NULL,
    located_in_market ENUM('Yes','No') NOT NULL,
    is_market_operator ENUM('Yes','No'),
    market_name VARCHAR(150),
    has_community_tax_cert ENUM('Yes','No') NOT NULL,
    community_tax_cert LONGBLOB,
    is_bmbe ENUM('Yes','No') NOT NULL,
    bmbe_cert LONGBLOB,
    covered_by_gaming_reg ENUM('Yes','No') NOT NULL,
    has_tax_exemption ENUM('Yes','No') NOT NULL,
    exemption_type ENUM('Cooperative','PEZA-Accredited','Inventor','None') DEFAULT 'None',
    owner_is_pwd ENUM('Yes','No') NOT NULL,
    employs_pwd ENUM('Yes','No') NOT NULL,
    has_internet ENUM('Yes','No') NOT NULL,
    internet_type ENUM('Prepaid','Postpaid','None') DEFAULT 'None',
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);


CREATE TABLE business_applicants (
    applicant_form_id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    applied_by ENUM('Business Owner','Representative') NOT NULL,
    name VARCHAR(150) NOT NULL,
    scanned_id LONGBLOB NOT NULL,
    FOREIGN KEY (business_id) REFERENCES businesses(business_id)
);
