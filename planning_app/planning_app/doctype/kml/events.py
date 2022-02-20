import frappe
from lxml import etree
from frappe.utils.file_manager import upload, save_file,  add_attachments, download_file

def validate(doc, event):
	frappe.throw("HOOOOOOOOOOOK")
	console.log("HOOOOOOOOOks")

@frappe.whitelist()
def upload_image(doctype, docname, filename, is_private, filedata, docfield,folder):
	# upload()
	# f = save_file(filename, filedata, doctype, docname, folder, 'decode_base64', is_private, docfield)
	f = download_file(filename)
    # if docfield and doctype:
    #     doc.set(docfield, f.file_url)
    #     doc.save()
	# update_image_to_field(doctype,docname,docfield)
	return f