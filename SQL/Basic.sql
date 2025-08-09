-- Create a new database named 'college'
CREATE DATABASE college;

-- Select the database 'college' to use for subsequent operations
USE college;

-- Delete the database named 'college' permanently
DROP DATABASE college;


-- Create a table named 'student' with two columns: rollno and name
CREATE TABLE student (
    rollno INT,           -- roll number of the student, stored as an integer
    name VARCHAR(30),
    age INT      -- name of the student, stored as a variable-length string up to 30 characters
);

insert into student values
(12, "Niraj", 21),
(14, "Ankit", 25);


1. Create Table
Creates a new table with specified columns and data types.

sql
Copy
Edit
CREATE TABLE student (
    rollno INT,
    name VARCHAR(30)
);
2. Insert Data
Adds new rows to the table.

sql
Copy
Edit
INSERT INTO student (rollno, name) VALUES (1, 'Niraj Kumar');
3. Select Data
Retrieves data from the table.

Get all data:

sql
Copy
Edit
SELECT * FROM student;
Get specific columns:

sql
Copy
Edit
SELECT name FROM student;
Get rows with condition:

sql
Copy
Edit
SELECT * FROM student WHERE rollno = 1;
4. Update Data
Modify existing rows in the table.

sql
Copy
Edit
UPDATE student SET name = 'Niraj K.' WHERE rollno = 1;
5. Delete Data
Remove rows from the table.

sql
Copy
Edit
DELETE FROM student WHERE rollno = 1;
6. Drop Table
Delete the whole table and its data permanently.

sql
Copy
Edit
DROP TABLE student;
7. Alter Table
Modify the table structure (add/remove/change columns).

Add a column:

sql
Copy
Edit
ALTER TABLE student ADD age INT;
Drop a column:

sql
Copy
Edit
ALTER TABLE student DROP COLUMN age;
8. Truncate Table
Remove all rows from the table quickly but keep the table structure.

sql
Copy
Edit
TRUNCATE TABLE student;
