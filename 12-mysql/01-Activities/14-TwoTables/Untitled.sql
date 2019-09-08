SELECT department_id, deparments.department_name, over_head_costs, product_sales, 
(product_sales - over_head_costs) as total_profit 
FROM departments, products
WHERE department.department_name = products.department_name;

SELECT deparment_name.departments FROM departments;