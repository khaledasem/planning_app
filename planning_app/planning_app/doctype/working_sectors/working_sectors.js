// Copyright (c) 2021, khaled asem and contributors
// For license information, please see license.txt

frappe.ui.form.on('Working_Sectors', {
	refresh: function(frm) {
		let number = 67;
		let hexStr = number.toString(16);
		console.log(hexStr);
	},




		//-------------- -------------------------------------------------------------------------
	sector_id: function(frm){
		if( frm.doc.site_name ){
			frm.doc.sector_name = frm.doc.site_name  + '_' + frm.doc.sector_id 
			frm.refresh_field('sector_name');
		}
		
	},
   //---------------------------------------End----------------------------------------------





   	//-------------- -------------------------------------------------------------------------
	antenna_vendor: function(frm){
		frm.set_df_property('antenna_model', 'hidden', 0)

		frm.set_query("antenna_model", function(){
					return {
						"filters": {
						"antenna_vendor": frm.doc.antenna_vendor
						}
					};
				}),
		frm.doc.antenna_model=''
		frm.refresh_field('antenna_model');

	},
   //---------------------------------------End----------------------------------------------



   	//-------------- -------------------------------------------------------------------------
	antenna_model: function(frm){
		// frm.set_df_property('antenna_model', 'hidden', 0)
		// frm.doc.antenna_hor_beamwidh = 
		// frm.doc.antenna_ver_beamwidh = 
		// frm.doc.antenna_gaindbi = 
		// frm.doc.electric_tilt = 

	}
   //---------------------------------------End----------------------------------------------

});


// select `tabWorking Sites`.city, tabWorking_Sectors.sector_name  from `tabWorking Sites`, tabWorking_Sectors where `tabWorking Sites`.site_name = tabWorking_Sectors.site_name;


