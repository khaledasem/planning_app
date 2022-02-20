import frappe

@frappe.whitelist()
def get_government_info(city):

	return frappe.db.sql(f"""SELECT * FROM tabgovern1 WHERE name1='{city}';""", as_dict = True)

@frappe.whitelist()
def set_last_code(name, last_code):
	doc = frappe.get_doc('govern1', name)
	doc.last_code = last_code
	doc.save()
	return 'r'

@frappe.whitelist()
def set_is_replaced_of_old_site(old_sitename):

	frappe.db.set_value('NewSites', old_sitename, 'is_replaced', 'Yes')
	# doc = frappe.get_doc('newsites', old_site_name)
	# doc = frappe.get_doc({
 #    'doctype': 'NewSites',
 #    'name': old_site_name
	# })
	# doc.is_replaced = 'Yes'
	# doc.save()
	return 'r'
@frappe.whitelist()
def check_api():

	return frappe.db.sql(f"""SELECT * FROM tabgovern1 ;""", as_dict = True)

@frappe.whitelist()
def getUserInfo_api():
	# [user_info] = frappe.db.sql(f"""select full_name, phone from tabUser where name ="{frappe.session.user}";""")
	# frappe.msgprint(_(f"user is: {[user_info]}, role is {role[0]}"))
	return frappe.db.sql(f"""select full_name, phone, role_profile_name from tabUser where name ="{frappe.session.user}";""")


