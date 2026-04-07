#  Zeerostock Inventory System

A full-stack inventory management and search system that allows users to search products, manage suppliers, and view inventory data.

---

##  Features

###  Inventory Search (Part A)
- Search products by name (partial match)
- Filter by category
- Filter by price range (min & max)
- Case-insensitive search
- Combine multiple filters
- Handles edge cases:
  - Empty search
  - Invalid price range
  - No results found

###  Inventory Database (Part B)
- Create suppliers
- Add inventory items
- Validate:
  - Supplier must exist
  - Quantity ≥ 0
  - Price > 0
- Fetch inventory grouped by supplier
- Sorted by total inventory value (quantity × price)

---

##  Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Database:** SQLite  

---


