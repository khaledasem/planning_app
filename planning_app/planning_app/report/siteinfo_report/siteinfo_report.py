# Copyright (c) 2013, khaled and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _

def execute(filters=None):
	columns, data = [], []
	# return columns, data
	return get_columns(), get_data(filters)


def get_data(filters):
	print(f"\n\n\n\n\n\n{filters}\n\n\n\n\n\n")

	# _from, to = filters.get('from'), filters.get('to')

	conditions = f" `tabWorking Sites`.site_name = tabWorking_Sectors.site_name "

	# conditions = f" ( creation BETWEEN '{_from}' AND '{to}') AND 1=1 "
	# if(filters.get('site_name')):conditions += f" AND site_name LIKE  '%{filters.get('site_name')}' "
	# if(filters.get('site_importance')):conditions += f" AND site_importance = '{filters.get('site_importance')}' "
	# if(filters.get('government2')):conditions += f" AND government2 = '{filters.get('government2')}' "
	# if(filters.get('construction_type')):conditions += f" AND construction_type = '{filters.get('construction_type')}' "
	# # if(filters.get('engineer_name')):conditions += f" AND engineer_name = '{filters.get('engineer_name')}' "
	# # if(filters.get('contract_by')):conditions += f" AND contract_by = '{filters.get('contract_by')}' "
	# # if(filters.get('delivered_to_name')):conditions += f" AND delivered_to_name = '{filters.get('delivered_to_name')}' "
	# if(filters.get('evaluate')):conditions += f" AND evaluate = '{filters.get('evaluate')}' "
	print(f"\n\n\n\n\n\n{conditions}\n\n\n\n\n\n")
	data = frappe.db.sql(f"""SELECT `tabWorking Sites`.site_name, `tabWorking Sites`.site_name_arabic, `tabWorking Sites`.site_code,
		# location
		`tabWorking Sites`.longitude, `tabWorking Sites`.latitude, `tabWorking Sites`.altitude,`tabWorking Sites`.zone, `tabWorking Sites`.city, `tabWorking Sites`.district, 
		`tabWorking Sites`.area_name, `tabWorking Sites`.lac, `tabWorking Sites`.lacdec,
	 	# IDs
	 	# base_id, bts_id, cell_id, do_cell_id, cell_idhex
	 	tabWorking_Sectors.site_name,tabWorking_Sectors.sector_id, tabWorking_Sectors.sector_name 

		FROM  `tabWorking Sites`, tabWorking_Sectors
		WHERE  {conditions};""")
	# WHERE ( survey_date BETWEEN {_from} AND {to}
	return data


def get_columns():
	return [
		
			"Site Name:Data:100",
			"اسم الموقع:Data:100",
			"Site Code :Data:90",

			# location -----------------
			"Longitude :Data:90",
			"Latitude :Data:90",
			"Altitude :Data:90",

			"Zone :Data:90",
			"المحافظة :Data:90",
			"المديرية :Data:90",
			"المنطقة :Data:90",
			"LAC :Data:90",
			"LAC (Dec) :Data:90",
			# -------------------------

			"Site Name in sce:Data:90",
			"Sector ID :Data:90",
			"Sector Name :Data:90",


			
			
			# "حالة الموقع في المشاريع:Select/[ '', 'جاري اعداد الوثيقة', 'تم التسليم للمقاول','جاهز مدنيا','جاهز فنيا','تعرقل بسبب مشاكل']:170",
			# "هل تم مسح بديل:Select/[ '', 'Yes']",
			# "اهمية الموقع:Select/[ '', 'A', 'B', 'C' ]:100",

			# "Zone:Data:60",
			# "المحافظة:Link/govern1:100",
			# "المديرية:Link/Modiriat:100",
			# "المنطقة:Data:100",

			# "Area Type:Select/[ '', 'Urban', 'Suburban', 'Rural' ]:100",

			# "Operators in the location:Data:100",
			# "خلايا شمسية:Select/[ '', 'نعم', 'لا' ]:100",

			# "BSC Name :Link/BSCs:100",
			# "BTS Vendor :Select/[ '', 'HW', 'ZTE']:100",

			# "Transmission Type :Select/[ '', 'Fiber','Microwave']:100",
			# "Nearest Link :Data:105",

			# "نوع الإنشاء :Select/[ '', 'جديد', 'إعادة تأهيل']:100",
			
			# "Support Type:Data:130",
			# "Tower Height (m):Data:120",
			# "Building Height (m):Data:130",

			# "Number of Sector:Data:130",

			# "Azimuth:Data:130",
			# "Tilt:Data:130",
			# "Antenna Height:Data:130",
			# "Antenna HBW:Data:130",
			# "Antenna VBW:Data:130",


			# ----------------------------------------------

			# "Evaluation :Select/[ '', 'Yes', 'Resurvey']:100",

			
		
			

# .-----------------------------------------------

	]
		
		


