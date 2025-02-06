
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'ExpenseMgrTest')
BEGIN
    CREATE DATABASE ExpenseMgrTest;
END