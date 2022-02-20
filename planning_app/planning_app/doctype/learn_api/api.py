# Copyright (c) 2021, khaled and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import requests
import base64

@frappe.whitelist(allow_guest=True)
def get_func():
	encoded = base64.b64encode("{}:{}".format('administrator','khaled135').encode())
	# t = "Basic %s" % base64.b64encode(':khaled135')
	headers = {'Authorization': "Basic %s" % base64.b64encode("administrator:khaled135").encode()}
	url="http://localhost:8001/api/method/planning_app.planning_app.doctype.newsites.myapi.check_api" # , params = PARAMS
	# url = "http://localhost:8001/api/method/frappe.auth.administrator"
	r = requests.request("GET", url, headers=headers)
	return r.json()

@frappe.whitelist(allow_guest=True)
def post_test(**kwargs):
	#pack your parameters back into a dictionary
	kwargs=frappe._dict(kwargs)
	#auth into erp site
	#use built-in api or other method to add the customer
	# make post to URL: http://xxx.xxx.xxx/api/resource/Customer?data=kwargs