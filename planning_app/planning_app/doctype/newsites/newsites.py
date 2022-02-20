# Copyright (c) 2021, khaled and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class NewSites(Document):

	def validate(self):
		try:
			frappe.db.sql("""Select * FROM tabNewSites; """)
		except Exception as e:
			frappe.msgprint(f"An error occured. <b> Please contact your admin </b>")
			frappe.log_error(frappe.get_traceback(), f"{e}")
