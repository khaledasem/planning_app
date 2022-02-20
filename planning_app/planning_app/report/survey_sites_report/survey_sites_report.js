// Copyright (c) 2016, khaled and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Survey Sites Report"] = {
	"filters": [
	{
			"fieldname": "survey_code",
			"label": __("Survey Code"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "site_name",
			"label": __("Site Name"),
			"fieldtype": "Data",
			"width": 100,
			"reqd": 0,
		},
		{
			"fieldname": "from",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_start()
		},
		{
			"fieldname": "to",
			"label": __("To Date"),
			"fieldtype": "Date",
			"width": 80,
			"reqd": 1,
			"default": dateutil.year_end()
		},
		{
			"fieldname": "government2",
			"label": __("المحافظة"),
			"fieldtype": "Link",
			"options": "govern1",
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "site_importance",
			"label": __("أهمية الموقع"),
			"fieldtype": "Select",
			"options": [ '', 'A', 'B', 'C' ],
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "construction_type",
			"label": __("نوع الإنشاء"),
			"fieldtype": "Select",
			"options": [ '', 'جديد', 'إعادة تأهيل' ],
			"width": 80,
			"reqd": 0,
			
		},
		{
			"fieldname": "constr_site_status",
			"label": __("حالة الموقع في المشاريع"),
			"fieldtype": "Select",
			"options": [ '', 'جاري اعداد الوثيقة', 'تم التسليم للمقاول','جاهز مدنيا','جاهز فنيا','تعرقل بسبب مشاكل'],
			"width": 200,
			"reqd": 0,
			
		},
		
		{
		 	"fieldname": "engineer_name",
			"label": __("مهندس التخطيط"),
			"fieldtype": "Link",
			"options": "engineer",
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		 {
		 	"fieldname": "delivered_to_name",
			"label": __("اسم المستلم"),
			"fieldtype": "Link",
			"options": "contractor",
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		  {
		 	"fieldname": "contract_by",
			"label": __("اسم المتعاقد"),
			"fieldtype": "Link",
			"options": "contractor",
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		  {
		 	"fieldname": "evaluate",
			"label": __("Evaluation"),
			"fieldtype": "Select",
			"options": ['','OK', 'Resurvey'],
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		  {
		 	"fieldname": "is_replaced",
			"label": __("هل تم مسح بديل"),
			"fieldtype": "Select",
			"options": ['','Yes'],
		 	"width": 80,
		 	"reqd": 0,
			
		 },
		  

	],
	"formatter": function(value, row, column, data, default_formatter) {
	 	value = default_formatter(value, row, column, data);
	 	// Insert your formatting code
	 	 // msgprint(column.id)
	 	// msgprint(data.contract_status)
	 	if (column.id == "حالة_الموقع_في_المشاريع") {
	 		// msgprint('++++++++++++++++++++++++')
    //         msgprint(data.حالة_الموقع_في_المشاريع)
			let contract_status_h = data.حالة_الموقع_في_المشاريع

	
            if(contract_status_h=="جاري اعداد الوثيقة"){
                 value = "<span style='color:blue;font-weight:bold'>" + value + "</span>";
            }else if(contract_status_h == "تم التسليم للمقاول"){
                 value = "<span style='color:blue ;font-weight:bold'>" + value + "</span>";
            } else if(contract_status_h=="جاهز مدنيا"){
                 value = "<span style='color: green;font-weight:bold'>" + value + "</span>";
            
            } else if(contract_status_h=="جاهز فنيا"){
                value = "<span style='color: green;font-weight:bold'>" + value + "</span>";
            
            } else if(contract_status_h=="تعرقل بسبب مشاكل"){
                value = "<span style='color: red;font-weight:bold'>" + value + "</span>";
            } 
                      // msgprint(data.site_importance)

         }


        return value
     }
};
