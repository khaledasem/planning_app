// Copyright (c) 2022, khaled asem and contributors
// For license information, please see license.txt

frappe.ui.form.on('New_Sector_order', {
	// refresh: function(frm) {

	// }






	//-------------- -------------------------------------------------------------------------
	site_name: function(frm){
		 // ----------------------------- get doc by name
			frappe.db.get_doc('Working Sites', frm.doc.site_name )
	   		 .then(doc => {
	   		 	console.log(doc.site_name_arabic)
	        	frm.doc.site_name_arabic =doc.site_name_arabic
	        	frm.doc.city =doc.city
	        	 frm.refresh_field('site_name_arabic');
	        	  frm.refresh_field('city');
	    	});


	   		frappe.db.get_list('Working_Sectors', {
	    		fields: ['site_name', 'sector_id'],
			    filters: {
			        site_name: frm.doc.site_name
			    }
			}).then(records => {
			    console.log(records);
			    frm.doc.number_of_current_sectors =records.length
			    frm.doc.new_sector_no=records.length
			    frm.doc.sector_name = frm.doc.site_name + "_" + frm.doc.new_sector_no
			     frm.refresh_field('number_of_current_sectors');
			     frm.refresh_field('new_sector_no');
			     frm.refresh_field('sector_name');

			})


	   		
		
	}
	//---------------------------------------End----------------------------------------------



   
});
