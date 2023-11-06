-- SELECT DISTINCT City, StateProvince
-- FROM SalesLT.Address
-- ORDER BY City ASC

-- SELECT TOP (10) PERCENT WITH TIES Name
-- FROM SalesLT.Product
-- ORDER BY Weight DESC

--  SELECT Name, Color, Size
--  FROM SalesLT.Product
--  WHERE ProductModelID = 1;

--  SELECT ProductNumber, Name
--  FROM SalesLT.Product
--  WHERE Color IN ('Black', 'Red', 'Write') AND Size IN ('S', 'M')

-- SELECT ProductNumber, Name 
-- FROM SalesLT.Product
-- WHERE ProductNumber LIKE 'BK-%'

SELECT ProductNumber, Name 
FROM SalesLT.Product
WHERE ProductNumber LIKE 'BK-[^R]%-[0-9][0-9]'
