IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'ExpenseMgr')
BEGIN
    CREATE DATABASE ExpenseMgr;
END