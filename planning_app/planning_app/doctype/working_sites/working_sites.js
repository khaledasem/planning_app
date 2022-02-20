// Copyright (c) 2021, khaled asem and contributors
// For license information, please see license.txt

frappe.ui.form.on('Working Sites', {

	//====================================================  refresh ==================================================================

	refresh: function(frm) {

		//---- ---------hide district if empty --------------------
		// if(frm.doc.district==' '){
		// 	frm.set_df_property('district', 'hidden', 1)
		// 	frm.set_df_property('area', 'hidden', 1)
		// } else{
		// 	frm.set_df_property('district', 'hidden', 0)
		// 	frm.set_df_property('area', 'hidden', 0)
		// }
		// frm.refresh_field('district');
		// frm.refresh_field('area');
		//--------------------------------------------------------

		frm.show_hide_bsc_msc_info(frm);

	},
	//==================================================== end refresh ==================================================================




	//==================================================== setup ==================================================================
	setup: function(frm){
		frm.show_hide_bsc_msc_info = function(frm){

			if (frm.doc.bsc_name) {
				frm.set_df_property('bsc_ip_address', 'hidden', '0')
				frm.set_df_property('mgw', 'hidden', '0')
				frm.set_df_property('msc_name', 'hidden', '0')
				frm.set_df_property('msc_id', 'hidden', '0')


				// ----------------------------- get doc by name--------------------
				frappe.db.get_doc('BSCs', frm.doc.bsc_name)
		   		 .then(doc => {
		   		 console.log(doc.name)
		   		  console.log(doc.bsc_ip_adress)
		        	frm.doc.bsc_ip_address = doc.bsc_ip_adress;
					frm.doc.mgw = doc.mgw;
					frm.doc.msc_name = doc.msc_name;
					frm.doc.msc_id =  doc.msc_id;
					
					frm.refresh_field('bsc_ip_address');
					frm.refresh_field('mgw');
					frm.refresh_field('msc_name');
					frm.refresh_field('msc_id');
		    	});
		   		 //-------------------------------------------------------------------

			

			} else {
				frm.set_df_property('bsc_ip_address', 'hidden', '1')
				frm.set_df_property('mgw', 'hidden', '1')
				frm.set_df_property('msc_name', 'hidden', '1')
				frm.set_df_property('msc_id', 'hidden', '1')

				frm.doc.bsc_ip_address = ''
				frm.doc.mgw = ''
				frm.doc.msc_name = ''
				frm.doc.msc_id = ''
					
			}
			frm.refresh_field('bsc_ip_address');
			frm.refresh_field('mgw');
			frm.refresh_field('msc_name');
			frm.refresh_field('msc_id');
		}

	},
	//==================================================== end setup ==================================================================


	
 


//==================================================== on click functions==================================================================

 	//-------------- -------------------------------------------------------------------------
	cell_id: function(frm){
		let cellid = frm.doc.cell_id
		// console.log(cellid)
		frm.doc.cell_idhex = cellid.toString(16)
		frm.refresh_field('cell_idhex');
	},
   //---------------------------------------End----------------------------------------------





		//-------------- -------------------------------------------------------------------------
	city: function(frm){
		frm.set_df_property('area', 'hidden', 0)

		frm.set_query("district", function(){
					return {
						"filters": {
						"government": frm.doc.city
						}
					};
				}),
		frm.doc.district=''
		frm.doc.area=''
		frm.refresh_field('district');
		frm.refresh_field('area');

	},
   //---------------------------------------End----------------------------------------------

	//-------------- -------------------------------------------------------------------------
	bts_vendor: function(frm){
		frm.set_df_property('bts_type', 'hidden', 0)

		frm.set_query("bts_type", function(){
					return {
						"filters": {
						"bts_vendor": frm.doc.bts_vendor
						}
					};
				}),
		frm.doc.bts_type=''
		frm.refresh_field('bts_type');

	},
   //---------------------------------------End----------------------------------------------


   bsc_name: function(frm){
  		frm.show_hide_bsc_msc_info(frm);
   }


	//==================================================== end on click functions==================================================================

});
