// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('SurveySites2', {

	//=============================================== Setupfunc =============================================================
	setup: function(frm){

		
		//************************ Filter contracted sites *************************************************
		frm.set_query("contracted_sitename", function(){
			return {
				"filters": [
					["NewSites", "contract_status", "=", "تم توقيع العقد"],
					["NewSites", "is_delivered", "!=", "Yes"]
				]
			}
		}),
		//************************ Filter contracted sites *************************************************





		frm.Role_profile_function = function(frm){

			var variab = ''
			// console.log('lllllllllllllllll')

			frm.call({
				method: "planning_app.planning_app.doctype.surveysites2.survey_api.getUserInfo_api",
				callback: function(r){
					
			  		// frm.doc.role_user =  r.message[0][2]
			  		variab  =  r.message[0][2]

			  	

					if(frappe.user.name !='Administrator'){
						if(variab != 'Planning Manager User' ){
							frm.set_df_property('evaluate', 'read_only', 1)
							frm.set_df_property('evaluation_note', 'read_only', 1)
						}

						if(variab == 'Planning Manager User' || variab == 'Planning User' ){
							console.log('hhhhhhhhhhhhher')
							frm.doc.engineer_name =  r.message[0][0]
					  		frm.doc.engineer_phone =  r.message[0][1]
					  		frm.refresh_field('engineer_name');
					  		frm.refresh_field('engineer_phone');

					  		frm.set_df_property('constr_site_status', 'read_only', 1)
						 	frm.set_df_property('miqawil_name', 'read_only', 1)
						 	frm.set_df_property('civil_problem_detailes', 'read_only', 1)
						 	frm.set_df_property('civil_notes', 'read_only', 1)


						} else{

							frm.set_df_property('evaluate_section', 'hidden', 1)

					 		frm.set_df_property('construction_type', 'read_only', 1)
					 		frm.set_df_property('contracted_sitename', 'read_only', 1)
					 		frm.set_df_property('site_name_reconstruct', 'read_only', 1)
					 		frm.set_df_property('site_name', 'read_only', 1)
					 		frm.set_df_property('site_name_arabic', 'read_only', 1)
					 		frm.set_df_property('site_importance', 'read_only', 1)
					 		frm.set_df_property('government2', 'read_only', 1)
					 		frm.set_df_property('modairiah', 'read_only', 1)
					 		frm.set_df_property('area_name', 'read_only', 1)
					 		frm.set_df_property('area_type', 'read_only', 1)
					 		frm.set_df_property('sun_plate', 'read_only', 1)
					 		frm.set_df_property('longitude', 'read_only', 1)
					 		frm.set_df_property('latitude', 'read_only', 1)

					 		frm.set_df_property('engineer_name', 'read_only', 1)
					 		frm.set_df_property('engineer_phone', 'read_only', 1)
					 		frm.set_df_property('survey_date', 'read_only', 1)
					 		frm.set_df_property('engineer_notes', 'read_only', 1)

					 		frm.set_df_property('ptc_check', 'read_only', 1)
					 		frm.set_df_property('sapafon_check', 'read_only', 1)
					 		frm.set_df_property('mtn_check', 'read_only', 1)
					 		frm.set_df_property('y_check', 'read_only', 1)

					 		frm.set_df_property('tower_type', 'read_only', 1)
					 		frm.set_df_property('specify_others', 'read_only', 1)
					 		frm.set_df_property('number_of_poles', 'read_only', 1)
					 		frm.set_df_property('number_of_rooms', 'read_only', 1)
					 		frm.set_df_property('sharing_tower_with', 'read_only', 1)
					 		frm.set_df_property('building_height', 'read_only', 1)
					 		frm.set_df_property('tower_pole_height', 'read_only', 1)
					 		frm.set_df_property('number_of_sectors', 'read_only', 1)

					 		frm.set_df_property('bsc_name', 'read_only', 1)
					 		frm.set_df_property('bts_vendor', 'read_only', 1)
					 		frm.set_df_property('lac', 'read_only', 1)
					 		frm.set_df_property('transmission_type', 'read_only', 1)
					 		frm.set_df_property('nearest_link_site', 'read_only', 1)
					 		frm.set_df_property('nearest_link_site_name', 'read_only', 1)

					 		frm.set_df_property('enb_vendor', 'read_only', 1)
					 		frm.set_df_property('epc_name', 'read_only', 1)
					 		frm.set_df_property('tac', 'read_only', 1)
					 		frm.set_df_property('mimo', 'read_only', 1)

					 		frm.set_df_property('planned__lte_bands', 'read_only', 1)

					 		frm.set_df_property('azimuth1', 'read_only', 1)
					 		frm.set_df_property('antenna_type1', 'read_only', 1)
					 		frm.set_df_property('x_cnfg1', 'read_only', 1)
					 		frm.set_df_property('tilt1', 'read_only', 1)
					 		frm.set_df_property('do_cnfg1', 'read_only', 1)
					 		frm.set_df_property('antenna_height1', 'read_only', 1)


					 		frm.set_df_property('azimuth2', 'read_only', 1)
					 		frm.set_df_property('antenna_type2', 'read_only', 1)
					 		frm.set_df_property('x_cnfg2', 'read_only', 1)
					 		frm.set_df_property('tilt2', 'read_only', 1)
					 		frm.set_df_property('do_cnfg2', 'read_only', 1)
					 		frm.set_df_property('antenna_height2', 'read_only', 1)


					 		frm.set_df_property('azimuth3', 'read_only', 1)
					 		frm.set_df_property('antenna_type3', 'read_only', 1)
					 		frm.set_df_property('x_cnfg3', 'read_only', 1)
					 		frm.set_df_property('tilt3', 'read_only', 1)
					 		frm.set_df_property('do_cnfg3', 'read_only', 1)
					 		frm.set_df_property('antenna_height3', 'read_only', 1)


					 		frm.set_df_property('azimuth4', 'read_only', 1)
					 		frm.set_df_property('antenna_type4', 'read_only', 1)
					 		frm.set_df_property('x_cnfg4', 'read_only', 1)
					 		frm.set_df_property('tilt4', 'read_only', 1)
					 		frm.set_df_property('do_cnfg4', 'read_only', 1)
					 		frm.set_df_property('antenna_height4', 'read_only', 1)

					 		
					 		frm.set_df_property('is_replaced', 'read_only', 1)


					 		if(variab != 'Civil Users'){
					 			frm.set_df_property('constr_site_status', 'read_only', 1)
						 		frm.set_df_property('miqawil_name', 'read_only', 1)
						 		frm.set_df_property('civil_problem_detailes', 'read_only', 1)
						 		frm.set_df_property('civil_notes', 'read_only', 1)
						 	

							}
						}
					
					}
			
				}
			})
	 		
		},

		//************************ Filter contracted sites *************************************************
		frm.chech_number_of_sectors = function(frm){
			if (frm.doc.number_of_sectors == '1') {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 1)
				frm.set_df_property('sec_brk_sector3', 'hidden', 1)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)

				// -- set mandatory field
				frm.set_df_property('azimuth1', 'reqd', 1)
				frm.set_df_property('tilt1', 'reqd', 1)
				frm.set_df_property('antenna_height1', 'reqd', 1)
				frm.set_df_property('antenna_type1', 'reqd', 1)
				frm.set_df_property('x_cnfg1', 'reqd', 1)
				frm.set_df_property('do_cnfg1', 'reqd', 1)

				frm.set_df_property('azimuth2', 'reqd', 0)
				frm.set_df_property('tilt2', 'reqd', 0)
				frm.set_df_property('antenna_height2', 'reqd', 0)
				frm.set_df_property('antenna_type2', 'reqd', 0)
				frm.set_df_property('x_cnfg2', 'reqd', 0)
				frm.set_df_property('do_cnfg2', 'reqd', 0)

				frm.set_df_property('azimuth3', 'reqd', 0)
				frm.set_df_property('tilt3', 'reqd', 0)
				frm.set_df_property('antenna_height3', 'reqd', 0)
				frm.set_df_property('antenna_type3', 'reqd', 0)
				frm.set_df_property('x_cnfg3', 'reqd', 0)
				frm.set_df_property('do_cnfg3', 'reqd', 0)

				frm.set_df_property('azimuth4', 'reqd', 0)
				frm.set_df_property('tilt4', 'reqd', 0)
				frm.set_df_property('antenna_height4', 'reqd', 0)
				frm.set_df_property('antenna_type4', 'reqd', 0)
				frm.set_df_property('x_cnfg4', 'reqd', 0)
				frm.set_df_property('do_cnfg4', 'reqd', 0)


			} else if (frm.doc.number_of_sectors == 2) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 1)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)

				// -- set mandatory field
				frm.set_df_property('azimuth1', 'reqd', 1)
				frm.set_df_property('tilt1', 'reqd', 1)
				frm.set_df_property('antenna_height1', 'reqd', 1)
				frm.set_df_property('antenna_type1', 'reqd', 1)
				frm.set_df_property('x_cnfg1', 'reqd', 1)
				frm.set_df_property('do_cnfg1', 'reqd', 1)

				frm.set_df_property('azimuth2', 'reqd', 1)
				frm.set_df_property('tilt2', 'reqd', 1)
				frm.set_df_property('antenna_height2', 'reqd', 1)
				frm.set_df_property('antenna_type2', 'reqd', 1)
				frm.set_df_property('x_cnfg2', 'reqd', 1)
				frm.set_df_property('do_cnfg2', 'reqd', 1)

				frm.set_df_property('azimuth3', 'reqd', 0)
				frm.set_df_property('tilt3', 'reqd', 0)
				frm.set_df_property('antenna_height3', 'reqd', 0)
				frm.set_df_property('antenna_type3', 'reqd', 0)
				frm.set_df_property('x_cnfg3', 'reqd', 0)
				frm.set_df_property('do_cnfg3', 'reqd', 0)

				frm.set_df_property('azimuth4', 'reqd', 0)
				frm.set_df_property('tilt4', 'reqd', 0)
				frm.set_df_property('antenna_height4', 'reqd', 0)
				frm.set_df_property('antenna_type4', 'reqd', 0)
				frm.set_df_property('x_cnfg4', 'reqd', 0)
				frm.set_df_property('do_cnfg4', 'reqd', 0)

			} else if (frm.doc.number_of_sectors == 3) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 0)
				frm.set_df_property('sec_brk_sector4', 'hidden', 1)


				// -- set mandatory field
				frm.set_df_property('azimuth1', 'reqd', 1)
				frm.set_df_property('tilt1', 'reqd', 1)
				frm.set_df_property('antenna_height1', 'reqd', 1)
				frm.set_df_property('antenna_type1', 'reqd', 1)
				frm.set_df_property('x_cnfg1', 'reqd', 1)
				frm.set_df_property('do_cnfg1', 'reqd', 1)

				frm.set_df_property('azimuth2', 'reqd', 1)
				frm.set_df_property('tilt2', 'reqd', 1)
				frm.set_df_property('antenna_height2', 'reqd', 1)
				frm.set_df_property('antenna_type2', 'reqd', 1)
				frm.set_df_property('x_cnfg2', 'reqd', 1)
				frm.set_df_property('do_cnfg2', 'reqd', 1)

				frm.set_df_property('azimuth3', 'reqd', 1)
				frm.set_df_property('tilt3', 'reqd', 1)
				frm.set_df_property('antenna_height3', 'reqd', 1)
				frm.set_df_property('antenna_type3', 'reqd', 1)
				frm.set_df_property('x_cnfg3', 'reqd', 1)
				frm.set_df_property('do_cnfg3', 'reqd', 1)

				frm.set_df_property('azimuth4', 'reqd', 0)
				frm.set_df_property('tilt4', 'reqd', 0)
				frm.set_df_property('antenna_height4', 'reqd', 0)
				frm.set_df_property('antenna_type4', 'reqd', 0)
				frm.set_df_property('x_cnfg4', 'reqd', 0)
				frm.set_df_property('do_cnfg4', 'reqd', 0)

			} else if (frm.doc.number_of_sectors == 4) {
				frm.set_df_property('sec_brk_sector1', 'hidden', 0)
				frm.set_df_property('sec_brk_sector2', 'hidden', 0)
				frm.set_df_property('sec_brk_sector3', 'hidden', 0)
				frm.set_df_property('sec_brk_sector4', 'hidden', 0)

				// -- set mandatory field
				frm.set_df_property('azimuth1', 'reqd', 1)
				frm.set_df_property('tilt1', 'reqd', 1)
				frm.set_df_property('antenna_height1', 'reqd', 1)
				frm.set_df_property('antenna_type1', 'reqd', 1)
				frm.set_df_property('x_cnfg1', 'reqd', 1)
				frm.set_df_property('do_cnfg1', 'reqd', 1)

				frm.set_df_property('azimuth2', 'reqd', 1)
				frm.set_df_property('tilt2', 'reqd', 1)
				frm.set_df_property('antenna_height2', 'reqd', 1)
				frm.set_df_property('antenna_type2', 'reqd', 1)
				frm.set_df_property('x_cnfg2', 'reqd', 1)
				frm.set_df_property('do_cnfg2', 'reqd', 1)

				frm.set_df_property('azimuth3', 'reqd', 1)
				frm.set_df_property('tilt3', 'reqd', 1)
				frm.set_df_property('antenna_height3', 'reqd', 1)
				frm.set_df_property('antenna_type3', 'reqd', 1)
				frm.set_df_property('x_cnfg3', 'reqd', 1)
				frm.set_df_property('do_cnfg3', 'reqd', 1)

				frm.set_df_property('azimuth4', 'reqd', 1)
				frm.set_df_property('tilt4', 'reqd', 1)
				frm.set_df_property('antenna_height4', 'reqd', 1)
				frm.set_df_property('antenna_type4', 'reqd', 1)
				frm.set_df_property('x_cnfg4', 'reqd', 1)
				frm.set_df_property('do_cnfg4', 'reqd', 1)

			} else {

			}
			frm.refresh_field('sec_brk_sector1');
			frm.refresh_field('sec_brk_sector2');
			frm.refresh_field('sec_brk_sector3');
			frm.refresh_field('sec_brk_sector4');
			// console.log("check number of choice function");

			
		},

		//************************ Filter contracted sites *************************************************



		//************************ tower type*************************************************
		frm.check_tower_type = function(frm){
			// frm.doc.tower_pole_height1 = ''
			frm.set_df_property('tower_pole_height', 'hidden', 1)
				frm.set_df_property('building_height', 'hidden', 1)
				frm.set_df_property('number_of_poles', 'hidden', 1)
				frm.set_df_property('number_of_rooms', 'hidden', 1)
				frm.set_df_property('sharing_tower_with', 'hidden', 1)
				frm.set_df_property('specify_others', 'hidden', 1)

				frm.set_df_property('tower_pole_height', 'reqd', 0);
				frm.set_df_property('building_height', 'reqd', 0);
				frm.set_df_property('number_of_poles', 'reqd', 0);
				frm.set_df_property('number_of_rooms', 'reqd', 0);
				frm.set_df_property('sharing_tower_with', 'reqd', 0);
				frm.set_df_property('specify_others', 'reqd', 0);
			//--------------------
			if(frm.doc.tower_type == 'Rooms+Pole' || frm.doc.tower_type == 'Pole'){
				frm.set_df_property('tower_pole_height', 'label', 'Pole Height (m)')
			}else{
				frm.set_df_property('tower_pole_height', 'label', 'Tower Height (m)')
			}
			//---------------------------
			if (frm.doc.tower_type == 'Tower') {
				frm.doc.tower_type_concat = 'Tower';
				
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('tower_pole_height', 'reqd', 1)
			
			} 
			if (frm.doc.tower_type == 'Pole') {
				frm.set_df_property('number_of_poles', 'hidden', 0)
				frm.set_df_property('number_of_poles', 'reqd', 1)

				// hidden because it will be shown in number_of_pole event
				if(frm.doc.number_of_poles){
					frm.set_df_property('building_height', 'hidden', 0);
					frm.set_df_property('building_height', 'reqd', 1);
				}
				if(frm.doc.tower_pole_height){
					frm.set_df_property('tower_pole_height', 'hidden', 0)
					frm.set_df_property('tower_pole_height', 'reqd', 1)
				}
			
			} 
			if (frm.doc.tower_type == 'Rooms+Pole') {
				frm.set_df_property('number_of_rooms', 'hidden', 0)
				frm.set_df_property('number_of_rooms', 'reqd', 1)

				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('tower_pole_height', 'label', 'Pole Height (m)')
				frm.set_df_property('tower_pole_height', 'reqd', 1)
				
			} 
			
			if (frm.doc.tower_type == 'Sharing') {
				
				frm.set_df_property('sharing_tower_with', 'hidden', 0)
				frm.set_df_property('sharing_tower_with', 'reqd', 1)

			
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('tower_pole_height', 'reqd', 1)
				
				}

			if (frm.doc.tower_type == 'Others') {
				frm.set_df_property('specify_others', 'hidden', 0)
				frm.set_df_property('specify_others', 'reqd', 1)
		
				frm.set_df_property('tower_pole_height', 'hidden', 0)
				frm.set_df_property('tower_pole_height', 'reqd', 1)
			} 
				
			frm.set_df_property('tower_pole_height', 'read_only', 0)

			frm.refresh_field('tower_pole_height');
			frm.refresh_field('building_height');
			frm.refresh_field('number_of_poles');
			frm.refresh_field('number_of_rooms');
			frm.refresh_field('sharing_tower_with');
			frm.refresh_field('specify_others');

			frm.refresh_field('tower_type_concat');
			// if (frm.doc.tower_type == 'Tower') {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 0)
			// 	frm.set_df_property('building_height', 'hidden', 1)
			// 	frm.set_df_property('number_of_poles', 'hidden', 1)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 1)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 1)
			// 	frm.set_df_property('specify_others', 'hidden', 1)

			// 	frm.set_df_property('tower_pole_height', 'reqd', 1)
			// 	frm.set_df_property('building_height', 'reqd', 0)
			// 	frm.set_df_property('number_of_poles', 'reqd', 0)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 0)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 0)
			// 	frm.set_df_property('specify_others', 'reqd', 0)
			// 	// console.log("tower");

			// } else if (frm.doc.tower_type == 'Pole') {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 0)
			// 	frm.set_df_property('building_height', 'hidden', 0)
			// 	frm.set_df_property('number_of_poles', 'hidden', 0)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 1)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 1)
			// 	frm.set_df_property('specify_others', 'hidden', 1)
				
			// 	frm.set_df_property('tower_pole_height', 'reqd', 1)
			// 	frm.set_df_property('building_height', 'reqd', 1)
			// 	frm.set_df_property('number_of_poles', 'reqd', 1)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 0)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 0)
			// 	frm.set_df_property('specify_others', 'reqd', 0)

			// } else if (frm.doc.tower_type == 'Rooms+Pole') {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 0)
			// 	frm.set_df_property('building_height', 'hidden', 1)
			// 	frm.set_df_property('number_of_poles', 'hidden', 1)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 0)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 1)
			// 	frm.set_df_property('specify_others', 'hidden', 1)
			
			// 	frm.set_df_property('tower_pole_height', 'reqd', 1)
			// 	frm.set_df_property('building_height', 'reqd', 0)
			// 	frm.set_df_property('number_of_poles', 'reqd', 0)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 1)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 0)
			// 	frm.set_df_property('specify_others', 'reqd', 0)

			// } else if (frm.doc.tower_type == 'Sharing') {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 0)
			// 	frm.set_df_property('building_height', 'hidden', 1)
			// 	frm.set_df_property('number_of_poles', 'hidden', 1)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 1)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 0)
			// 	frm.set_df_property('specify_others', 'hidden', 1)
				
			// 	frm.set_df_property('tower_pole_height', 'reqd', 1)
			// 	frm.set_df_property('building_height', 'reqd', 0)
			// 	frm.set_df_property('number_of_poles', 'reqd', 0)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 0)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 1)
			// 	frm.set_df_property('specify_others', 'reqd', 0)
			// } else if (frm.doc.tower_type == 'Others') {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 0)
			// 	frm.set_df_property('building_height', 'hidden', 1)
			// 	frm.set_df_property('number_of_poles', 'hidden', 1)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 1)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 1)
			// 	frm.set_df_property('specify_others', 'hidden', 0)
					
			// 	frm.set_df_property('tower_pole_height', 'reqd', 1)
			// 	frm.set_df_property('building_height', 'reqd', 0)
			// 	frm.set_df_property('number_of_poles', 'reqd', 0)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 0)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 0)
			// 	frm.set_df_property('specify_others', 'reqd', 1)
			// } else {
			// 	frm.set_df_property('tower_pole_height', 'hidden', 1)
			// 	frm.set_df_property('building_height', 'hidden', 1)
			// 	frm.set_df_property('number_of_poles', 'hidden', 1)
			// 	frm.set_df_property('number_of_rooms', 'hidden', 1)
			// 	frm.set_df_property('sharing_tower_with', 'hidden', 1)
			// 	frm.set_df_property('specify_others', 'hidden', 1)

			// 	frm.set_df_property('tower_pole_height', 'reqd', 0)
			// 	frm.set_df_property('building_height', 'reqd', 0)
			// 	frm.set_df_property('number_of_poles', 'reqd', 0)
			// 	frm.set_df_property('number_of_rooms', 'reqd', 0)
			// 	frm.set_df_property('sharing_tower_with', 'reqd', 0)
			// 	frm.set_df_property('specify_others', 'reqd', 0)

			// }

		},
		//************************ end tower type*************************************************

		

		frm.Evaluat_Coordinate = function(frm,cord,name,type){
			var cord_n = 0;
			cord_n = Number(cord);
			if (isNaN( cord_n ) ) {
				frappe.throw(__('<b>' + name + '</b> must be a number!'));
			}
			if(type == 'lat'){
				if( ! frm.check_range(frm,cord_n,10.00,18.00)){
					frm,frm.doc.latitude='';
					frm.refresh_field('latitude');
					frappe.throw(__('<b>'+ name + '</b> must be between 10.000 and 18.000'));
					
				}
			}

			if(type == 'long'){
				if( ! frm.check_range(frm,cord_n,40.00,55.00)){
					frm,frm.doc.longitude='';
					frm.refresh_field('longitude');
					frappe.throw(__('<b>'+ name + '</b> must be between 40.000 and 55.000'));
					
				}
			}

		},
		frm.Evaluat_azimuth = function(frm,azimuth,name){
			var val_n = 0;
			val_n = Number(azimuth);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + name + '</b> must be a number'));
			} else if( ! frm.check_range(frm,val_n,0,359)){
				frappe.throw(__('Incorrect value in <b>'+ name + '</b>. Azimuth must be in range (0-359) '));
			}
		},
				
		frm.Evaluat_tilt = function(frm,tilt,name){
			var val_n = 0;
			val_n = Number(tilt);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + name + '</b> must be a number'));
			}
			if( ! frm.check_range(frm,val_n,0,15)){
				frappe.throw(__('Incorrect value in <b>'+ name + '</b>. Tilt must be in range (0-15) '));
			}
		},

		frm.Evaluat_antenna_height = function(frm,antenna_height,name){
			var val_n = 0;
			val_n = Number(antenna_height);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + name + '</b> must be a number'));
			}
			if( ! frm.check_range(frm,val_n,4,80)){
				frappe.throw(__('Incorrect value in <b>'+ name + '</b>. Antenna Height must be in range (4-80) m '));
			}
		},

		frm.Evaluat_tower_height = function(frm){
			var val = frm.doc.tower_pole_height;
			var val_n = 0;
			val_n = Number(val);
			// frappe.msgprint(val_n)
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Tower Height' + '</b> must be a number'));
			}

			if( ! frm.check_range(frm,val_n,15,80)){
				frappe.throw(__('Incorrect value in <b>'+ 'Tower Height' + '</b>. must be in range (15-80) m '));
			}
			
		},


		frm.Evaluat_pole_height = function(frm){
			var val = frm.doc.tower_pole_height;
			var val_n1 = 0;
			var val_n2 = 0;
			var val_n3 = 0;
			let pole_height = val.split(',');

			// console.log('ple h: '+ pole_height[0] + '-' +  pole_height[1])
			if(frm.doc.number_of_poles == '1'){
				val_n1 = Number(pole_height);
				if (isNaN( val_n1 ) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' + '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' + '</b>. must be in range (4-15) m '));
				}

			} else if(frm.doc.number_of_poles == '2'){
				val_n1 = Number(pole_height[0]);
				val_n2 = Number(pole_height[1]);
				if (isNaN( val_n1) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' + '</b> must be a number'));
				}
				if (isNaN( val_n2) ) {
					frappe.throw(__('<b>' + 'Pole(2) Height' + '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' + '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n2,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(2) Height' + '</b>. must be in range (4-15) m '));
				}
				
			} else if(frm.doc.number_of_poles == '3'){
				val_n1 = Number(pole_height[0]);
				val_n2 = Number(pole_height[1]);
				val_n3 = Number(pole_height[2]);
				if (isNaN( val_n1) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' + '</b> must be a number'));
				}
				if (isNaN( val_n2) ) {
					frappe.throw(__('<b>' + 'Pole(2) Height' + '</b> must be a number'));
				}
				if (isNaN( val_n3) ) {
					frappe.throw(__('<b>' + 'Pole(3) Height' + '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' + '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n2,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(2) Height' + '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n3,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(3) Height' + '</b>. must be in range (4-15) m '));
				}
			} 
			
		},
		frm.Evaluat_room_pole_height = function(frm){
			var val = frm.doc.tower_pole_height;
			var val_n = 0;
			
			val_n = Number(val);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Pole Height' + '</b> must be a number'));
			}
			if( ! frm.check_range(frm,val_n,4,15)){
				frappe.throw(__('Incorrect value in <b>'+ 'Pole Height' + '</b>.must be in range (4-15) m '));
			}
			
		},

		frm.Evaluat_building_height = function(frm){
			var val = frm.doc.building_height;
			var val_n = 0;
			
			val_n = Number(val);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Building Height' + '</b> must be a number'));
			}
			if( ! frm.check_range(frm,val_n,0,40)){
				frappe.throw(__('Incorrect value in <b>'+ 'Building Height' + '</b>.must be in range (0-40) m '));
			}
			
		},

		





		//************************ constr_site_status_onChange *************************************************
		frm.constr_site_status_onChange = function(frm){
			if(frm.doc.constr_site_status == 'جاري اعداد الوثيقة'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 1)
			} else if(frm.doc.constr_site_status == 'تم التسليم للمقاول'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'جاهز مدنيا'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'جاهز فنيا'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 1)
				frm.set_df_property('miqawil_name', 'hidden', 0)
			} else if(frm.doc.constr_site_status == 'تعرقل بسبب مشاكل'){
				frm.set_df_property('civil_problem_detailes', 'hidden', 0)
				frm.set_df_property('miqawil_name', 'hidden', 1)
			}
		},
		//************************ end constr_site_status_onChange *************************************************




		//************************ contract_status_onChange *************************************************
		frm.contract_status_onChange = function(frm) {
				if(frm.doc.contract_status == 'Successful'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 0)

					frm.set_df_property('area_contracted', 'hidden', 0)
					frm.set_df_property('road_to_site_ready', 'hidden', 0)
					frm.set_df_property('elect_generator_place', 'hidden', 0)
					frm.set_df_property('elect_generator_area', 'hidden', 0)
					frm.set_df_property('general_elect_available', 'hidden', 0)
					frm.set_df_property('elect_off_time', 'hidden', 0)

				} else if(frm.doc.contract_status == 'In Progress'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				} else if(frm.doc.contract_status == 'Failed'){
					frm.set_df_property('contract_failed_reason', 'hidden', 0)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				}

		},
		//************************ end contract_status_onChange *************************************************

		//************************construction_type_onChange *************************************************
		frm.order_type_= function(frm){
			
				if(frm.doc.construction_type == 'جديد'){
					//to be deleted after inserting old suevey 
					// frm.contracted_sitename_Onchange(frm);
					//--------------------------------------------
					frm.set_df_property('contracted_sitename', 'hidden', 0)
					frm.set_df_property('site_name_reconstruct', 'hidden', 1)

					frm.set_df_property('contracted_sitename', 'Mandatory', 1)

				} else if(frm.doc.construction_type == 'إعادة تأهيل'){
					frm.set_df_property('site_name_reconstruct', 'hidden', 0)
					frm.set_df_property('contracted_sitename', 'hidden', 1)

					frm.set_df_property('site_name_reconstruct', 'mandatory', 0)
				} else{
					frm.set_df_property('contracted_sitename', 'hidden', 1)
					frm.set_df_property('site_name_reconstruct', 'hidden', 1)

					
				}

		},
		//************************end construction_type_onChange *************************************************


		//************************ site_name_reconstruct_Onchange *************************************************
		frm.site_name_reconstruct_Onchange = function(frm){
			if(frm.doc.construction_type == 'إعادة تأهيل'){
				// console.log('site_name_reconstruct_______________: ' + frm.doc.site_name_reconstruct)
				if(frm.doc.site_name_reconstruct){
					// console.log('called')
					frm.set_df_property('ext_section', 'hidden', 0)
					frm.set_df_property('site_data_section', 'hidden', 0)
					frm.set_df_property('engineer_data_section', 'hidden', 0)
					frm.set_df_property('ext_section', 'hidden', 0)
					frm.set_df_property('site_config_section', 'hidden', 0)
					frm.set_df_property('sec_brk_enb_cfg', 'hidden', 0)
					frm.set_df_property('number_of_sectoin', 'hidden', 0)
					frm.set_df_property('evaluate_section', 'hidden', 0)
					frm.set_df_property('service_section', 'hidden', 0)
					frm.set_df_property('sec_brk_construction', 'hidden', 0)

					frm.set_df_property('another_operators_in_location_section', 'hidden', 0)
					frm.set_df_property('antenna_support_section', 'hidden', 0)

					frm.refresh_field('sec_brk_sector4');

					
				} else{
					console.log('else')
					frm.set_df_property('ext_section', 'hidden', 1)
					frm.set_df_property('site_data_section', 'hidden', 1)
					frm.set_df_property('engineer_data_section', 'hidden', 1)
					frm.set_df_property('ext_section', 'hidden', 1)
					frm.set_df_property('site_config_section', 'hidden', 1)
					frm.set_df_property('sec_brk_enb_cfg', 'hidden', 1)
					frm.set_df_property('number_of_sectoin', 'hidden', 1)
					
					frm.set_df_property('evaluate_section', 'hidden', 1)
					frm.set_df_property('service_section', 'hidden', 1)
					frm.set_df_property('sec_brk_construction', 'hidden', 1)

					frm.set_df_property('another_operators_in_location_section', 'hidden', 1)
					frm.set_df_property('antenna_support_section', 'hidden', 1)

					frm.set_df_property('sec_brk_sector1', 'hidden', 1)
					frm.set_df_property('sec_brk_sector2', 'hidden', 1)
					frm.set_df_property('sec_brk_sector3', 'hidden', 1)
					frm.set_df_property('sec_brk_sector4', 'hidden', 1)
				}
				
				
					frm.refresh_field('ext_section');
					frm.refresh_field('site_data_section');
					frm.refresh_field('engineer_data_section');
					frm.refresh_field('ext_section');
					frm.refresh_field('site_config_section');
					frm.refresh_field('sec_brk_enb_cfg');
					frm.refresh_field('number_of_sectoin');
					
					frm.refresh_field('evaluate_section');
					frm.refresh_field('service_section');
					frm.refresh_field('sec_brk_construction');

					frm.refresh_field('another_operators_in_location_section');
					frm.refresh_field('antenna_support_section');


					frm.refresh_field('sec_brk_sector1');
					frm.refresh_field('sec_brk_sector2');
					frm.refresh_field('sec_brk_sector3');
			}

		},
		//************************end site_name_reconstruct_Onchange *************************************************

		frm.check_range = function (frm,x, min, max) {
		    return ((x-min)*(x-max) <= 0);
		},

		//************************ contracted_sitename_Onchange *************************************************
		frm.contracted_sitename_Onchange = function(frm){
			if(frm.doc.construction_type == 'جديد'){
				if(frm.doc.contracted_sitename){
				// if(frm.doc.construction_type == 'جديد'){
					// console.log('contraaaaaaaacr: ' + frm.doc.contracted_sitename)
					frm.set_df_property('ext_section', 'hidden', 0)
					frm.set_df_property('site_data_section', 'hidden', 0)
					frm.set_df_property('engineer_data_section', 'hidden', 0)
					frm.set_df_property('ext_section', 'hidden', 0)
					frm.set_df_property('site_config_section', 'hidden', 0)
					
					frm.set_df_property('number_of_sectoin', 'hidden', 0)
					frm.set_df_property('sec_brk_enb_cfg', 'hidden', 0)
					frm.set_df_property('evaluate_section', 'hidden', 0)
					frm.set_df_property('service_section', 'hidden', 0)
					frm.set_df_property('sec_brk_construction', 'hidden', 0)
					frm.set_df_property('another_operators_in_location_section', 'hidden', 0)
					frm.set_df_property('antenna_support_section', 'hidden', 0)

				} else{
					frm.set_df_property('ext_section', 'hidden', 1)
					frm.set_df_property('site_data_section', 'hidden', 1)
					frm.set_df_property('engineer_data_section', 'hidden', 1)
					frm.set_df_property('ext_section', 'hidden', 1)
					frm.set_df_property('site_config_section', 'hidden', 1)
					frm.set_df_property('sec_brk_enb_cfg', 'hidden', 1)
					frm.set_df_property('number_of_sectoin', 'hidden', 1)
					
					frm.set_df_property('evaluate_section', 'hidden', 1)
					frm.set_df_property('service_section', 'hidden', 1)
					frm.set_df_property('sec_brk_construction', 'hidden', 1)

					frm.set_df_property('sec_brk_sector1', 'hidden', 1)
					frm.set_df_property('sec_brk_sector2', 'hidden', 1)
					frm.set_df_property('sec_brk_sector3', 'hidden', 1)
					frm.set_df_property('sec_brk_sector4', 'hidden', 1)

					frm.set_df_property('another_operators_in_location_section', 'hidden', 1)
					frm.set_df_property('antenna_support_section', 'hidden', 1)
				}

				frm.refresh_field('ext_section');
				frm.refresh_field('site_data_section');
				frm.refresh_field('engineer_data_section');
				frm.refresh_field('ext_section');
				frm.refresh_field('site_config_section');
				
				frm.refresh_field('sec_brk_enb_cfg');
				frm.refresh_field('number_of_sectoin');
				frm.refresh_field('evaluate_section');
				frm.refresh_field('service_section');
				frm.refresh_field('sec_brk_construction');

				frm.refresh_field('another_operators_in_location_section');
				frm.refresh_field('antenna_support_section');

				frm.refresh_field('sec_brk_sector1');
				frm.refresh_field('sec_brk_sector2');
				frm.refresh_field('sec_brk_sector3');
				frm.refresh_field('sec_brk_sector4');
			}

		},
		//************************ end contracted_sitename_Onchange *************************************************
		//---------------- check_pole_height -----------------------
		frm.evaluate_pole_height = function(frm,pole_height,pole_name){
			if(isNaN(Number(pole_height))){
				frappe.throw(__('<b>'+ pole_name +'</b> must be a number'));
			}

			if( ! frm.check_range(frm,pole_height,4,15)){
				frappe.throw(__('<b>'+ pole_name + '</b> must be in range ( 4-15 )'));
			}

		},
		//---------------- end check_pole_height -----------------------
		
		//---------------------------------------------------------------------------
		frm.set_pole_height_based_on_dialog = function(frm,poles_height,numb_of_pole){
			    
				    frm.doc.tower_pole_height = poles_height;
				    if(numb_of_pole == '1'){
				    	 frm.doc.tower_type_concat = numb_of_pole + 'Pole';
				    } else{
				    	 frm.doc.tower_type_concat = numb_of_pole + 'Poles';
				    }
				   frm.refresh_field('tower_type_concat');
					frm.set_df_property('tower_pole_height', 'hidden', 0)
					frm.set_df_property('tower_pole_height', 'read_only', 1)
							
					frm.set_df_property('building_height', 'hidden', 0)
					frm.set_df_property('building_height', 'reqd', 1)

					frm.refresh_field('tower_pole_height');
					frm.refresh_field('building_height');
				
				        
		},
		//---------------------------------------------------------------------------



		//--------------------------- dialog_api_func -----------------------
		frm.dialog_pole_height = function(frm, numb_of_pole){
			//------------------------------
			
			 if(numb_of_pole == '1'){
			 	let d = new frappe.ui.Dialog({
				    title: 'Enter Poles Height',
				    fields: [
					    {
					        label: 'Pole 1 Height (m)',
					        fieldname: 'pole_1_height',
					        fieldtype: 'Data',
					        reqd: true
					    },
					 ],
					primary_action_label: 'Submit',
				    primary_action(values) {
				    	//---------- evaluate pole height -------------------------
				    	frm.evaluate_pole_height(frm,values.pole_1_height,'Pole1 Height')

				    	//--- set tower_pole_height field based on popup
				    	frm.set_pole_height_based_on_dialog(frm,values.pole_1_height,numb_of_pole)
				       
				        d.hide();
				    
					}
				});
				d.show();
			 } else  if(numb_of_pole == '2'){
			 	let d = new frappe.ui.Dialog({
				    title: 'Enter Poles Height of sector '+'1',
				    fields: [
					    {
					        label: 'Pole 1  Height (m)',
					        fieldname: 'pole_1_height',
					        fieldtype: 'Data',
					        reqd: true
					    },
					      {
					        label: 'Pole 2  Height (m)',
					        fieldname: 'pole_2_height',
					        fieldtype: 'Data',
					        reqd: true
					    },
					 ],
					primary_action_label: 'Submit',
				    primary_action(values) {
					  
				        //---------- evaluate pole height -------------------------
				    	frm.evaluate_pole_height(frm,values.pole_1_height,'Pole1 Height');
				    	frm.evaluate_pole_height(frm,values.pole_2_height,'Pole2 Height');

				    	//--- set tower_pole_height field based on popup
				    	var poles_height =values.pole_1_height + ' , '+ values.pole_2_height;
				    	frm.set_pole_height_based_on_dialog(frm,poles_height,numb_of_pole);
				   		
				   		d.hide();
				    }
				});
				d.show();
			 } else  if(numb_of_pole == '3'){
			 	let d = new frappe.ui.Dialog({
				    title: 'Enter Poles Height of sector '+'1',
				    fields: [
					    {
					        label: 'Pole 1  Height (m)',
					        fieldname: 'pole_1_height',
					        fieldtype: 'Data',
					        reqd: true
					    },
					      {
					        label: 'Pole 2  Height (m)',
					        fieldname: 'pole_2_height',
					        fieldtype: 'Data',
					        reqd: true
					    },
					     {
					        label: 'Pole 3  Height (m)',
					        fieldname: 'pole_3_height',
					        fieldtype: 'Data',
					        reqd: true
					    }
					 ],
					primary_action_label: 'Submit',
				    primary_action(values) {
				    	

				    	  //---------- evaluate pole height -------------------------
				    	frm.evaluate_pole_height(frm,values.pole_1_height,'Pole1 Height');
				    	frm.evaluate_pole_height(frm,values.pole_2_height,'Pole2 Height');
				       
				    
				    	//--- set tower_pole_height field based on popup
				    	var poles_height = values.pole_1_height + ' , '+ values.pole_2_height + ' , '+ values.pole_3_height;
				    	frm.set_pole_height_based_on_dialog(frm,poles_height,numb_of_pole);
				   
				   		d.hide();
				    }
				});
				d.show();
			 }
			

		},
		//--------------------------------------------------------------------------


		//--------------------------- dialog sharing_with_others -----------------------
		frm.dialog_sharing_with_others = function(frm){
			let d = new frappe.ui.Dialog({
				    title: 'Enter Sharing with who?',
				    fields: [
					    {
					        label: 'sharing with who:',
					        fieldname: 'sharing_with_who',
					        fieldtype: 'Data',
					        reqd: true
					    },
					 ],
					primary_action_label: 'Submit',
				    primary_action(values) {
						frm.doc.tower_type_concat = 'Sharing-with '+ values.sharing_with_who;
				    	frm.refresh_field('tower_type_concat');
				    	 d.hide();
				    
					}
				});
				d.show()
		},
		//--------------------------- end dialog sharing_with_others -----------------------


		//************************ antenna_type1_Onchange *************************************************
		frm.antenna_type1_Onchange = function(frm){
			if(frm.doc.antenna_type1){
				// ----------------------------- get doc by name------------------
				frappe.db.get_doc('Antenna', frm.doc.antenna_type1)
		   		 .then(doc => {
		        	
		        	frm.doc.antenna_hbw1 = doc.antenna_hor_beamwidh;
		        	frm.doc.antenna_vbw1 = doc.antenna_ver_beamwidh;
		        	frm.refresh_field('antenna_hbw1');
	  				frm.refresh_field('antenna_vbw1');
		    	})
		   		 //---------------------------------------------------------------
			} else{
				frm.doc.antenna_hbw1 = '';
		        	frm.doc.antenna_vbw1 = '';
		        	frm.refresh_field('antenna_hbw1');
	  				frm.refresh_field('antenna_vbw1');
			}
			
		},
		//************************ end antenna_type1_Onchange *************************************************

		//************************ antenna_type2_Onchange *************************************************
		frm.antenna_type2_Onchange = function(frm){
			if(frm.doc.antenna_type2){
				// ----------------------------- get doc by name------------------
				frappe.db.get_doc('Antenna', frm.doc.antenna_type2)
		   		 .then(doc => {
		        	
		        	frm.doc.antenna_hbw2 = doc.antenna_hor_beamwidh;
		        	frm.doc.antenna_vbw2 = doc.antenna_ver_beamwidh;
		        	frm.refresh_field('antenna_hbw2');
	  				frm.refresh_field('antenna_vbw2');
		    	})
		   		 //---------------------------------------------------------------
			}else{
				frm.doc.antenna_hbw2 = '';
		        	frm.doc.antenna_vbw2 = '';
		        	frm.refresh_field('antenna_hbw2');
	  				frm.refresh_field('antenna_vbw2');
			}
			
			
		},
		//************************ end antenna_type2_Onchange *************************************************

		//************************ antenna_type3_Onchange *************************************************
		frm.antenna_type3_Onchange = function(frm){
			if(frm.doc.antenna_type3){
				// ----------------------------- get doc by name------------------
				frappe.db.get_doc('Antenna', frm.doc.antenna_type3)
		   		 .then(doc => {
		        	
		        	frm.doc.antenna_hbw3 = doc.antenna_hor_beamwidh;
		        	frm.doc.antenna_vbw3 = doc.antenna_ver_beamwidh;
		        	frm.refresh_field('antenna_hbw3');
	  				frm.refresh_field('antenna_vbw3');
		    	})
		   		 //---------------------------------------------------------------
			}else{
				frm.doc.antenna_hbw3 = '';
		        	frm.doc.antenna_vbw3 = '';
		        	frm.refresh_field('antenna_hbw3');
	  				frm.refresh_field('antenna_vbw3');
			}
			
			
		},
		//************************ end antenna_type3_Onchange *************************************************

		//************************ antenna_type4_Onchange *************************************************
		frm.antenna_type4_Onchange = function(frm){
			if(frm.doc.antenna_type4){
				// ----------------------------- get doc by name------------------
				frappe.db.get_doc('Antenna', frm.doc.antenna_type4)
		   		 .then(doc => {
		        	
		        	frm.doc.antenna_hbw4 = doc.antenna_hor_beamwidh;
		        	frm.doc.antenna_vbw4 = doc.antenna_ver_beamwidh;
		        	frm.refresh_field('antenna_hbw4');
	  				frm.refresh_field('antenna_vbw4');
		    	})
		   		 //---------------------------------------------------------------
			}else{
				frm.doc.antenna_hbw4 = '';
		        	frm.doc.antenna_vbw4 = '';
		        	frm.refresh_field('antenna_hbw4');
	  				frm.refresh_field('antenna_vbw4');
			}
			
			
		},
		//************************ end antenna_type1_Onchange *************************************************


		//************************ Another_Operators_in_Location_Onchange *************************************************
		frm.Another_Operators_in_Location_Onchange= function(frm) {
			var anotherOperator = '';
			if(frm.doc.ptc_check){
				anotherOperator += 'PTC, '
			} 
			if(frm.doc.sapafon_check){
				anotherOperator += 'SapaFon, '
			} 
			if(frm.doc.mtn_check){
				anotherOperator += 'MTN, '
			} 
			if(frm.doc.y_check){
				anotherOperator += 'Y, '
			} 
			frm.doc.company_in_the_site = anotherOperator;
			frm.refresh_field('company_in_the_site');
		}
		//************************ end Another_Operators_in_Location_Onchange *************************************************

	},
	//===============================================END  Setupfunc =============================================================






	//===============================================  Refresh =============================================================
	refresh: function(frm) {

		frm.Role_profile_function(frm)
		frm.chech_number_of_sectors(frm)
		frm.check_tower_type(frm)
		frm.contract_status_onChange(frm)
		frm.constr_site_status_onChange(frm)
		frm.order_type_(frm);
		frm.site_name_reconstruct_Onchange(frm);
		
		frm.contracted_sitename_Onchange(frm);
		frm.antenna_type1_Onchange(frm);
		frm.antenna_type2_Onchange(frm);
		frm.antenna_type3_Onchange(frm);
		frm.antenna_type4_Onchange(frm);

		frm.Another_Operators_in_Location_Onchange(frm);
	},
	//=============================================== End Refresh =============================================================


	// #################### after save #################################################
	after_save: function(frm){
		
		if(frm.doc.construction_type == 'جديد'){


			frappe.db.set_value('NewSites', frm.doc.contracted_sitename, 'is_delivered', 'Yes')
			.then(r => {
	        	let doc = r.message;
	        	// console.log(doc);
	    	})
		}
	  
	 },
	// #################### END after save #################################################



	// ########################## befor save #################################################
	before_save: function(frm){

		//------------------ configuration concat-----------------------
		if(frm.doc.number_of_sectors == '1'){
			
			frm.doc.azimuth_concat = frm.doc.azimuth1;
			frm.doc.tilt_concat = frm.doc.tilt1;
			frm.doc.antenna_height_concat = frm.doc.antenna_height1;
			frm.doc.antenna_hbw_concat = frm.doc.antenna_hbw1;
			frm.doc.antenna_vbw_concat = frm.doc.antenna_vbw1

			frm.doc.x_cnfg_concat = 'S' + frm.doc.x_cnfg1;
			frm.doc.do_cnfg_concat = 'S' + frm.doc.do_cnfg1;
		} else if(frm.doc.number_of_sectors == '2'){
			frm.doc.azimuth_concat = frm.doc.azimuth1 + '|' + frm.doc.azimuth2;
			frm.doc.tilt_concat = frm.doc.tilt1 + '|' + frm.doc.tilt2;
			frm.doc.antenna_height_concat = frm.doc.antenna_height1 + '|' + frm.doc.antenna_height2;
			frm.doc.antenna_hbw_concat = frm.doc.antenna_hbw1 + '|' + frm.doc.antenna_hbw2;
			frm.doc.antenna_vbw_concat = frm.doc.antenna_vbw1 + '|' + frm.doc.antenna_vbw2

			frm.doc.x_cnfg_concat = 'S' + frm.doc.x_cnfg1 + frm.doc.x_cnfg2;
			frm.doc.do_cnfg_concat = 'S' + frm.doc.do_cnfg1 + frm.doc.do_cnfg2;

		} else if(frm.doc.number_of_sectors == '3'){
			frm.doc.azimuth_concat = frm.doc.azimuth1 + '|' + frm.doc.azimuth2 + '|' + frm.doc.azimuth3;
			frm.doc.tilt_concat = frm.doc.tilt1 + '|' + frm.doc.tilt2 + '|' + frm.doc.tilt3;
			frm.doc.antenna_height_concat = frm.doc.antenna_height1 + '|' + frm.doc.antenna_height2 + '|' + frm.doc.antenna_height3;
			frm.doc.antenna_hbw_concat = frm.doc.antenna_hbw1 + '|' + frm.doc.antenna_hbw2 + '|' + frm.doc.antenna_hbw3;
			frm.doc.antenna_vbw_concat = frm.doc.antenna_vbw1 + '|' + frm.doc.antenna_vbw2 + '|' + frm.doc.antenna_vbw3;

			frm.doc.x_cnfg_concat = 'S' + frm.doc.x_cnfg1+ frm.doc.x_cnfg2 + frm.doc.x_cnfg3;
			frm.doc.do_cnfg_concat = 'S' + frm.doc.do_cnfg1 + frm.doc.do_cnfg2 + frm.doc.do_cnfg3;

		} else if(frm.doc.number_of_sectors == '4'){
			frm.doc.azimuth_concat = frm.doc.azimuth1 + '|' + frm.doc.azimuth2 + '|' + frm.doc.azimuth3 + '|' + frm.doc.azimuth4;
			frm.doc.tilt_concat = frm.doc.tilt1 + '|' + frm.doc.tilt2 + '|' + frm.doc.tilt3 + '|' + frm.doc.tilt4;
			frm.doc.antenna_height_concat = frm.doc.antenna_height1 + '|' + frm.doc.antenna_height2 + '|' + frm.doc.antenna_height3 + '|' + frm.doc.antenna_height4;
			frm.doc.antenna_hbw_concat = frm.doc.antenna_hbw1 + '|' + frm.doc.antenna_hbw2 + '|' + frm.doc.antenna_hbw3 + '|' + frm.doc.antenna_hbw4;
			frm.doc.antenna_vbw_concat = frm.doc.antenna_vbw1 + '|' + frm.doc.antenna_vbw2 + '|' + frm.doc.antenna_vbw3 + '|' + frm.doc.antenna_vbw4;

			frm.doc.x_cnfg_concat = 'S' + frm.doc.x_cnfg1 + frm.doc.x_cnfg2 + frm.doc.x_cnfg3 + frm.doc.x_cnfg4;
			frm.doc.do_cnfg_concat = 'S' + frm.doc.do_cnfg1 + frm.doc.do_cnfg2 + frm.doc.do_cnfg3 + frm.doc.do_cnfg4;

		} 
		//-------------------------end-----------------------------------------


`		//--------------------------end--------------------------------------------`

	},
	// #################### END befor save #################################################



	//=============================================== on change field =============================================================

	//*********************************************************************************************
	contracted_sitename: function(frm){
		if(frm.doc.contracted_sitename){
			frm.contracted_sitename_Onchange(frm);

			// ----------------------------- get doc by name
			frappe.db.get_doc('NewSites', frm.doc.contracted_sitename)
		   		 .then(doc => {
		        	//console.log(doc.name)
		        	frm.doc.site_name =  doc.site_name;
		  				frm.doc.site_name_arabic =  doc.site_name_arabic;
		  				frm.doc.site_importance =  doc.site_importance;
		  				frm.doc.government2 =  doc.government2;
		  				frm.doc.modairiah =  doc.modairiah;
		  				frm.doc.area_name =  doc.area_name;
		  				frm.doc.area_type =  doc.area_type;
		  				frm.doc.sun_plate =  doc.sun_plate;
		  				frm.doc.survey_code =  doc.name;
		  				frm.doc.zone =  doc.zone;

		  				// frm.doc.engineer_name =  doc.engineer_name;
		  				// frm.doc.engineer_phone =  doc.engineer_phone;
		  				frm.doc.engineer_note =  doc.engineer_note;
		  				frm.doc.survey_date =  doc.survey_date;
		  				

		  				frm.doc.contract_status =  doc.contract_status;
		  				frm.doc.choice_contracted =  doc.choice_contracted;
		  				frm.doc.area_contracted =  doc.area_contracted;
		  				frm.doc.road_to_site_ready =  doc.road_to_site_ready;
		  				frm.doc.elect_generator_place =  doc.elect_generator_place;
		  				frm.doc.elect_generator_area =  doc.elect_generator_area;
		  				frm.doc.contract_failed_reason =  doc.contract_failed_reason;
		  				frm.doc.owner_name =  doc.owner_name;
		  				frm.doc.owner_phone =  doc.owner_phone;
		  				frm.doc.owner_address =  doc.owner_address;
		  				frm.doc.general_elect_available =  doc.general_elect_available;
		  				frm.doc.elect_off_time =  doc.elect_off_time;
		  				frm.doc.contract_by =  doc.contract_by;
		  				frm.doc.contracted_by_phone =  doc.contracted_by_phone;
		  				frm.doc.contract_date =  doc.contract_date;
		  				frm.doc.contract_note =  doc.contract_note;
		  				

		  				if(doc.choice_contracted=='1'){
		  					// frappe.msgprint(doc.longitude1)
		  					frm.doc.longitude =  doc.longitude1;
		  					frm.doc.latitude =  doc.latitude1;
		  				} else if(doc.choice_contracted=='2'){
		  					frm.doc.longitude =  doc.longitude2;
		  					frm.doc.latitude =  doc.latitude2;
		  				} else if(doc.choice_contracted=='3'){
		  					frm.doc.longitude =  doc.longitude3;
		  					frm.doc.latitude =  doc.latitude3;
		  				} else if(doc.choice_contracted=='4'){
		  					frm.doc.longitude =  doc.longitude4;
		  					frm.doc.latitude =  doc.latitude4;
		  				}

		  				frm.refresh_field('longitude');
		  				frm.refresh_field('latitude');

		  				frm.refresh_field('contract_status');
		  				frm.refresh_field('choice_contracted');
		  				frm.refresh_field('area_contracted');
		  				frm.refresh_field('road_to_site_ready');
		  				frm.refresh_field('elect_generator_place');
		  				frm.refresh_field('elect_generator_area');
		  				frm.refresh_field('contract_failed_reason');
		  				frm.refresh_field('owner_name');
		  				frm.refresh_field('owner_phone');
		  				frm.refresh_field('owner_address');
		  				frm.refresh_field('general_elect_available');
		  				frm.refresh_field('elect_off_time');
		  				frm.refresh_field('contract_by');
		  				frm.refresh_field('contracted_by_phone');
		  				frm.refresh_field('contract_date');
		  				frm.refresh_field('contract_note');

		  				frm.refresh_field('site_name');
		  				frm.refresh_field('site_name_arabic');
		  				frm.refresh_field('site_importance');
		  				frm.refresh_field('government2');
		  				frm.refresh_field('modairiah');
		  				frm.refresh_field('area_name');
		  				frm.refresh_field('area_type');
		  				frm.refresh_field('sun_plate');
		  				frm.refresh_field('survey_code');
		  				frm.refresh_field('zone');

		  				frm.refresh_field('engineer_name');
		  				frm.refresh_field('engineer_phone');
		  				frm.refresh_field('engineer_note');
		  				frm.refresh_field('survey_date');

		    })
		}
		

		},
	//*******************************************************end*****************************************************



	//*********************************************************************************************
	site_name_reconstruct: function(frm){
		if(frm.doc.site_name_reconstruct){
			frm.site_name_reconstruct_Onchange(frm);
		
		// ----------------------------- get doc by name
		frappe.db.get_doc('Working Sites', frm.doc.site_name_reconstruct)
	   		 .then(doc => {
	        	console.log(doc.name)
	        	frm.doc.site_name =  doc.site_name;
	  				frm.doc.site_name_arabic =  doc.site_name_arabic;
	  				frm.doc.site_importance =  ''
	  				frm.doc.government2 =  doc.city;
	  				frm.doc.modairiah =  doc.district;
	  				frm.doc.area_name =  doc.area;
	  				frm.doc.area_type =  doc.cell_type;
	  				frm.doc.sun_plate =  doc.sun_plate;
	  				frm.doc.survey_code =  doc.site_code;
	  				frm.doc.zone =  doc.zone;

	  				// frm.doc.engineer_name =  doc.engineer_name;
	  				// frm.doc.engineer_phone =  doc.engineer_phone;
	  				// frm.doc.engineer_note =  doc.engineer_note;
	  				// frm.doc.survey_date =  doc.survey_date;
	  				

	  				// frm.doc.contract_status =  doc.contract_status;
	  				// frm.doc.choice_contracted =  doc.choice_contracted;
	  				// frm.doc.area_contracted =  doc.area_contracted;
	  				// frm.doc.road_to_site_ready =  doc.road_to_site_ready;
	  				// frm.doc.elect_generator_place =  doc.elect_generator_place;
	  				// frm.doc.elect_generator_area =  doc.elect_generator_area;
	  				// frm.doc.contract_failed_reason =  doc.contract_failed_reason;
	  				// frm.doc.owner_name =  doc.owner_name;
	  				// frm.doc.owner_phone =  doc.owner_phone;
	  				// frm.doc.owner_address =  doc.owner_address;
	  				// frm.doc.general_elect_available =  doc.general_elect_available;
	  				// frm.doc.elect_off_time =  doc.elect_off_time;
	  				// frm.doc.contract_by =  doc.contract_by;
	  				// frm.doc.contracted_by_phone =  doc.contracted_by_phone;
	  				// frm.doc.contract_date =  doc.contract_date;
	  				// frm.doc.contract_note =  doc.contract_note;
	  				
	  				frm.refresh_field('contract_status');
	  				frm.refresh_field('choice_contracted');
	  				frm.refresh_field('area_contracted');
	  				frm.refresh_field('road_to_site_ready');
	  				frm.refresh_field('elect_generator_place');
	  				frm.refresh_field('elect_generator_area');
	  				frm.refresh_field('contract_failed_reason');
	  				frm.refresh_field('owner_name');
	  				frm.refresh_field('owner_phone');
	  				frm.refresh_field('owner_address');
	  				frm.refresh_field('general_elect_available');
	  				frm.refresh_field('elect_off_time');
	  				frm.refresh_field('contract_by');
	  				frm.refresh_field('contracted_by_phone');
	  				frm.refresh_field('contract_date');
	  				frm.refresh_field('contract_note');

	  				frm.refresh_field('site_name');
	  				frm.refresh_field('site_name_arabic');
	  				frm.refresh_field('site_importance');
	  				frm.refresh_field('government2');
	  				frm.refresh_field('modairiah');
	  				frm.refresh_field('area_name');
	  				frm.refresh_field('area_type');
	  				frm.refresh_field('sun_plate');
	  				frm.refresh_field('survey_code');
	  				frm.refresh_field('zone');

	  				frm.refresh_field('engineer_name');
	  				frm.refresh_field('engineer_phone');
	  				frm.refresh_field('engineer_note');
	  				frm.refresh_field('survey_date');

	    		})
		}
		

		},
	//*******************************************************end*****************************************************



	//************************************************************************************************************
	number_of_sectors: function(frm){
		frm.chech_number_of_sectors(frm)
	},
	//********************************************************end**********************************************



	//************************************************************************************************************
	tower_type: function(frm){
		frm.doc.tower_pole_height = ''
		frm.doc.building_height = ''
		frm.doc.number_of_poles = ''
		frm.doc.number_of_rooms = ''
		frm.doc.sharing_tower_with = ''
		frm.check_tower_type(frm);
	},
	//********************************************************end**********************************************

 //--------------------------------------------------------------------------------------
   number_of_poles: function(frm){
   		frm.doc.tower_pole_height = '';
   		frm.refresh_field('tower_pole_height');
	   	if(frm.doc.number_of_poles){
	   		frm.dialog_pole_height(frm,frm.doc.number_of_poles)
	   	}
	},
	//--------------------------------------------------------------------------------------
  

   //--------------------------------------------------------------------------------------
  number_of_rooms: function(frm){
  	if(frm.doc.number_of_rooms == '1'){
  		frm.doc.tower_type_concat = '1Room+Pole';
  	}else{
  		frm.doc.tower_type_concat = frm.doc.number_of_rooms + 'Rooms+Pole'
  	}
  	
  
  	frm.refresh_field('tower_type_concat');

  	 frm.set_df_property('tower_pole_height', 'label', 'Pole Height (m)')
  	frm.set_df_property('tower_pole_height', 'hidden', 0)
	frm.set_df_property('tower_pole_height', 'reqd', 1)
	frm.refresh_field('tower_pole_height');
  },
   //--------------------------------------------------------------------------------------

	//--------------------------------------------------------------------------------------
  sharing_tower_with: function(frm){
  	if(frm.doc.sharing_tower_with == 'Others'){
  		
  		frm.dialog_sharing_with_others(frm);
  	}else{
  		frm.doc.tower_type_concat = 'Sharing with ' + frm.doc.sharing_tower_with;
	  	frm.refresh_field('tower_type_concat');

	  	frm.set_df_property('tower_pole_height', 'hidden', 0)
		frm.set_df_property('tower_pole_height', 'reqd', 1)
  	}
  
  },
   //--------------------------------------------------------------------------------------
  
  

  //--------------------------------------------------------------------------------------
  specify_others: function(frm){
  	frm.doc.tower_type_concat = frm.doc.specify_others;
  	frm.refresh_field('tower_type_concat');

  
  },
   //--------------------------------------------------------------------------------------
  



	//************************************************************************************************************
	contract_status: function(frm){
		frm.contract_status_onChange(frm);
	},
	//********************************************************end**********************************************



	//************************************************************************************************************
	constr_site_status: function(frm){
		frm.constr_site_status_onChange(frm);
	},
	//********************************************************end**********************************************
	

	construction_type: function(frm){
		frm.order_type_(frm);

		//------ clear field
		if(frm.doc.name != frm.doc.survey_code){
			frm.doc.contracted_sitename = '';
			frm.refresh_field('contracted_sitename');
			frm.doc.site_name_reconstruct = '';
			frm.refresh_field('site_name_reconstruct');
			frm.doc.site_name = '';
			frm.refresh_field('site_name');
			frm.doc.site_name_arabic = '';
			frm.refresh_field('site_name_arabic');
			frm.doc.site_importance = '';
			frm.refresh_field('site_importance');
			frm.doc.longitude = '';
			frm.refresh_field('longitude');
			frm.doc.government2 = '';
			frm.refresh_field('government2');
			frm.doc.modairiah = '';
			frm.refresh_field('modairiah');	
			frm.doc.area_name = '';
			frm.refresh_field('area_name');
			frm.doc.latitude = '';
			frm.refresh_field('latitude');
			frm.doc.sun_plate = '';
			frm.refresh_field('sun_plate');
			frm.doc.survey_code = '';
			frm.refresh_field('survey_code');

			frm.doc.zone = '';
			frm.refresh_field('zone');
			frm.doc.area_type = '';
			frm.refresh_field('area_type');
			frm.doc.engineer_name = '';
			frm.refresh_field('engineer_name');
			frm.doc.engineer_phone = '';
			frm.refresh_field('engineer_phone');
			frm.doc.delivered_to_name = '';
			frm.refresh_field('delivered_to_name');
			frm.doc.delivered_to_phone = '';
			frm.refresh_field('delivered_to_phone');
			frm.doc.delivery_date = '';
			frm.refresh_field('delivery_date');
			frm.doc.engineer_notes = '';
			frm.refresh_field('engineer_notes');
			frm.doc.company_in_the_site = '';
			frm.refresh_field('company_in_the_site');

			frm.doc.tower_type = '';
			frm.refresh_field('tower_type');
			frm.doc.specify_others = '';
			frm.refresh_field('specify_others');
			frm.doc.number_of_poles = '';
			frm.refresh_field('number_of_poles');
			frm.doc.number_of_rooms = '';
			frm.refresh_field('number_of_rooms');
			frm.doc.sharing_tower_with = '';
			frm.refresh_field('sharing_tower_with');
			frm.doc.building_height = '';
			frm.refresh_field('building_height');
			frm.doc.tower_pole_height = '';
			frm.refresh_field('tower_pole_height');
			frm.doc.number_of_sectors = '';
			frm.refresh_field('number_of_sectors');

			frm.doc.azimuth1 = '';
			frm.refresh_field('azimuth1');
			frm.doc.antenna_type1 = '';
			frm.refresh_field('antenna_type1');
			frm.doc.x_cnfg1 = '';
			frm.refresh_field('x_cnfg1');
			frm.doc.tilt1 = '';
			frm.refresh_field('tilt1');
			frm.doc.do_cnfg1 = '';
			frm.refresh_field('do_cnfg1');
			frm.doc.antenna_height1 = '';
			frm.refresh_field('antenna_height1');

			frm.doc.azimuth2 = '';
			frm.refresh_field('azimuth2');
			frm.doc.antenna_type2 = '';
			frm.refresh_field('antenna_type2');
			frm.doc.x_cnfg2 = '';
			frm.refresh_field('x_cnfg2');
			frm.doc.tilt2 = '';
			frm.refresh_field('tilt2');
			frm.doc.do_cnfg2 = '';
			frm.refresh_field('do_cnfg2');
			frm.doc.antenna_height2 = '';
			frm.refresh_field('antenna_height2');

			frm.doc.azimuth3 = '';
			frm.refresh_field('azimuth3');
			frm.doc.antenna_type3 = '';
			frm.refresh_field('antenna_type3');
			frm.doc.x_cnfg3 = '';
			frm.refresh_field('x_cnfg3');
			frm.doc.tilt3 = '';
			frm.refresh_field('tilt3');
			frm.doc.do_cnfg3 = '';
			frm.refresh_field('do_cnfg3');
			frm.doc.antenna_height3 = '';
			frm.refresh_field('antenna_height3');

			frm.doc.azimuth4 = '';
			frm.refresh_field('azimuth4');
			frm.doc.antenna_type4 = '';
			frm.refresh_field('antenna_type4');
			frm.doc.x_cnfg4 = '';
			frm.refresh_field('x_cnfg4');
			frm.doc.tilt4 = '';
			frm.refresh_field('tilt4');
			frm.doc.do_cnfg4 = '';
			frm.refresh_field('do_cnfg4');
			frm.doc.antenna_height4 = '';
			frm.refresh_field('antenna_height4');

			frm.doc.civil_notes = '';
			frm.refresh_field('civil_notes');
			frm.doc.civil_problem_detailes = '';
			frm.refresh_field('civil_problem_detailes');
			frm.doc.miqawil_name = '';
			frm.refresh_field('miqawil_name');
			frm.doc.constr_site_status = '';
			frm.refresh_field('constr_site_status');

			frm.doc.evaluate = '';
			frm.refresh_field('evaluate');
			frm.doc.evaluation_note = '';
			frm.refresh_field('evaluation_note');


			frm.doc.is_replaced = '';
			frm.refresh_field('is_replaced');
		}
	},

	antenna_type1: function(frm){
		frm.antenna_type1_Onchange(frm);
	},

	antenna_type2: function(frm){
		frm.antenna_type2_Onchange(frm);
	},

	antenna_type3: function(frm){
		frm.antenna_type3_Onchange(frm);
	},

	antenna_type4: function(frm){
		frm.antenna_type4_Onchange(frm);
	},

	bsc_name: function(frm){
		if(frm.doc.bsc_name){
			
			frappe.db.get_doc('BSCs', frm.doc.bsc_name)
				   		 .then(doc => {
				        	frm.doc.bts_vendor = doc.vendor;
				        	frm.refresh_field('bts_vendor');
				    	})
		}
	},

	delivered_to_name: function(frm){
		if(frm.doc.delivered_to_name){
			frappe.db.get_doc('civilstuff', frm.doc.delivered_to_name)
				   		 .then(doc => {
				        	frm.doc.delivered_to_phone = doc.phone;
				        	frm.refresh_field('delivered_to_phone');
				    	})
		}
		
	},

	nearest_link_site: function(frm){
		// ----------------------------- get doc by name------------------
		if(frm.doc.nearest_link_site){
			frappe.db.get_doc('Working Sites', frm.doc.nearest_link_site)
	   		 .then(doc => {
	        	frm.doc.nearest_link_site_name = doc.site_name;
	        	frm.refresh_field('nearest_link_site_name');

	    	})
		}
		 //---------------------------------------------------------------
	},

	ptc_check: function(frm){
		frm.Another_Operators_in_Location_Onchange(frm);
	},


	sapafon_check: function(frm){
		frm.Another_Operators_in_Location_Onchange(frm);
	},

	mtn_check: function(frm){
		frm.Another_Operators_in_Location_Onchange(frm);
	},

	y_check: function(frm){
		frm.Another_Operators_in_Location_Onchange(frm);
	},

	longitude: function(frm){
		// frm.Evaluat_Coordinate(frm,frm.doc.longitude,'Longitude','long')
		// // frm.Evaluat_Coordinate(frm,frm.doc.latitude,'Latitude','lat')
	},

	latitude: function(frm){
		// frm.Evaluat_Coordinate(frm,frm.doc.longitude,'Longitude','long')
		// frm.Evaluat_Coordinate(frm,frm.doc.latitude,'Latitude','lat')
	},


	//=============================================== end on change field =============================================================


	//=============================================== validate =============================================================
	validate: function(frm){
		var lat_n = 0;
		var long_n = 0;

		
		frm.Evaluat_Coordinate(frm,frm.doc.longitude,'Longitude','long')
		frm.Evaluat_Coordinate(frm,frm.doc.latitude,'Latitude','lat')
		
		if(frm.doc.tower_type == 'Pole'){
			frm.Evaluat_pole_height(frm);
		} else if(frm.doc.tower_type == 'Rooms+Pole'){
			frm.Evaluat_room_pole_height(frm);
		} else {
			frm.Evaluat_tower_height(frm);
		}

		if(frm.doc.tower_type == 'Pole' || frm.doc.tower_type == 'Rooms+Pole'){
			frm.Evaluat_building_height(frm);
		} 
		
		//------------------

		if( frm.doc.number_of_sectors == '1'){
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth1,'Azimuth of Sector0');
			frm.Evaluat_tilt(frm,frm.doc.tilt1,'Tilt of Sector0');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height1,'Antenna Height of Sector0');
			
		}
		if( frm.doc.number_of_sectors == '2'){
			frm.Evaluat_azimuth(frm,frm.doc.azimuth1,'Azimuth of Sector0');
			frm.Evaluat_tilt(frm,frm.doc.tilt1,'Tilt of Sector0');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height1,'Antenna Height of Sector0');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth2,'Azimuth of Sector1');
			frm.Evaluat_tilt(frm,frm.doc.tilt2,'Tilt of Sector1');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height2,'Antenna Height of Sector1');
			
		}
		if( frm.doc.number_of_sectors == '3'){
			frm.Evaluat_azimuth(frm,frm.doc.azimuth1,'Azimuth of Sector0');
			frm.Evaluat_tilt(frm,frm.doc.tilt1,'Tilt of Sector0');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height1,'Antenna Height of Sector0');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth2,'Azimuth of Sector1');
			frm.Evaluat_tilt(frm,frm.doc.tilt2,'Tilt of Sector1');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height2,'Antenna Height of Sector1');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth3,'Azimuth of Sector2');
			frm.Evaluat_tilt(frm,frm.doc.tilt3,'Tilt of Sector2');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height3,'Antenna Height of Sector2');
		
		}
		if( frm.doc.number_of_sectors == '4'){
			frm.Evaluat_azimuth(frm,frm.doc.azimuth1,'Azimuth of Sector0');
			frm.Evaluat_tilt(frm,frm.doc.tilt1,'Tilt of Sector0');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height1,'Antenna Height of Sector0');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth2,'Azimuth of Sector1');
			frm.Evaluat_tilt(frm,frm.doc.tilt2,'Tilt of Sector1');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height2,'Antenna Height of Sector1');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth3,'Azimuth of Sector2');
			frm.Evaluat_tilt(frm,frm.doc.tilt3,'Tilt of Sector2');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height3,'Antenna Height of Sector2');
			
			frm.Evaluat_azimuth(frm,frm.doc.azimuth4,'Azimuth of Sector3');
			frm.Evaluat_tilt(frm,frm.doc.tilt4,'Tilt of Sector3');
			frm.Evaluat_antenna_height(frm,frm.doc.antenna_height4,'Antenna Height of Sector3');
		
		}
	}
	
	//=============================================== end validate =============================================================
});
