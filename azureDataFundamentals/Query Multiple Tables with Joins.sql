-- SELECT SalesLT.Product.Name AS ProductName, SalesLT.ProductCategory.Name AS Category
-- FROM SalesLT.Product
-- JOIN SalesLT.ProductCategory
-- ON SalesLT.Product.ProductCategoryID = SalesLT.ProductCategory.ProductCategoryID

-- SELECT p.Name AS ProductName, c.Name AS Category
-- FROM SalesLT.Product AS p
-- JOIN SalesLT.ProductCategory AS c
-- ON p.ProductCategoryID = c.ProductCategoryID

--  SELECT oh.OrderDate, oh.SalesOrderNumber, p.Name AS ProductName, od.OrderQty, od.UnitPrice, od.LineTotal
--  FROM SalesLT.SalesOrderHeader AS oh
--  JOIN SalesLT.SalesOrderDetail AS od
--      ON od.SalesOrderID = oh.SalesOrderID
--  JOIN SalesLT.Product AS p
--      ON od.ProductID = p.ProductID
--  ORDER BY oh.OrderDate, oh.SalesOrderID, od.SalesOrderDetailID;

--  SELECT p.Name As ProductName, oh.SalesOrderNumber
--  FROM SalesLT.Product AS p
--  LEFT JOIN SalesLT.SalesOrderDetail AS od
--      ON p.ProductID = od.ProductID
--  LEFT JOIN SalesLT.SalesOrderHeader AS oh
--      ON od.SalesOrderID = oh.SalesOrderID
--  ORDER BY p.ProductID;

--  SELECT p.Name As ProductName, c.Name AS Category, oh.SalesOrderNumber
--  FROM SalesLT.Product AS p
--  LEFT OUTER JOIN SalesLT.SalesOrderDetail AS od
--      ON p.ProductID = od.ProductID
--  LEFT OUTER JOIN SalesLT.SalesOrderHeader AS oh
--      ON od.SalesOrderID = oh.SalesOrderID
--  INNER JOIN SalesLT.ProductCategory AS c
--      ON p.ProductCategoryID = c.ProductCategoryID
--  ORDER BY p.ProductID;

--  SELECT p.Name, c.FirstName, c.LastName, c.EmailAddress
--  FROM SalesLT.Product AS p
--  CROSS JOIN SalesLT.Customer AS c;

-- SELECT * FROM SalesLT.ProductCategory

-- SELECT pcat.Name AS ParentCategory, cat.Name AS SubCategory
-- FROM SalesLT.ProductCategory AS cat
-- JOIN SalesLT.ProductCategory AS pcat
-- ON cat.ParentProductCategoryID = pcat.ProductCategoryID

-- Challenger
-- 1
-- SELECT c.CompanyName, oh.SalesOrderID, oh.TotalDue, a.AddressLine1, ISNULL(a.AddressLine2, '') AS AddressLine2, a.City, a.StateProvince, a.PostalCode
-- FROM SalesLT.Customer AS c
-- JOIN SalesLT.SalesOrderHeader AS oh
-- ON c.CustomerID = oh.CustomerID
-- JOIN SalesLT.CustomerAddress AS ca
-- ON c.CustomerID = ca.CustomerID
-- JOIN SalesLT.Address AS a
-- ON ca.AddressID = a.AddressID
-- WHERE ca.AddressType = 'Main Office'
-- 2
--  SELECT c.CompanyName, c.FirstName, c.LastName,
--         oh.SalesOrderID, oh.TotalDue
--  FROM SalesLT.Customer AS c
--  LEFT JOIN SalesLT.SalesOrderHeader AS oh
--      ON c.CustomerID = oh.CustomerID
--  ORDER BY oh.SalesOrderID DESC;

--   SELECT c.CompanyName, c.FirstName, c.LastName, c.Phone
--  FROM SalesLT.Customer AS c
--  LEFT JOIN SalesLT.CustomerAddress AS ca
--      ON c.CustomerID = ca.CustomerID
--  WHERE ca.AddressID IS NULL;

 SELECT pcat.Name AS ParentCategory, cat.Name AS SubCategory, prd.Name AS ProductName
 FROM SalesLT.ProductCategory AS pcat
 JOIN SalesLT.ProductCategory AS cat
     ON pcat.ProductCategoryID = cat.ParentProductCategoryID
 JOIN SalesLT.Product AS prd
     ON prd.ProductCategoryID = cat.ProductCategoryID
 ORDER BY ParentCategory, SubCategory, ProductName;