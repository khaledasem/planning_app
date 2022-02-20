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
	# print(f"\n\n\n\n\n\n{filters}\n\n\n\n\n\n")
	# ##############[role] = frappe.db.sql(f"""select role_profile_name from tabUser where name ="{frappe.session.user}";""")
	_from, to = filters.get('from'), filters.get('to')

	conditions = f" ( creation BETWEEN '{_from}' AND '{to}') AND 1=1 "
	if(filters.get('site_name')):conditions += f" AND site_name LIKE  '%{filters.get('site_name')}' "
	if(filters.get('survey_code')):conditions += f" AND survey_code LIKE  '%{filters.get('survey_code')}' "
	if(filters.get('site_importance')):conditions += f" AND site_importance = '{filters.get('site_importance')}' "
	if(filters.get('government2')):conditions += f" AND government2 = '{filters.get('government2')}' "
	if(filters.get('construction_type')):conditions += f" AND construction_type = '{filters.get('construction_type')}' "
	if(filters.get('constr_site_status')):conditions += f" AND constr_site_status = '{filters.get('constr_site_status')}' "
	if(filters.get('engineer_name')):conditions += f" AND engineer_name = '{filters.get('engineer_name')}' "
	if(filters.get('contract_by')):conditions += f" AND contract_by = '{filters.get('contract_by')}' "
	if(filters.get('delivered_to_name')):conditions += f" AND delivered_to_name = '{filters.get('delivered_to_name')}' "
	# if frappe.session.user == 'Administrator' or role[0] == 'Planning User' or role[0] =='Planning Manager User':
	# 	if(filters.get('evaluate')):conditions += f" AND evaluate = '{filters.get('evaluate')}' "
	# else:
	# 	conditions += f" AND evaluate = 'OK' "
	
	if(filters.get('is_replaced')):conditions += f" AND is_replaced = '{filters.get('is_replaced')}' "
	print(f"\n\n\n\n\n\n{conditions}\n\n\n\n\n\n")
	data = frappe.db.sql(f"""SELECT  survey_code,site_name, site_name_arabic,longitude,latitude, constr_site_status,is_replaced,site_importance, zone,government2,modairiah,area_name,
		area_type,company_in_the_site,sun_plate,bsc_name,bts_vendor, transmission_type, nearest_link_site_name,
		engineer_notes, construction_type,tower_type_concat,tower_pole_height, building_height,
		number_of_sectors, azimuth_concat, tilt_concat, antenna_height_concat,antenna_hbw_concat, antenna_vbw_concat,
		# owner data
		owner_name,owner_phone,owner_address,
		# contractor data
		contract_by,contracted_by_phone,contract_note,contract_date,
		# contract info
		choice_contracted, area_contracted, road_to_site_ready, elect_generator_place, elect_generator_area, general_elect_available, elect_off_time,
		# planning eng data
		engineer_name, engineer_phone, survey_date,
		# civil eng
		delivered_to_name, delivered_to_phone, delivery_date, civil_problem_detailes, civil_notes,miqawil_name




		FROM tabSurveySites2
		WHERE  {conditions};""")
	# WHERE ( survey_date BETWEEN {_from} AND {to}
	return data


def get_columns():
	return [
			"Survey Code:Data:105",
			"Site Name:Data:100",
			"اسم الموقع:Data:100",
			
			"Longitude :Data:90",
			"Latitude :Data:90",
			"حالة الموقع في المشاريع:Select/[ '', 'جاري اعداد الوثيقة', 'تم التسليم للمقاول','جاهز مدنيا','جاهز فنيا','تعرقل بسبب مشاكل']:170",
			"هل تم مسح بديل:Select/[ '', 'Yes']",
			"اهمية الموقع:Select/[ '', 'A', 'B', 'C' ]:100",

			"Zone:Data:60",
			"المحافظة:Link/govern1:100",
			"المديرية:Link/Modiriat:100",
			"المنطقة:Data:100",

			"Cell Type:Select/[ '', 'Urban', 'Suburban', 'Rural' ]:100",

			"Operators in the location:Data:100",
			"خلايا شمسية:Select/[ '', 'نعم', 'لا' ]:100",

			"BSC Name :Link/BSCs:100",
			"BTS Vendor :Select/[ '', 'HW', 'ZTE']:100",

			"Transmission Type :Select/[ '', 'Fiber','Microwave']:100",
			"Nearest Link :Data:105",

			"نوع الإنشاء :Select/[ '', 'جديد', 'إعادة تأهيل']:100",
			
			"ملاحظات مهندس التخطيط:Data:130",

			"Support Type:Data:130",
			"Tower Height (m):Data:120",
			"Building Height (m):Data:130",

			"Number of Sector:Data:130",

			"Azimuth:Data:130",
			"Tilt:Data:130",
			"Antenna Height:Data:130",
			"Antenna HBW:Data:130",
			"Antenna VBW:Data:130",

			# owner info
			"اسم المالك:Data:130",
			"رقم المالك:Data:130",
			"عنوان المالك:Data:130",

			# conctractor
			"اسم المتعاقد:Data:130",
			"رقم رقم المتعاقد:Data:130",
			"ملاحظات المتعاقد:Data:130",
			"تاريخ التعاقد:Data:130",


			# contract info
			 # general_elect_available, elect_off_time
			"رقم الخيار المتعاقد علية:Data:130",
			"المساحه  المتعاقد عليها:Data:130",
			"جاهزية الطريق للموقع:Data:130",
			"مكان المولد:Data:130",
			"المساحة المتوفرة للمولد:Data:130",
			"توفر كهرباء عمومية :Data:130",
			"عدد ساعات الانطفاء:Data:130",

			# planning eng data
			"اسم مهندس التخطيطt:Data:130",
			"تلفون مهندس التخطيط:Data:130",
			"تاريخ المسح:Data:130",


			# civil eng
			"اسم  المستلم من المشاريع:Data:130",
			"تلفون المستلم:Data:130",
			"تاريخ التسليم:Data:130",
			"تفاصيل الاشكالية:Data:130",
			"ملاحظات المشاريع:Data:130",
			"اسم المقاول:Data:130",
			# "Antenna HBW:Data:130",
			# "Antenna VBW:Data:130",


			# ----------------------------------------------

			# "Evaluation :Select/[ '', 'Yes', 'Resurvey']:100",

			
		
		\

		
			# "حالة العقد:Select/['', 'Successful', 'In Progress', 'Failed' ]:100",
			
			# "اسم المهندس:Data:100",
			# "رقم المهندس:Data:100",
			# "ملاحظات المهندس:Data:140",
			# "تاريخ المسح:Data:100",

			# "اسم المستلم:Data:100",
			# "رقم المستلم:Data:100",
			
			# "تاريخ التسليم:Data:100",

			# "اسم المتعاقد:Data:100",
			# "تلفون المتعاقد:Data:110",
			# "ملاحظات المتعاقد:Data:150",
			
			# "تاريخ التعاقد:Data:100",
			# "اسم المالك:Data:100",
			# "رقم المالك:Data:100",
			# "عنوان المالك:Data:100",	

			# "BSC Name:Link/BSCs:100",
			# "BTS Vendor:Select/[ '', 'HW', 'ZTE']:100",
			# "Transmission Type :Select/[ '', 'Fiber', 'Microwave']:100",
			# "Nearest Link Site:Data:130",
			
			# "أسماء الشركات الموجودة في الموقع :Data:130",

			# "Number of Sectors:Select/[ '', '1', '2','3','4']:100",


			# "Azimuth1:Data:100"
			# "Tilt1:Data:100"
			# "Antenna HBW1:Data:100"
			# "Antenna VBW1:Data:100"

			
			

# .-----------------------------------------------

	]
		
		


