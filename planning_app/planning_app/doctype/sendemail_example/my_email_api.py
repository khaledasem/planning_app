# Copyright (c) 2021, khaled and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

@frappe.whitelist()
def send_email(doc, recipients, msg, title):
	email_args = {
		'recipients': recipients,
		'message': msg,
		'subject': title,
		# 'reference_doctype': doc.doctype,
		# 'reference_name': doc.docname
		}
	# if attachments: email_args['attachments']=attachments

	frappe.enqueue(method=frappe.sendmail, queue='short', timeout=300, **email_args)
	return 'r'