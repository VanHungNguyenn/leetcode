-- SELECT ProductID, Name, ListPrice, StandardCost FROM SalesLT.Product;

-- SELECT ProductID, Name + '(' + ProductNumber + ')', ListPrice - StandardCost FROM SalesLT.Product;

-- SELECT ProductID, Name + '(' + ProductNumber + ')' AS ProductName, ListPrice - StandardCost AS Markup FROM SalesLT.Product;

-- SELECT CAST(ProductID AS varchar(4)) + ': ' + Name AS ProductName 
-- FROM SalesLT.Product

-- SELECT TRY_CAST(Size AS int) AS NumericSize
-- FROM SalesLT.Product

-- SELECT CONVERT(varchar(4), ProductID) + ': ' + Name AS ProductName
-- FROM SalesLT.Product

-- SELECT SellStartDate,
--        CONVERT(varchar(20), SellStartDate) AS StartDate,
--        CONVERT(varchar(10), SellStartDate, 101) AS FormattedStartDate 
-- FROM SalesLT.Product;

-- SELECT Name, ISNULL(Color, 'None') AS ABC
-- FROM SalesLT.Product

-- Challenger

-- SELECT * FROM SalesLT.Customer

-- SELECT Title, FirstName, MiddleName, LastName, Suffix FROM SalesLT.Customer

-- SELECT SalesPerson, ISNULL(Title, '') + LastName AS CustomerName, Phone FROM SalesLT.Customer

-- SELECT CAST(CustomerID AS varchar) + ': ' + CompanyName AS CustomerCompany FROM SalesLT.Customer

-- SELECT SalesOrderNumber + ' (' + STR(RevisionNumber, 1) + ')' AS OrderRevision,
--     CONVERT(nvarchar(30), OrderDate, 102) AS OrderDate
--  FROM SalesLT.SalesOrderHeader;

-- SELECT FirstName + ' ' + ISNULL(MiddleName + ' ', '') + LastName AS CustomerName
-- FROM SalesLT.Customer;

--   UPDATE SalesLT.Customer
--   SET EmailAddress = NULL
--   WHERE CustomerID % 7 = 1;

--  SELECT CustomerID, COALESCE(EmailAddress, Phone) AS PrimaryContact
--  FROM SalesLT.Customer;

-- UPDATE SalesLT.SalesOrderHeader
--   SET ShipDate = NULL
--   WHERE SalesOrderID > 71899;

-- SELECT SalesOrderID, OrderDate, ShipDate,
--     CASE
--         WHEN ShipDate IS NULL THEN 'Awaiting Shipment'
--         ELSE 'Shipped'
--     END AS ShippingStatus
-- FROM SalesLT.SalesOrderHeader

-- SELECT ProductID, Name, ListPrice
-- FROM SalesLT.Product
-- ORDER BY ListPrice ASC, ProductID DESC;

-- SELECT TOP 10 Name, ListPrice
-- FROM SalesLT.Product
-- ORDER BY ListPrice DESC;

-- SELECT TOP 10 WITH TIES Name, ListPrice
-- FROM SalesLT.Product
-- ORDER BY ListPrice DESC;

-- SELECT TOP 10 PERCENT Name, ListPrice
-- FROM SalesLT.Product
-- ORDER BY ListPrice DESC;

-- SELECT ProductID, ProductName, ListPrice
-- FROM SalesLT.Product
-- ORDER BY ListPrice DESC 
-- OFFSET 0 ROWS 
-- FETCH NEXT 10 ROWS ONLY;

-- SELECT DISTINCT City, CountryRegion
-- FROM SalesLT.Supplier
-- ORDER BY CountryRegion, City;

-- WHERE
-- SELECT ProductID AS Category, Name 
-- FROM SalesLT.Product
-- WHERE ProductID < 800

