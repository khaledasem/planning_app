import frappe

def get_data_from_db(element_var, table_name_var, conditions_var):
	return frappe.db.sql(f"""SELECT {element_var} FROM {table_name_var} WHERE {conditions_var};""", as_dict = True)