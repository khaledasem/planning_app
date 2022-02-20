// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('NewSites', {



// #####################  setup ################################################
	setup: function(frm){
		//-------------------Define funchtion -------------------------------------------
		
		// frappe.msgprint(__('setup'));

		frm.Role_profile_function = function(frm){

				var variab = ''
	 			frm.call({
	  			method: "planning_app.planning_app.doctype.newsites.myapi.getUserInfo_api",
	  			// args: {'name': frm.doc.government2, 'last_code': used_code_num},
	  			callback: function(r) {
		  				

			  		// frm.doc.engineer_name =  r.message[0][0]
			  		// frm.doc.engineer_phone =  r.message[0][1]
			  		
			  		variab  =  r.message[0][2]

			  		frm.refresh_field('engineer_name');
			  		frm.refresh_field('engineer_phone');
			  		// frm.refresh_field('role_user');

	  					console.log(variab)
					//----------- set permistion for evaluate ------------------
					if(frappe.user.name =='Administrator' || variab == 'Planning Manager User'){
							console.log('evalua')
						frm.set_df_property('evaluate', 'read_only', 0)
						frm.set_df_property('evaluation_note', 'read_only', 0)
						
					} else{
						frm.set_df_property('evaluate', 'read_only', 1)
						frm.set_df_property('evaluation_note', 'read_only', 1)
					}
					//-----------------------------------------------------------------------			

					if(frappe.user.name !='Administrator'){
						console.log('--------------------')
						console.log(variab)
						console.log('--------------------')
						
						if(variab == 'ServiceUser' ){
							frm.set_df_property('evaluate_section', 'hidden', 1)


					 		frm.set_df_property('survey_type', 'read_only', 1)
					 		frm.set_df_property('old_sitename', 'read_only', 1)
					 		frm.set_df_property('site_name', 'read_only', 1)
					 		frm.set_df_property('site_name_arabic', 'read_only', 1)
					 		frm.set_df_property('site_importance', 'read_only', 1)
					 		frm.set_df_property('number_of_choices', 'read_only', 1)
					 		frm.set_df_property('government2', 'read_only', 1)
					 		frm.set_df_property('modairiah', 'read_only', 1)
					 		frm.set_df_property('area_name', 'read_only', 1)
					 		frm.set_df_property('area_type', 'read_only', 1)
					 		frm.set_df_property('sun_plate', 'read_only', 1)
					 		frm.set_df_property('engineer_name', 'read_only', 1)
					 		frm.set_df_property('engineer_phone', 'read_only', 1)
					 		frm.set_df_property('engineer_notes', 'read_only', 1)
					 		frm.set_df_property('survey_date', 'read_only', 1)
					 		frm.set_df_property('longitude1', 'read_only', 1)
					 		frm.set_df_property('latitude1', 'read_only', 1)
					 		frm.set_df_property('choice_priority1', 'read_only', 1)
					 		frm.set_df_property('longitude2', 'read_only', 1)
					 		frm.set_df_property('latitude2', 'read_only', 1)
					 		frm.set_df_property('choice_priority2', 'read_only', 1)
					 		frm.set_df_property('longitude3', 'read_only', 1)
					 		frm.set_df_property('latitude3', 'read_only', 1)
					 		frm.set_df_property('choice_priority3', 'read_only', 1)
					 		frm.set_df_property('longitude4', 'read_only', 1)
					 		frm.set_df_property('latitude4', 'read_only', 1)
					 		frm.set_df_property('choice_priority4', 'read_only', 1)
					 		
					 		frm.set_df_property('tower_type1', 'read_only', 1)
							frm.set_df_property('number_of_poles1', 'read_only', 1)
					 		frm.set_df_property('number_of_rooms1', 'read_only', 1)
					 		frm.set_df_property('sharing_tower_with1', 'read_only', 1)
							frm.set_df_property('tower_pole_height1', 'read_only', 1)
							frm.set_df_property('building_height1', 'read_only', 1)

							frm.set_df_property('tower_type2', 'read_only', 1)
							frm.set_df_property('number_of_poles2', 'read_only', 1)
					 		frm.set_df_property('number_of_rooms2', 'read_only', 1)
					 		frm.set_df_property('sharing_tower_with2', 'read_only', 1)
							frm.set_df_property('tower_pole_height2', 'read_only', 1)
							frm.set_df_property('building_height2', 'read_only', 1)

							frm.set_df_property('tower_type3', 'read_only', 1)
							frm.set_df_property('number_of_poles3', 'read_only', 1)
					 		frm.set_df_property('number_of_rooms3', 'read_only', 1)
					 		frm.set_df_property('sharing_tower_with3', 'read_only', 1)
							frm.set_df_property('tower_pole_height3', 'read_only', 1)
							frm.set_df_property('building_height3', 'read_only', 1)

							frm.set_df_property('tower_type4', 'read_only', 1)
							frm.set_df_property('number_of_poles4', 'read_only', 1)
					 		frm.set_df_property('number_of_rooms4', 'read_only', 1)
					 		frm.set_df_property('sharing_tower_with4', 'read_only', 1)
							frm.set_df_property('tower_pole_height4', 'read_only', 1)
							frm.set_df_property('building_height4', 'read_only', 1)

							//---------------------------------
							frm.set_df_property('contract_status', 'reqd', 1)
							frm.set_df_property('owner_name', 'reqd', 1)
							frm.set_df_property('owner_phone', 'reqd', 1)
							frm.set_df_property('contract_by', 'reqd', 1)

							frm.set_df_property('service_section', 'collapse', 0)


						}
						if(variab != 'ServiceUser' ){
							//---------------------------------
							frm.set_df_property('contract_status', 'read_only', 1)
							frm.set_df_property('owner_name', 'read_only', 1)
							frm.set_df_property('owner_phone', 'read_only', 1)
							frm.set_df_property('owner_address', 'read_only', 1)

							frm.set_df_property('contract_by', 'read_only', 1)
							frm.set_df_property('contracted_by_phone', 'read_only', 1)
							frm.set_df_property('contract_date', 'read_only', 1)
							frm.set_df_property('contract_note', 'read_only', 1)

							frm.set_df_property('contract_failed_reason', 'read_only', 1)
							frm.set_df_property('choice_contracted', 'read_only', 1)
							frm.set_df_property('area_contracted', 'read_only', 1)

							frm.set_df_property('road_to_site_ready', 'read_only', 1)
							frm.set_df_property('elect_generator_place', 'read_only', 1)
							frm.set_df_property('general_elect_available', 'read_only', 1)
							frm.set_df_property('contract_note', 'read_only', 1)
							frm.set_df_property('owner_name', 'read_only', 1)
							frm.set_df_property('owner_phone', 'read_only', 1)
							frm.set_df_property('owner_address', 'read_only', 1)

							frm.set_df_property('contract_by', 'read_only', 1)
							frm.set_df_property('contracted_by_phone', 'read_only', 1)
							frm.set_df_property('contract_date', 'read_only', 1)
							frm.set_df_property('contract_note', 'read_only', 1)
							frm.set_df_property('owner_name', 'read_only', 1)
							frm.set_df_property('owner_phone', 'read_only', 1)
							frm.set_df_property('owner_address', 'read_only', 1)

							frm.set_df_property('contract_by', 'read_only', 1)
							frm.set_df_property('contracted_by_phone', 'read_only', 1)
							frm.set_df_property('contract_date', 'read_only', 1)
							frm.set_df_property('contract_note', 'read_only', 1)

							frm.set_df_property('elect_off_time', 'read_only', 1)
							frm.set_df_property('elect_generator_area', 'read_only', 1)


						
				
						}

					
					}
			}
	  	})
		},

		frm.share_with_other_concat = function(frm,choice_num, sharing_with_who){

			if(choice_num == 1){
				    		frm.doc.tower_type_concat1 = 'Sharing with '+ sharing_with_who;
				    		frm.refresh_field('tower_type_concat1');

				    	} else if(choice_num == 2){
				    		frm.doc.tower_type_concat2 = 'Sharing with '+ sharing_with_who;
				    		frm.refresh_field('tower_type_concat2');	

				    	} else if(choice_num == 3){
				    		frm.doc.tower_type_concat3 = 'Sharing with '+ sharing_with_who;
				    		frm.refresh_field('tower_type_concat3');

				    	} else if(choice_num == 4){
				    		frm.doc.tower_type_concat4 = 'Sharing with '+ sharing_with_who;
				    		frm.refresh_field('tower_type_concat4');	
				    	}
				    	else{
				    		
				    	}			
		},

		//--------------------------- dialog sharing_with_others -----------------------
		frm.dialog_sharing_with_others = function(frm,choice_num){
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

				    	frm.share_with_other_concat(frm,choice_num, values.sharing_with_who)
				    	console.log('sharing with: '+  values.sharing_with_who)
				    	 d.hide();
				    
					}
				});
				d.show()
		},
		//--------------------------- end dialog sharing_with_others -----------------------

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
		

		//--------------------------- dialog_api_func -----------------------
		frm.dialog_pole_height = function(frm, numb_of_pole, choice_num){
			//------------------------------
			
			 if(numb_of_pole == '1'){
			 	let d = new frappe.ui.Dialog({
				    title: 'Enter Poles Height of sector '+'1',
				    fields: [
					    {
					        label: 'Pole 1  Height (m)',
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
				    	frm.set_pole_height_based_on_dialog(frm,values.pole_1_height,choice_num,numb_of_pole)
				       
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
				    	frm.set_pole_height_based_on_dialog(frm,poles_height,choice_num,numb_of_pole);
				   		
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
				    	frm.set_pole_height_based_on_dialog(frm,poles_height,choice_num,numb_of_pole);
				   
				   		d.hide();
				    }
				});
				d.show();
			 }
			

		},
		//--------------------------------------------------------------------------


		//---------------------------------------------------------------------------
		frm.set_pole_height_based_on_dialog = function(frm,poles_height,choice_num,numb_of_pole){
			    if(choice_num == 1){
				    frm.doc.tower_pole_height1 = poles_height;
				    if(numb_of_pole == '1'){
				    	 frm.doc.tower_type_concat1 = numb_of_pole + ' Pole';
				    } else{
				    	 frm.doc.tower_type_concat1 = numb_of_pole + ' Poles';
				    }
				   frm.refresh_field('tower_type_concat1');
					frm.set_df_property('tower_pole_height1', 'hidden', 0)
					frm.set_df_property('tower_pole_height1', 'read_only', 1)
							
					frm.set_df_property('building_height1', 'hidden', 0)
					frm.set_df_property('building_height1', 'reqd', 1)

					frm.refresh_field('tower_pole_height1');
					frm.refresh_field('building_height1');
				} else if(choice_num == 2){
					frm.doc.tower_pole_height2 = poles_height;
					 if(numb_of_pole == '1'){
				    	 frm.doc.tower_type_concat2 = numb_of_pole + ' Pole';
				    } else{
				    	 frm.doc.tower_type_concat2 = numb_of_pole + ' Poles';
				    }
				    frm.refresh_field('tower_type_concat2');
					frm.set_df_property('tower_pole_height2', 'hidden', 0)
					frm.set_df_property('tower_pole_height2', 'read_only', 1)
							
					frm.set_df_property('building_height2', 'hidden', 0)
					frm.set_df_property('building_height2', 'reqd', 1)

					frm.refresh_field('tower_pole_height2');
					frm.refresh_field('building_height2');
				 } else if(choice_num == 3){
				    frm.doc.tower_pole_height3 = poles_height;
				     if(numb_of_pole == '1'){
				    	 frm.doc.tower_type_concat3 = numb_of_pole + ' Pole';
				    } else{
				    	 frm.doc.tower_type_concat3 = numb_of_pole + ' Poles';
				    }
					frm.refresh_field('tower_type_concat3');
					frm.set_df_property('tower_pole_height3', 'hidden', 0)
					frm.set_df_property('tower_pole_height3', 'read_only', 1)
							
					frm.set_df_property('building_height3', 'hidden', 0);
					frm.set_df_property('building_height3', 'reqd', 1);

					frm.refresh_field('tower_pole_height3');
					frm.refresh_field('building_height3');
				} else if(choice_num == 4){
					frm.doc.tower_pole_height4 = poles_height;
					 if(numb_of_pole == '1'){
				    	 frm.doc.tower_type_concat4 = numb_of_pole + ' Pole';
				    } else{
				    	 frm.doc.tower_type_concat4 = numb_of_pole + ' Poles';
				    }
				    frm.refresh_field('tower_type_concat4');
					frm.set_df_property('tower_pole_height4', 'hidden', 0)
					frm.set_df_property('tower_pole_height4', 'read_only', 1)
								
					frm.set_df_property('building_height4', 'hidden', 0);
					frm.set_df_property('building_height4', 'reqd', 1);

					frm.refresh_field('tower_pole_height4');
					frm.refresh_field('building_height4');
				}
				        
		},
		//---------------------------------------------------------------------------


		//-------------------------------------------------------------------------
		frm.check_range = function (frm,x, min, max) {
		    return ((x-min)*(x-max) <= 0);
		},
		
			//-----------------
		// frm.check_range = function (frm,x, min, max) {
		//     return ((x-min)*(x-max) <= 0);
		// },
		frm.Evaluat_Coordinate = function(frm,cord,name,type,choic_name){
				var cord_n = 0;
				cord_n = Number(cord);
				if (isNaN( cord_n ) ) {
					frappe.throw(__('<b>' + name + '</b> '+choic_name+' must be a float number'));
				}	

				if(type == 'lat'){
					if( ! frm.check_range(frm,cord_n,10.00,18.00)){
						frappe.throw(__('<b>'+ name + '</b> '+choic_name+' must be between 10.000 and 18.000'));
					}
				}

				if(type == 'long'){
					if( ! frm.check_range(frm,cord_n,40.00,55.00)){
						frappe.throw(__('<b>'+ name + '</b> '+choic_name+' must be between 40.000 and 55.000'));
					}
				}

			},


		frm.Evaluat_pole_height = function(frm,val,number_of_poles,choic_name){
			// var val = frm.doc.tower_pole_height;
			var val_n1 = 0;
			var val_n2 = 0;
			var val_n3 = 0;
			let pole_height = val.split(',');

			console.log('choice_num: '+choic_name+'. poole h: '+ pole_height[0] + '-' +  pole_height[1])
			if( number_of_poles== '1'){
				val_n1 = Number(pole_height);
				if (isNaN( val_n1 ) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' +' في '+choic_name+ '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' +' في '+choic_name+ '</b>. must be in range (4-15) m '));
				}

			} else if(number_of_poles == '2'){
				val_n1 = Number(pole_height[0]);
				val_n2 = Number(pole_height[1]);
				if (isNaN( val_n1) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' +' في '+choic_name+ '</b> must be a number'));
				}
				if (isNaN( val_n2) ) {
					frappe.throw(__('<b>' + 'Pole(2) Height' +' في '+choic_name+  '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' +' في '+choic_name+  '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n2,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(2) Height' +' في '+choic_name+  '</b>. must be in range (4-15) m '));
				}
				
			} else if(number_of_poles == '3'){
				val_n1 = Number(pole_height[0]);
				val_n2 = Number(pole_height[1]);
				val_n3 = Number(pole_height[2]);
				if (isNaN( val_n1) ) {
					frappe.throw(__('<b>' + 'Pole(1) Height' +' في '+choic_name+  '</b> must be a number'));
				}
				if (isNaN( val_n2) ) {
					frappe.throw(__('<b>' + 'Pole(2) Height' +' في '+choic_name+  '</b> must be a number'));
				}
				if (isNaN( val_n3) ) {
					frappe.throw(__('<b>' + 'Pole(3) Height' +' في '+choic_name+  '</b> must be a number'));
				}
				if( ! frm.check_range(frm,val_n1,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(1) Height' +' في '+choic_name+  '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n2,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(2) Height' +' في '+choic_name+  '</b>. must be in range (4-15) m '));
				}
				if( ! frm.check_range(frm,val_n3,4,15)){
					frappe.throw(__('Incorrect value in <b>'+ 'Pole(3) Height' +' في '+choic_name+ '</b>. must be in range (4-15) m '));
				}
			} 
			
		},
		frm.Evaluat_room_pole_height = function(frm,val,choic_name){
			// var val = frm.doc.tower_pole_height;
			var val_n = 0;
			
			val_n = Number(val);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Pole Height' + '</b> '+choic_name+' must be a number'));
			}
			if( ! frm.check_range(frm,val_n,4,15)){
				frappe.throw(__('Incorrect value in </b> '+choic_name+ ' Pole Height' + '</b>.must be in range (4-15) m '));
			}
			
		},

		frm.Evaluat_tower_height = function(frm,val,choic_name){
			// var val = frm.doc.tower_pole_height;
			var val_n = 0;
			val_n = Number(val);
			// frappe.msgprint(val_n)
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Tower Height' + '</b> '+choic_name+' must be a number'));
			}

			if( ! frm.check_range(frm,val_n,15,80)){
				frappe.throw(__('Incorrect value in <b>'+ 'Tower Height' + '</b> '+choic_name+'  must be in range (15-80) m '));
			}
			
		},


		frm.Evaluat_building_height = function(frm,val,choic_name){
			// var val = frm.doc.building_height;
			var val_n = 0;
			
			val_n = Number(val);
			if (isNaN( val_n ) ) {
				frappe.throw(__('<b>' + 'Building Height' + '</b> '+choic_name+'  must be a number'));
			}
			if( ! frm.check_range(frm,val_n,0,40)){
				frappe.throw(__('Incorrect value in <b>'+ 'Building Height' + '</b> '+choic_name+' .must be in range (0-40) m '));
			}
			
		},

		

		frm.how_many_time_site_surveyed = function(frm){
			
			if (frm.doc.survey_type == 'موقع جديد') {
				frm.set_df_property('how_many_time_site_surveyed', 'default', '1')

			

			} else if (frm.doc.survey_type == 'بديل موقع في الخدمات') {
			
			
				

			} else if (frm.doc.survey_type == "بديل موقع في المشاريع") {
					frm.set_df_property('old_sitename', 'options', 'SurveySites')

			} else {
					
			}
			frm.refresh_field('how_many_time_site_surveyed');
		},


		frm.check_tower_type1 = function(frm){
			frm.set_df_property('tower_pole_height1', 'hidden', 1)
				frm.set_df_property('building_height1', 'hidden', 1)
				frm.set_df_property('number_of_poles1', 'hidden', 1)
				frm.set_df_property('number_of_rooms1', 'hidden', 1)
				frm.set_df_property('sharing_tower_with1', 'hidden', 1)
				frm.set_df_property('specify_others1', 'hidden', 1)

				frm.set_df_property('tower_pole_height1', 'reqd', 0);
				frm.set_df_property('building_height1', 'reqd', 0);
				frm.set_df_property('number_of_poles1', 'reqd', 0);
				frm.set_df_property('number_of_rooms1', 'reqd', 0);
				frm.set_df_property('sharing_tower_with1', 'reqd', 0);
				frm.set_df_property('specify_others1', 'reqd', 0);
			//--------------------
			if(frm.doc.tower_type1 == 'Rooms+Pole' || frm.doc.tower_type1 == 'Pole'){
				frm.set_df_property('tower_pole_height1', 'label', 'Pole Height (m)')
			}else{
				frm.set_df_property('tower_pole_height1', 'label', 'Tower Height (m)')
			}
			//---------------------------
			if (frm.doc.tower_type1 == 'Tower') {
				frm.doc.tower_type_concat1 = 'Tower';
				
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('tower_pole_height1', 'reqd', 1)
			
			} 

			if (frm.doc.tower_type1 == 'Pole') {
				frm.set_df_property('number_of_poles1', 'hidden', 0)
				frm.set_df_property('number_of_poles1', 'reqd', 1)

				// hidden because it will be shown in number_of_pole event
				if(frm.doc.number_of_poles1){
					frm.set_df_property('building_height1', 'hidden', 0);
					frm.set_df_property('building_height1', 'reqd', 1);
				}
				if(frm.doc.tower_pole_height1){
					frm.set_df_property('tower_pole_height1', 'hidden', 0)
					frm.set_df_property('tower_pole_height1', 'reqd', 1)
				}
			
			} 
			if (frm.doc.tower_type1 == 'Rooms+Pole') {
				frm.set_df_property('number_of_rooms1', 'hidden', 0)
				frm.set_df_property('number_of_rooms1', 'reqd', 1)

				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				
				frm.set_df_property('tower_pole_height1', 'reqd', 1)
				
			} 


			if (frm.doc.tower_type1 == 'Sharing') {
				
				frm.set_df_property('sharing_tower_with1', 'hidden', 0)
				frm.set_df_property('sharing_tower_with1', 'reqd', 1)

			
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('tower_pole_height1', 'reqd', 1)
				
				}

			if (frm.doc.tower_type1 == 'Others') {
				frm.set_df_property('specify_others1', 'hidden', 0)
				frm.set_df_property('specify_others1', 'reqd', 1)
		
				frm.set_df_property('tower_pole_height1', 'hidden', 0)
				frm.set_df_property('tower_pole_height1', 'reqd', 1)
			} 
				
			frm.set_df_property('tower_pole_height1', 'read_only', 0)

			frm.refresh_field('tower_pole_height1');
			frm.refresh_field('building_height1');
			frm.refresh_field('number_of_poles1');
			frm.refresh_field('number_of_rooms1');
			frm.refresh_field('sharing_tower_with1');
			frm.refresh_field('specify_others1');

			frm.refresh_field('tower_type_concat1');

		},
		frm.check_tower_type2 = function(frm){
			frm.set_df_property('tower_pole_height2', 'hidden', 1)
				frm.set_df_property('building_height2', 'hidden', 1)
				frm.set_df_property('number_of_poles2', 'hidden', 1)
				frm.set_df_property('number_of_rooms2', 'hidden', 1)
				frm.set_df_property('sharing_tower_with2', 'hidden', 1)
				frm.set_df_property('specify_others2', 'hidden', 1)

				frm.set_df_property('tower_pole_height2', 'reqd', 0);
				frm.set_df_property('building_height2', 'reqd', 0);
				frm.set_df_property('number_of_poles2', 'reqd', 0);
				frm.set_df_property('number_of_rooms2', 'reqd', 0);
				frm.set_df_property('sharing_tower_with2', 'reqd', 0);
				frm.set_df_property('specify_others2', 'reqd', 0);
			//--------------------
			if(frm.doc.tower_type2 == 'Rooms+Pole' || frm.doc.tower_type2 == 'Pole'){
				frm.set_df_property('tower_pole_height2', 'label', 'Pole Height (m)')
			}else{
				frm.set_df_property('tower_pole_height2', 'label', 'Tower Height (m)')
			}
			//---------------------------
			if (frm.doc.tower_type2 == 'Tower') {
				frm.doc.tower_type_concat2 = 'Tower';
				
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('tower_pole_height2', 'reqd', 1)
			
			} 
			if (frm.doc.tower_type2 == 'Pole') {
				frm.set_df_property('number_of_poles2', 'hidden', 0)
				frm.set_df_property('number_of_poles2', 'reqd', 1)

				// hidden because it will be shown in number_of_pole event
				if(frm.doc.number_of_poles2){
					frm.set_df_property('building_height2', 'hidden', 0);
					frm.set_df_property('building_height2', 'reqd', 1);
				}
				if(frm.doc.tower_pole_height2){
					frm.set_df_property('tower_pole_height2', 'hidden', 0)
					frm.set_df_property('tower_pole_height2', 'reqd', 1)
				}
			
			} 
			if (frm.doc.tower_type2 == 'Rooms+Pole') {
				frm.set_df_property('number_of_rooms2', 'hidden', 0)
				frm.set_df_property('number_of_rooms2', 'reqd', 1)

				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('tower_pole_height2', 'label', 'Pole Height (m)')
				frm.set_df_property('tower_pole_height2', 'reqd', 1)
				
			} 
			

			if (frm.doc.tower_type2 == 'Sharing') {
				
				frm.set_df_property('sharing_tower_with2', 'hidden', 0)
				frm.set_df_property('sharing_tower_with2', 'reqd', 1)

			
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('tower_pole_height2', 'reqd', 1)
				
				}

			if (frm.doc.tower_type2 == 'Others') {
				frm.set_df_property('specify_others2', 'hidden', 0)
				frm.set_df_property('specify_others2', 'reqd', 1)
		
				frm.set_df_property('tower_pole_height2', 'hidden', 0)
				frm.set_df_property('tower_pole_height2', 'reqd', 1)
			} 
				
			frm.set_df_property('tower_pole_height2', 'read_only', 0)

			frm.refresh_field('tower_pole_height2');
			frm.refresh_field('building_height2');
			frm.refresh_field('number_of_poles2');
			frm.refresh_field('number_of_rooms2');
			frm.refresh_field('sharing_tower_with2');
			frm.refresh_field('specify_others2');

			frm.refresh_field('tower_type_concat2');
		},

		frm.check_tower_type3 = function(frm){
			frm.set_df_property('tower_pole_height3', 'hidden', 1)
				frm.set_df_property('building_height3', 'hidden', 1)
				frm.set_df_property('number_of_poles3', 'hidden', 1)
				frm.set_df_property('number_of_rooms3', 'hidden', 1)
				frm.set_df_property('sharing_tower_with3', 'hidden', 1)
				frm.set_df_property('specify_others3', 'hidden', 1)

				frm.set_df_property('tower_pole_height3', 'reqd', 0);
				frm.set_df_property('building_height3', 'reqd', 0);
				frm.set_df_property('number_of_poles3', 'reqd', 0);
				frm.set_df_property('number_of_rooms3', 'reqd', 0);
				frm.set_df_property('sharing_tower_with3', 'reqd', 0);
				frm.set_df_property('specify_others3', 'reqd', 0);
			//--------------------
			if(frm.doc.tower_type3 == 'Rooms+Pole' || frm.doc.tower_type3 == 'Pole'){
				frm.set_df_property('tower_pole_height3', 'label', 'Pole Height (m)')
			}else{
				frm.set_df_property('tower_pole_height3', 'label', 'Tower Height (m)')
			}
			//---------------------------
			if (frm.doc.tower_type3 == 'Tower') {
				frm.doc.tower_type_concat3 = 'Tower';
				
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('tower_pole_height3', 'reqd', 1)
			
			} 
			if (frm.doc.tower_type3 == 'Pole') {
				frm.set_df_property('number_of_poles3', 'hidden', 0)
				frm.set_df_property('number_of_poles3', 'reqd', 1)

				// hidden because it will be shown in number_of_pole event
				if(frm.doc.number_of_poles3){
					frm.set_df_property('building_height3', 'hidden', 0);
					frm.set_df_property('building_height3', 'reqd', 1);
				}
				if(frm.doc.tower_pole_height3){
					frm.set_df_property('tower_pole_height3', 'hidden', 0)
					frm.set_df_property('tower_pole_height3', 'reqd', 1)
				}
			
			} 
			if (frm.doc.tower_type3 == 'Rooms+Pole') {
				frm.set_df_property('number_of_rooms3', 'hidden', 0)
				frm.set_df_property('number_of_rooms3', 'reqd', 1)

				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('tower_pole_height3', 'label', 'Pole Height (m)')
				frm.set_df_property('tower_pole_height3', 'reqd', 1)
				
			} 
			

			if (frm.doc.tower_type3 == 'Sharing') {
				
				frm.set_df_property('sharing_tower_with3', 'hidden', 0)
				frm.set_df_property('sharing_tower_with3', 'reqd', 1)

			
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('tower_pole_height3', 'reqd', 1)
				
				}

			if (frm.doc.tower_type3 == 'Others') {
				frm.set_df_property('specify_others3', 'hidden', 0)
				frm.set_df_property('specify_others3', 'reqd', 1)
		
				frm.set_df_property('tower_pole_height3', 'hidden', 0)
				frm.set_df_property('tower_pole_height3', 'reqd', 1)
			} 
				
			frm.set_df_property('tower_pole_height3', 'read_only', 0)

			frm.refresh_field('tower_pole_height3');
			frm.refresh_field('building_height3');
			frm.refresh_field('number_of_poles3');
			frm.refresh_field('number_of_rooms3');
			frm.refresh_field('sharing_tower_with3');
			frm.refresh_field('specify_others3');

			frm.refresh_field('tower_type_concat3');
		},

		frm.check_tower_type4 = function(frm){
			frm.set_df_property('tower_pole_height4', 'hidden', 1)
				frm.set_df_property('building_height4', 'hidden', 1)
				frm.set_df_property('number_of_poles4', 'hidden', 1)
				frm.set_df_property('number_of_rooms4', 'hidden', 1)
				frm.set_df_property('sharing_tower_with4', 'hidden', 1)
				frm.set_df_property('specify_others4', 'hidden', 1)

				frm.set_df_property('tower_pole_height4', 'reqd', 0);
				frm.set_df_property('building_height4', 'reqd', 0);
				frm.set_df_property('number_of_poles4', 'reqd', 0);
				frm.set_df_property('number_of_rooms4', 'reqd', 0);
				frm.set_df_property('sharing_tower_with4', 'reqd', 0);
				frm.set_df_property('specify_others4', 'reqd', 0);
			//--------------------
			if(frm.doc.tower_type4 == 'Rooms+Pole' || frm.doc.tower_type4 == 'Pole'){
				frm.set_df_property('tower_pole_height4', 'label', 'Pole Height (m)')
			}else{
				frm.set_df_property('tower_pole_height4', 'label', 'Tower Height (m)')
			}
			//---------------------------
			if (frm.doc.tower_type4 == 'Tower') {
				frm.doc.tower_type_concat4 = 'Tower';
				
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('tower_pole_height4', 'reqd', 1)
			
			} 
			if (frm.doc.tower_type4 == 'Pole') {
				frm.set_df_property('number_of_poles4', 'hidden', 0)
				frm.set_df_property('number_of_poles4', 'reqd', 1)

				// hidden because it will be shown in number_of_pole event
				if(frm.doc.number_of_poles4){
					frm.set_df_property('building_height4', 'hidden', 0);
					frm.set_df_property('building_height4', 'reqd', 1);
				}
				if(frm.doc.tower_pole_height4){
					frm.set_df_property('tower_pole_height4', 'hidden', 0)
					frm.set_df_property('tower_pole_height4', 'reqd', 1)
				}
			
			} 
			if (frm.doc.tower_type4 == 'Rooms+Pole') {
				frm.set_df_property('number_of_rooms4', 'hidden', 0)
				frm.set_df_property('number_of_rooms4', 'reqd', 1)

				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('tower_pole_height4', 'label', 'Pole Height (m)')
				frm.set_df_property('tower_pole_height4', 'reqd', 1)
				
			} 
			
			if (frm.doc.tower_type4 == 'Sharing') {
				
				frm.set_df_property('sharing_tower_with4', 'hidden', 0)
				frm.set_df_property('sharing_tower_with4', 'reqd', 1)

			
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('tower_pole_height4', 'reqd', 1)
				
				}

			if (frm.doc.tower_type4 == 'Others') {
				frm.set_df_property('specify_others4', 'hidden', 0)
				frm.set_df_property('specify_others4', 'reqd', 1)
		
				frm.set_df_property('tower_pole_height4', 'hidden', 0)
				frm.set_df_property('tower_pole_height4', 'reqd', 1)
			} 
				
			frm.set_df_property('tower_pole_height4', 'read_only', 0)

			frm.refresh_field('tower_pole_height4');
			frm.refresh_field('building_height4');
			frm.refresh_field('number_of_poles4');
			frm.refresh_field('number_of_rooms4');
			frm.refresh_field('sharing_tower_with4');
			frm.refresh_field('specify_others4');

			frm.refresh_field('tower_type_concat4');

		},

		//---------- to set select of cchoice_contracted contracted in service department --------------------------
		frm.set_choice_contracted = function(frm){

			if (frm.doc.number_of_choices == '1') {
				frm.set_df_property('choice_contracted', 'options',['', '1'])
				
			} else if (frm.doc.number_of_choices == '2') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2'])
				
				
			} else if (frm.doc.number_of_choices == '3') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2', '3'])
				
				
			} else if (frm.doc.number_of_choices == '4') {
				frm.set_df_property('choice_contracted', 'options',['', '1', '2', '3', '4'])
				
				
			} else {
				frm.set_df_property('choice_contracted', 'options', [''])
				
			}


			frm.refresh_field('choice_contracted');
		},
		//-----------------------------end-------------------------------------------------------------------------

		//********************************************  required sectors fields ****************************************
		frm.reqd_fields_sec1 = function(frm){
			frm.set_df_property('tower_type1', 'reqd', 1)
			frm.set_df_property('longitude1', 'reqd', 1)
			frm.set_df_property('latitude1', 'reqd', 1)
			frm.set_df_property('choice_priority1', 'reqd', 1)
			frm.set_df_property('choice_image1', 'reqd', 1)
			
		},
		frm.reqd_fields_sec2 = function(frm){
			
			frm.set_df_property('tower_type2', 'reqd', 1)
			frm.set_df_property('longitude2', 'reqd', 1)
			frm.set_df_property('latitude2', 'reqd', 1)
			frm.set_df_property('choice_priority2', 'reqd', 1)
			frm.set_df_property('choice_image2', 'reqd', 1)
		},
		frm.reqd_fields_sec3 = function(frm){
			
			frm.set_df_property('tower_type3', 'reqd', 1)
			frm.set_df_property('longitude3', 'reqd', 1)
			frm.set_df_property('latitude3', 'reqd', 1)
			frm.set_df_property('choice_priority3', 'reqd', 1)
			frm.set_df_property('choice_image3', 'reqd', 1)
		},
		frm.reqd_fields_sec4 = function(frm){
			
			frm.set_df_property('tower_type4', 'reqd', 1)
			frm.set_df_property('longitude4', 'reqd', 1)
			frm.set_df_property('latitude4', 'reqd', 1)
			frm.set_df_property('choice_priority4', 'reqd', 1)
			frm.set_df_property('choice_image4', 'reqd', 1)
		},


		//------ clear field of sectors-----------------------
		frm.clear_fields_sec1 = function(frm){
			frm.doc.tower_type1 = '';
			frm.doc.number_of_poles1 = '';
			frm.doc.number_of_rooms1 = '';
			frm.doc.sharing_tower_with1 = '';
			frm.doc.tower_pole_height1 = '';
			frm.doc.building_height1 = '';
			frm.doc.longitude1 = '';
			frm.doc.latitude1 = '';
			frm.doc.choice_priority1 = '';
			frm.doc.choice_image1 = '';
			frm.doc.show_choice_image1 = '';
		},

		frm.clear_fields_sec2 = function(frm){
			frm.doc.tower_type2 = '';
			frm.doc.number_of_poles2 = '';
			frm.doc.number_of_rooms2 = '';
			frm.doc.sharing_tower_with2 = '';
			frm.doc.tower_pole_height2 = '';
			frm.doc.building_height2 = '';
			frm.doc.longitude2 = '';
			frm.doc.latitude2 = '';
			frm.doc.choice_priority2 = '';
			frm.doc.choice_image2 = '';
		},

		frm.clear_fields_sec3 = function(frm){
				frm.doc.tower_type3 = '';
			frm.doc.number_of_poles3 = '';
			frm.doc.number_of_rooms3 = '';
			frm.doc.sharing_tower_with3 = '';
			frm.doc.tower_pole_height3 = '';
			frm.doc.building_height3 = '';
			frm.doc.longitude3 = '';
			frm.doc.latitude3 = '';
			frm.doc.choice_priority3 = '';
			frm.doc.choice_image3 = '';
		},

		frm.clear_fields_sec4 = function(frm){
			frm.doc.tower_type4 = '';
			frm.doc.number_of_poles4 = '';
			frm.doc.number_of_rooms4 = '';
			frm.doc.sharing_tower_with4 = '';
			frm.doc.tower_pole_height4 = '';
			frm.doc.building_height4 = '';
			frm.doc.longitude4 = '';
			frm.doc.latitude4 = '';
			frm.doc.choice_priority4 = '';
			frm.doc.choice_image4 = '';
		},
		//--------------------------------------------------

		frm.chech_number_of_choice = function(frm){
			if (frm.doc.number_of_choices == '1') {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 1)
				frm.set_df_property('sec_brk_choice3', 'hidden', 1)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

				frm.reqd_fields_sec1(frm)

				frm.clear_fields_sec2(frm);
				frm.clear_fields_sec3(frm);
				frm.clear_fields_sec4(frm);
			} else if (frm.doc.number_of_choices == 2) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 1)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

				frm.reqd_fields_sec1(frm)
				frm.reqd_fields_sec2(frm)

				frm.clear_fields_sec3(frm);
				frm.clear_fields_sec4(frm);

			} else if (frm.doc.number_of_choices == 3) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 0)
				frm.set_df_property('sec_brk_choice4', 'hidden', 1)

				frm.reqd_fields_sec1(frm)
				frm.reqd_fields_sec2(frm)
				frm.reqd_fields_sec2(frm)

				frm.clear_fields_sec4(frm);

			} else if (frm.doc.number_of_choices == 4) {
				frm.set_df_property('sec_brk_choice1', 'hidden', 0)
				frm.set_df_property('sec_brk_choice2', 'hidden', 0)
				frm.set_df_property('sec_brk_choice3', 'hidden', 0)
				frm.set_df_property('sec_brk_choice4', 'hidden', 0)

				frm.reqd_fields_sec1(frm)
				frm.reqd_fields_sec2(frm)
				frm.reqd_fields_sec3(frm)
				frm.reqd_fields_sec4(frm)

				

			} else {

				// frm.reqd_fields_sec1(frm)

			}
			frm.refresh_field('sec_brk_choice1');
			frm.refresh_field('sec_brk_choice2');
			frm.refresh_field('sec_brk_choice3');
			frm.refresh_field('sec_brk_choice4');
			// console.log("check number of choice function");

			frm.set_choice_contracted(frm);
		},

		frm.show_hide_old_site_name = function(frm){
			if (frm.doc.survey_type == 'بديل موقع في الخدمات') {
				frm.set_df_property('old_sitename', 'reqd',1)
				frm.set_df_property('old_sitename', 'hidden', 0)
				frm.set_df_property('old_sitename', 'options', 'NewSites')

				frm.set_query("old_sitename", function(){
					return {
						"filters": [
						["NewSites", "is_replaced", "=", ""]
						]
					}
				});		

			} else if (frm.doc.survey_type == "بديل موقع في المشاريع") {
				frm.set_df_property('old_sitename', 'reqd',1)
				frm.set_df_property('old_sitename', 'hidden', 0)
					frm.set_df_property('old_sitename', 'options', 'SurveySites2')

			} else if (frm.doc.survey_type == "بديل موقع عامل") {
				frm.set_df_property('old_sitename', 'reqd',1)
				frm.set_df_property('old_sitename', 'hidden', 0)
					frm.set_df_property('old_sitename', 'options', 'Working_Sites')

			}else {
				frm.set_df_property('old_sitename', 'hidden', 1)	
				frm.set_df_property('old_sitename', 'reqd',0)			
			}

		},
		//--------------------End -------------------------------------------------------


		frm.show_hide_site_name_section = function(frm){
			if (frm.doc.survey_type == 'موقع جديد') {
				frm.set_df_property('sec_brk1', 'hidden', 0)	
		
				frm.set_df_property('section_break_engineer_info', 'hidden', 0)	
				frm.set_df_property('map_section', 'hidden', 0)	
				frm.set_df_property('evaluate_section', 'hidden', 0)	
				frm.set_df_property('service_section', 'hidden', 0)	
				frm.set_df_property('additional_info_sec', 'hidden', 0)	

				// frm.set_df_property('sec_brk_choice1', 'hidden', 0)	
				// frm.set_df_property('sec_brk_choice2', 'hidden', 0)	
				// frm.set_df_property('sec_brk_choice3', 'hidden', 0)	
				// frm.set_df_property('sec_brk_choice4', 'hidden', 0)	


			} else if (frm.doc.survey_type) {
				if (frm.doc.old_sitename) {
					
					frm.set_df_property('sec_brk1', 'hidden', 0)
					frm.set_df_property('section_break_engineer_info', 'hidden', 0)	
					frm.set_df_property('map_section', 'hidden', 0)	
					frm.set_df_property('evaluate_section', 'hidden', 0)	
					frm.set_df_property('service_section', 'hidden', 0)	
					frm.set_df_property('additional_info_sec', 'hidden', 0)	

					// frm.set_df_property('sec_brk_choice1', 'hidden', 0)	
					// frm.set_df_property('sec_brk_choice2', 'hidden', 0)	
					// frm.set_df_property('sec_brk_choice3', 'hidden', 0)	
					// frm.set_df_property('sec_brk_choice4', 'hidden', 0)	

					if(frm.doc.survey_type == 'بديل موقع في الخدمات'){
						// ----------------------------- get doc by name------------------
						frappe.db.get_doc('NewSites', frm.doc.old_sitename)
				   		 .then(doc => {
				        	// console.log(doc.name)
				        	frm.doc.site_name = doc.site_name;
				        	frm.doc.site_name_arabic = doc.site_name_arabic;
				        	frm.doc.site_importance = doc.site_importance;
				        	frm.doc.government2 = doc.government2;
				        	frm.doc.modairiah = doc.modairiah;
				        	frm.doc.area_name = doc.area_name;
				        	frm.doc.area_type = doc.area_type;
				        	frm.doc.sun_plate = doc.sun_plate;
				        	frm.doc.zone = doc.zone;

				        	frm.refresh_field('site_name');
							frm.refresh_field('site_name_arabic');
							frm.refresh_field('site_importance');
							frm.refresh_field('government2');
							frm.refresh_field('modairiah');
							frm.refresh_field('area_name');
							frm.refresh_field('area_type');
							frm.refresh_field('sun_plate');
							frm.refresh_field('zone');
				    	})
				   		 //---------------------------------------------------------------

						


					} else if(frm.doc.survey_type == ''){

					}
				}
				else {

					frm.set_df_property('sec_brk1', 'hidden', 1)

					frm.set_df_property('section_break_engineer_info', 'hidden', 1)	
					frm.set_df_property('map_section', 'hidden', 1)	
					frm.set_df_property('evaluate_section', 'hidden', 1)	
					frm.set_df_property('service_section', 'hidden', 1)	


					// frm.set_df_property('sec_brk_choice1', 'hidden', 1)	
					// frm.set_df_property('sec_brk_choice2', 'hidden', 1)	
					// frm.set_df_property('sec_brk_choice3', 'hidden', 1)	
					// frm.set_df_property('sec_brk_choice4', 'hidden', 1)	
					frm.set_df_property('additional_info_sec', 'hidden', 1)	
				}

			}else {
				frm.set_df_property('sec_brk1', 'hidden', 1)

				frm.set_df_property('section_break_engineer_info', 'hidden', 1)	
				frm.set_df_property('map_section', 'hidden', 1)	
				frm.set_df_property('evaluate_section', 'hidden', 1)	
				frm.set_df_property('service_section', 'hidden', 1)	
				frm.set_df_property('additional_info_sec', 'hidden', 1)	


				// frm.set_df_property('sec_brk_choice1', 'hidden', 1)	
				// frm.set_df_property('sec_brk_choice2', 'hidden', 1)	
				// frm.set_df_property('sec_brk_choice3', 'hidden', 1)	
				// frm.set_df_property('sec_brk_choice4', 'hidden', 1)	
							
			}

			frm.refresh_field('sec_brk1');
			frm.refresh_field('section_break_engineer_info');
			frm.refresh_field('map_section');
			frm.refresh_field('evaluate_section');
			frm.refresh_field('service_section');
			frm.refresh_field('additional_info_sec');

			frm.refresh_field('sec_brk_choice1');
			frm.refresh_field('sec_brk_choice2');
			frm.refresh_field('sec_brk_choice3');
			frm.refresh_field('sec_brk_choice4');

			

		},
		//--------------------End -------------------------------------------------------
				


   		//------------------------------------------------------------------------------------------------------

		frm.contract_status_onChange = function(frm) {
				if(frm.doc.contract_status == 'تم توقيع العقد'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 0)

					frm.set_df_property('area_contracted', 'hidden', 0)
					frm.set_df_property('road_to_site_ready', 'hidden', 0)
					frm.set_df_property('elect_generator_place', 'hidden', 0)
					frm.set_df_property('elect_generator_area', 'hidden', 0)
					frm.set_df_property('general_elect_available', 'hidden', 0)
					frm.set_df_property('elect_off_time', 'hidden', 0)

				} else if(frm.doc.contract_status == 'جاري التفاوض'){
					frm.set_df_property('contract_failed_reason', 'hidden', 1)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				} else if(frm.doc.contract_status == 'فشل التفاوض'){
					frm.set_df_property('contract_failed_reason', 'hidden', 0)
					frm.set_df_property('choice_contracted', 'hidden', 1)
					frm.set_df_property('area_contracted', 'hidden', 1)
					frm.set_df_property('road_to_site_ready', 'hidden', 1)
					frm.set_df_property('elect_generator_place', 'hidden', 1)
					frm.set_df_property('elect_generator_area', 'hidden', 1)
					frm.set_df_property('general_elect_available', 'hidden', 1)
					frm.set_df_property('elect_off_time', 'hidden', 1)

				}

		}
	
	},
	// ##############################################  end setup ################################################





	// ####################################################  Refresh ################################################
	 refresh: function(frm) {
	 	// frm.doc.name2 = frm.doc.name;
	 	// frm.refresh_field('name2')
	 	// frm.doc.name4 = frm.doc.name;
	 	// frm.refresh_field('name4')
	 	// frm.doc.survey_code = frm.doc.name;
	 	// frm.refresh_field('survey_code')
	 	// frappe.msgprint(__('refresh'));
		//-------------- disable some field if user role is diff-------------------------

		frm.Role_profile_function(frm)
		
	 	frm.chech_number_of_choice(frm);
	 	frm.show_hide_old_site_name(frm);
	 	frm.show_hide_site_name_section(frm);
	 	// frm.show_hide_engineer_info_section(frm);

		//---------------------------------------End----------------------------------------------

		
		// ----------- show hidden field if they have info --------------------------------------
		frm.check_tower_type1(frm)
		frm.check_tower_type2(frm)
		frm.check_tower_type3(frm)
		frm.check_tower_type4(frm)
		frm.contract_status_onChange(frm)
			
		//---------------------end-----------------------------------------------------





	
	 },
// #####################################  End Refresh ######################################


	//-------------- Show/Hide old_sitename based on ---------------------------------
	survey_type: function(frm){
		frm.doc.old_sitename = ''
		frm.show_hide_old_site_name(frm);
		frm.show_hide_site_name_section(frm)

		// //----reset the fields in filter
		// frm.doc.evaluate = '';
		// frm.refresh_field('evaluate');
		// frm.doc.contract_status = '';
		// frm.refresh_field('contract_status');
		console.log(frm.doc.name)
		console.log(frm.doc.survey_code)
		if(frm.doc.name != frm.doc.survey_code)
		{
				frm.doc.contract_status = '';
			frm.refresh_field('contract_status');
			frm.doc.site_importance = '';
			frm.refresh_field('site_importance');
			frm.doc.number_of_choices = '';
			frm.refresh_field('number_of_choices');
			frm.doc.government2 = '';
			frm.refresh_field('government2');
			frm.doc.modairiah = '';
			frm.refresh_field('modairiah');
			frm.doc.area_name = '';
			frm.refresh_field('area_name');
			frm.doc.area_type = '';
			frm.refresh_field('area_type');
			frm.doc.sun_plate = '';
			frm.refresh_field('sun_plate');
			frm.doc.zone = '';
			frm.refresh_field('zone');

			frm.doc.tower_type1 = '';
			frm.refresh_field('tower_type1');
			frm.doc.number_of_poles1 = '';
			frm.refresh_field('number_of_poles1');
			frm.doc.sharing_tower_with1 = '';
			frm.refresh_field('sharing_tower_with1');
			frm.doc.number_of_rooms1 = '';
			frm.refresh_field('number_of_rooms1');
			frm.doc.tower_pole_height1 = '';
			frm.refresh_field('tower_pole_height1');
			frm.doc.building_height1 = '';
			frm.refresh_field('building_height1');
			frm.doc.longitude1 = '';
			frm.refresh_field('longitude1');
			frm.doc.latitude1 = '';
			frm.refresh_field('latitude1');
			frm.doc.choice_priority1 = '';
			frm.refresh_field('choice_priority1');
			frm.doc.choice_image1 = '';
			frm.refresh_field('choice_image1');
			frm.doc.show_choice_image1 = '';
			frm.refresh_field('show_choice_image1');

				frm.doc.tower_type2 = '';
			frm.refresh_field('tower_type2');
			frm.doc.number_of_poles2 = '';
			frm.refresh_field('number_of_poles2');
			frm.doc.sharing_tower_with2 = '';
			frm.refresh_field('sharing_tower_with2');
			frm.doc.number_of_rooms2 = '';
			frm.refresh_field('number_of_rooms2');
			frm.doc.tower_pole_height2 = '';
			frm.refresh_field('tower_pole_height2');
			frm.doc.building_height2 = '';
			frm.refresh_field('building_height2');
			frm.doc.longitude2 = '';
			frm.refresh_field('longitude2');
			frm.doc.latitude2 = '';
			frm.refresh_field('latitude2');
			frm.doc.choice_priority2 = '';
			frm.refresh_field('choice_priority2');
			frm.doc.choice_image2 = '';
			frm.refresh_field('choice_image2');
			frm.doc.show_choice_image2 = '';
			frm.refresh_field('show_choice_image2');

				frm.doc.tower_type3 = '';
			frm.refresh_field('tower_type3');
			frm.doc.number_of_poles1 = '';
			frm.refresh_field('number_of_poles3');
			frm.doc.sharing_tower_with3 = '';
			frm.refresh_field('sharing_tower_with3');
			frm.doc.number_of_rooms3 = '';
			frm.refresh_field('number_of_rooms3');
			frm.doc.tower_pole_height3 = '';
			frm.refresh_field('tower_pole_height3');
			frm.doc.building_height3 = '';
			frm.refresh_field('building_height3');
			frm.doc.longitude3 = '';
			frm.refresh_field('longitude3');
			frm.doc.latitude3 = '';
			frm.refresh_field('latitude3');
			frm.doc.choice_priority3 = '';
			frm.refresh_field('choice_priority3');
			frm.doc.choice_image3 = '';
			frm.refresh_field('choice_image3');
			frm.doc.show_choice_image3 = '';
			frm.refresh_field('show_choice_image3');

				frm.doc.tower_type4 = '';
			frm.refresh_field('tower_type4');
			frm.doc.number_of_poles4 = '';
			frm.refresh_field('number_of_poles4');
			frm.doc.sharing_tower_with4 = '';
			frm.refresh_field('sharing_tower_with4');
			frm.doc.number_of_rooms4 = '';
			frm.refresh_field('number_of_rooms4');
			frm.doc.tower_pole_height4 = '';
			frm.refresh_field('tower_pole_height4');
			frm.doc.building_height4 = '';
			frm.refresh_field('building_height4');
			frm.doc.longitude4 = '';
			frm.refresh_field('longitude4');
			frm.doc.latitude4 = '';
			frm.refresh_field('latitude4');
			frm.doc.choice_priority4 = '';
			frm.refresh_field('choice_priority4');
			frm.doc.choice_image4 = '';
			frm.refresh_field('choice_image4');
			frm.doc.show_choice_image4 = '';
			frm.refresh_field('show_choice_image4');

			frm.doc.engineer_name = '';
			frm.refresh_field('engineer_name');
			frm.doc.engineer_phone = '';
			frm.refresh_field('engineer_phone');
			frm.doc.survey_date = '';
			frm.refresh_field('survey_date');
			frm.doc.engineer_notes = '';
			frm.refresh_field('engineer_notes');

			frm.doc.evaluate = '';
			frm.refresh_field('evaluate');
			frm.doc.evaluation_note = '';
			frm.refresh_field('evaluation_note');

			frm.doc.contract_status = '';
			frm.refresh_field('contract_status');
			frm.doc.contract_failed_reason = '';
			frm.refresh_field('contract_failed_reason');
			frm.doc.choice_contracted = '';
			frm.refresh_field('choice_contracted');
			frm.doc.area_contracted = '';
			frm.refresh_field('area_contracted');
			frm.doc.road_to_site_ready = '';
			frm.refresh_field('road_to_site_ready');
			frm.doc.elect_generator_place = '';
			frm.refresh_field('elect_generator_place');
			frm.doc.elect_generator_area = '';
			frm.refresh_field('elect_generator_area');
			frm.doc.owner_name = '';
			frm.refresh_field('owner_name');
			frm.doc.owner_phone = '';
			frm.refresh_field('owner_phone');
			frm.doc.owner_address = '';
			frm.refresh_field('owner_address');
			frm.doc.general_elect_available = '';
			frm.refresh_field('general_elect_available');
			frm.doc.elect_off_time = '';
			frm.refresh_field('elect_off_time');
			frm.doc.contract_by = '';
			frm.refresh_field('contract_by');
			frm.doc.contracted_by_phone = '';
			frm.refresh_field('contracted_by_phone');
			frm.doc.contract_date = '';
			frm.refresh_field('contract_date');
			frm.doc.contract_note = '';
			frm.refresh_field('contract_note');



			frm.doc.is_delivered = '';
			frm.refresh_field('is_delivered');
			frm.doc.is_replaced = '';
			frm.refresh_field('is_replaced');


		}
		

	},
   //---------------------------------------End----------------------------------------------

//-------------- Show/Hide _sitename section based on ---------------------------------
	old_sitename: function(frm){
		
		frm.show_hide_site_name_section(frm)
	},
   //---------------------------------------End----------------------------------------------
 
			
	// //-------------- ---------------------------------
	// site_name: function(frm){
	// 	// frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------

	// //-------------- ---------------------------------
	// site_name_arabic: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------
	

	// //-------------- ---------------------------------
	// site_importance: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------


	// //-------------- ---------------------------------
	// modairiah: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------


	// //-------------- ---------------------------------
	// area_name: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------


	// //-------------- ---------------------------------
	// area_type: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------


	// //-------------- ---------------------------------
	// sun_plate: function(frm){
	// 	frm.show_hide_engineer_info_section(frm);
	// },
	// //-------------- ---------------------------------


	//-------------- ---------------------------------
	government2: function(frm){
		// frm.show_hide_engineer_info_section(frm)
		frm.set_query("modairiah", function(){
					return {
						"filters": {
						"government": frm.doc.government2
						}
					};
				}),
		frm.doc.modairiah=''
		frm.doc.area_name=''
		frm.refresh_field('modairiah');
		frm.refresh_field('area_name');

	},
   //---------------------------------------End----------------------------------------------


   //--------------------------------------------------------------------------------------
   number_of_poles1: function(frm){
	   	if(frm.doc.number_of_poles1){
	   		var choice_num = 1;
	   		frm.dialog_pole_height(frm,frm.doc.number_of_poles1,choice_num)
	   	}
	},
	//--------------------------------------------------------------------------------------
  

   //--------------------------------------------------------------------------------------
  number_of_rooms1: function(frm){
  	if(frm.doc.number_of_rooms1 == '1'){
  		frm.doc.tower_type_concat1 = '1Room+Pole';
  	}else{
  		frm.doc.tower_type_concat1 = frm.doc.number_of_rooms1 + 'Rooms+Pole'
  	}
  	
  	console.log('number_of_rooms1: '+ frm.doc.number_of_rooms1)
  	frm.refresh_field('tower_type_concat1');

  	 frm.set_df_property('tower_pole_height1', 'label', 'Pole Height (m)')
  	frm.set_df_property('tower_pole_height1', 'hidden', 0)
	frm.set_df_property('tower_pole_height1', 'reqd', 1)
	frm.refresh_field('tower_pole_height1');
  },
   //--------------------------------------------------------------------------------------

	//--------------------------------------------------------------------------------------
  sharing_tower_with1: function(frm){
  	if(frm.doc.sharing_tower_with1 == 'Others'){
  		var choice_num =1;
  		frm.dialog_sharing_with_others(frm,1);
  	}else{
  		frm.doc.tower_type_concat1 = 'Sharing with ' + frm.doc.sharing_tower_with1;
	  	frm.refresh_field('tower_type_concat1');

	  	frm.set_df_property('tower_pole_height1', 'hidden', 0)
		frm.set_df_property('tower_pole_height1', 'reqd', 1)
  	}
  
  },
   //--------------------------------------------------------------------------------------
  
  

  //--------------------------------------------------------------------------------------
  specify_others1: function(frm){
  	frm.doc.tower_type_concat1 = frm.doc.specify_others1;
  	frm.refresh_field('tower_type_concat1');

  
  },
   //--------------------------------------------------------------------------------------
  
   //22222222222222222222222222222222222222222222222
    //--------------------------------------------------------------------------------------
   number_of_poles2: function(frm){
	   	if(frm.doc.number_of_poles2){
	   		var choice_num = 2;
	   		frm.dialog_pole_height(frm,frm.doc.number_of_poles2,choice_num)
	   	}
	},
	//--------------------------------------------------------------------------------------
  

   //--------------------------------------------------------------------------------------
  number_of_rooms2: function(frm){
  	if(frm.doc.number_of_rooms2 == '1'){
  		frm.doc.tower_type_concat2 = '1Room+Pole';
  	}else{
  		frm.doc.tower_type_concat2 = frm.doc.number_of_rooms2 + 'Rooms+Pole'
  	}
  	
  
  	frm.refresh_field('tower_type_concat2');

  	 frm.set_df_property('tower_pole_height2', 'label', 'Pole Height (m)')
  	frm.set_df_property('tower_pole_height2', 'hidden', 0)
	frm.set_df_property('tower_pole_height2', 'reqd', 1)
	frm.refresh_field('tower_pole_height2');
  },
   //--------------------------------------------------------------------------------------

	//--------------------------------------------------------------------------------------
  sharing_tower_with2: function(frm){
  	if(frm.doc.sharing_tower_with2 == 'Others'){
  		var choice_num =2;
  		frm.dialog_sharing_with_others(frm,2);
  	}else{
  		frm.doc.tower_type_concat2 = 'Sharing with ' + frm.doc.sharing_tower_with2;
	  	frm.refresh_field('tower_type_concat2');

	  	frm.set_df_property('tower_pole_height2', 'hidden', 0)
		frm.set_df_property('tower_pole_height2', 'reqd', 1)
  	}
  
  },
   //--------------------------------------------------------------------------------------
  
  

  //--------------------------------------------------------------------------------------
  specify_others2: function(frm){
  	frm.doc.tower_type_concat2 = frm.doc.specify_others2;
  	frm.refresh_field('tower_type_concat2');

  
  },
   //--------------------------------------------------------------------------------------
  


  //3333333333333333333
    //--------------------------------------------------------------------------------------
   number_of_poles3: function(frm){
	   	if(frm.doc.number_of_poles3){
	   		var choice_num = 3;
	   		frm.dialog_pole_height(frm,frm.doc.number_of_poles3,choice_num)
	   	}
	},
	//--------------------------------------------------------------------------------------
  

   //--------------------------------------------------------------------------------------
  number_of_rooms3: function(frm){
  	if(frm.doc.number_of_rooms3 == '1'){
  		frm.doc.tower_type_concat3 = '1Room+Pole';
  	}else{
  		frm.doc.tower_type_concat3 = frm.doc.number_of_rooms3 + 'Rooms+Pole'
  	}
  	
  
  	frm.refresh_field('tower_type_concat3');

  	 frm.set_df_property('tower_pole_height3', 'label', 'Pole Height (m)')
  	frm.set_df_property('tower_pole_height3', 'hidden', 0)
	frm.set_df_property('tower_pole_height3', 'reqd', 1)
	frm.refresh_field('tower_pole_height3');
  },
   //--------------------------------------------------------------------------------------

	//--------------------------------------------------------------------------------------
  sharing_tower_with3: function(frm){
  	if(frm.doc.sharing_tower_with3 == 'Others'){
  		var choice_num =3;
  		frm.dialog_sharing_with_others(frm,3);
  	}else{
  		frm.doc.tower_type_concat3 = 'Sharing with ' + frm.doc.sharing_tower_with3;
	  	frm.refresh_field('tower_type_concat3');

	  	frm.set_df_property('tower_pole_height3', 'hidden', 0)
		frm.set_df_property('tower_pole_height3', 'reqd', 1)
  	}
  
  },
   //--------------------------------------------------------------------------------------
  
  

  //--------------------------------------------------------------------------------------
  specify_others3: function(frm){
  	frm.doc.tower_type_concat3 = frm.doc.specify_others3;
  	frm.refresh_field('tower_type_concat3');

  
  },
   //--------------------------------------------------------------------------------------
  

//4444444444444444444444444
    //--------------------------------------------------------------------------------------
   number_of_poles4: function(frm){
	   	if(frm.doc.number_of_poles4){
	   		var choice_num = 4;
	   		frm.dialog_pole_height(frm,frm.doc.number_of_poles4,choice_num)
	   	}
	},
	//--------------------------------------------------------------------------------------
  

   //--------------------------------------------------------------------------------------
  number_of_rooms4: function(frm){
  	if(frm.doc.number_of_rooms4 == '1'){
  		frm.doc.tower_type_concat4 = '1Room+Pole';
  	}else{
  		frm.doc.tower_type_concat4 = frm.doc.number_of_rooms4 + 'Rooms+Pole'
  	}
  	
  
  	frm.refresh_field('tower_type_concat4');

  	 frm.set_df_property('tower_pole_height4', 'label', 'Pole Height (m)')
  	frm.set_df_property('tower_pole_height4', 'hidden', 0)
	frm.set_df_property('tower_pole_height4', 'reqd', 1)
	frm.refresh_field('tower_pole_height4');
  },
   //--------------------------------------------------------------------------------------

	//--------------------------------------------------------------------------------------
  sharing_tower_with4: function(frm){
  	if(frm.doc.sharing_tower_with4 == 'Others'){
  		var choice_num =4;
  		frm.dialog_sharing_with_others(frm,4);
  	}else{
  		frm.doc.tower_type_concat4 = 'Sharing with ' + frm.doc.sharing_tower_with4;
	  	frm.refresh_field('tower_type_concat4');

	  	frm.set_df_property('tower_pole_height4', 'hidden', 0)
		frm.set_df_property('tower_pole_height4', 'reqd', 1)
  	}
  
  },
   //--------------------------------------------------------------------------------------
  
  

  //--------------------------------------------------------------------------------------
  specify_others4: function(frm){
  	frm.doc.tower_type_concat4 = frm.doc.specify_others4;
  	frm.refresh_field('tower_type_concat4');

  
  },
   //--------------------------------------------------------------------------------------
  



//-------------- Show/Hide choices based on choice number---------------------------------
		number_of_choices: function(frm){

			frm.chech_number_of_choice(frm);
			// frm.show_hide_engineer_info_section(frm);

		},
//---------------------------------------End----------------------------------------------


//-------------- contract_status---------------------------------
		contract_status: function(frm){

			frm.contract_status_onChange(frm);
			

		},
//---------------------------------------End----------------------------------------------




//-------------- Show/Hide Tower Info ---------------------------------
		tower_type1: function(frm){
			frm.doc.tower_pole_height1 = ''
			frm.doc.building_height1 = ''
			frm.doc.number_of_poles1 = ''
			frm.doc.number_of_rooms1 = ''
			frm.doc.sharing_tower_with1 = ''
			frm.check_tower_type1(frm);
			
		},
		tower_type2: function(frm){
			frm.doc.tower_pole_height2 = ''
			frm.doc.building_height2 = ''
			frm.doc.number_of_poles2 = ''
			frm.doc.number_of_rooms1 = ''
			frm.doc.sharing_tower_with2 = ''
			frm.check_tower_type2(frm);
			
		},
		tower_type3: function(frm){
			frm.doc.tower_pole_height3 = ''
			frm.doc.building_height3 = ''
			frm.doc.number_of_poles3 = ''
			frm.doc.number_of_rooms3 = ''
			frm.doc.sharing_tower_with3 = ''
			frm.check_tower_type3(frm);
			
		},
		tower_type4: function(frm){
			frm.doc.tower_pole_height4 = ''
			frm.doc.building_height4 = ''
			frm.doc.number_of_poles4 = ''
			frm.doc.number_of_rooms4 = ''
			frm.doc.sharing_tower_with4 = ''
			frm.check_tower_type4(frm);
			
		},


		contract_by: function(frm){
			frappe.db.get_doc('contractor', frm.doc.contract_by)
				   		 .then(doc => {
				        	// console.log(doc.name)
				        	frm.doc.contracted_by_phone = doc.phone;
				        

							frm.refresh_field('contracted_by_phone');
				    	})
		},

		engineer_name: function(frm){
			frappe.db.get_doc('engineer', frm.doc.engineer_name)
				   		 .then(doc => {
				        	// console.log(doc.name)
				        	frm.doc.engineer_phone = doc.phone;
				        

							frm.refresh_field('engineer_phone');
				    	})
		},
//---------------------------------------End----------------------------------------------




//-------------- Sgeolocation_map --------------------------------------------------
		geolocation_map: function(frm){
			console.log(JSON.parse(frm.doc.geolocation_map));
			
			// frm.doc.geolocation_map.features[0] = "FeatureCollection";
			// frm.doc.geolocation_map.feature.type = "Feature";
			// frm.doc.geolocation_map.feature.geometry = "Feature";
			// frm.doc.geolocation_map.feature.type = "Feature";
			// frm.doc.geolocation_map.feature.type = "Feature";

		},
//---------------------------------------End----------------------------------------------

//-------------- see in Map----------------------------------
		see_in_map: function(frm){
			if (frm.doc.see_in_map == 'Yes'){
				 frm.set_df_property('geolocation_map', 'hidden', 0)
	 		
				if (frm.doc.number_of_choices == '1') {
					var site_name = frm.doc.site_name + "_1";
					console.log("see_in_map: "+ site_name);
						var lat_1 = frm.doc.latitude1;
						
						var long_1 = frm.doc.longitude1;
					 	var map = frm.get_field("geolocation_map").map;
						var latlng1 = L.latLng({'lat': lat_1, 'lng': long_1});
						var marker1 = L.marker(latlng1);
			
						map.flyTo(latlng1, map.getZoom());
						marker1.addTo(map);
						marker1.bindPopup(site_name).openPopup();

						frm.refresh_field('geolocation_map');
			
			} else if (frm.doc.number_of_choices == 2) {
			
			} else if (frm.doc.number_of_choices == 3) {
				
			} else if (frm.doc.number_of_choices == 4) {
				
			} else {

			}

			}
		},
//---------------------------------------End----------------------------------------------


// #################### onload_post_render #################################################

	// onload_post_render: function(frm) {
	// 	frm.add_custom_button('Create KML onload_post_render', ()=>{
	//   			frappe.msgprint(__('KML'));
	//   	})
	// },

// #################### END onload_post_render #################################################

// #################### onLoad #################################################
	 onload: function(frm) {
		// frm.set_df_property('old_sitename', 'reqd', (survey_type == 'بديل موقع في الخدمات') ? 1 : 0)
	


	 	

	 	
	 },

	 // #################### END onload################################################



	// #################### after save #################################################
 	after_save: function(frm){

	  
	},
	// #################### END after save #################################################


	// #################### befor save #################################################
	before_save: function(frm){


	  	frm.doc.see_in_map = 'No'
	  	if(frm.doc.survey_code){
	  		frm.doc.survey_code= frm.doc.name;
	  		frm.refresh_field('survey_code')
	  	}
	  	if(!frm.doc.survey_code){
		  	if (frm.doc.government2) {
		  		frappe.call({
		  		method: "planning_app.planning_app.doctype.newsites.myapi.get_government_info",
		  		args: {'city': frm.doc.government2},
		  		callback: function(r) {
		  			console.log(r)
		  			if(r.message.length>0){
		  				if(frm.doc.survey_type == 'موقع جديد')
		  				{
		  					let city_code = r.message[0].code;
		  					let last_code = r.message[0].last_code;
		  					let used_code_num = Number(last_code) + 1;
		  					let used_code= city_code + used_code_num + '-1';
		  					frm.doc.survey_code = used_code;

		  					frm.call({
		  						method: "planning_app.planning_app.doctype.newsites.myapi.set_last_code",
		  						args: {'name': frm.doc.government2, 'last_code': used_code_num},
		  						callback: function(r) {
		  						}
		  					})
		  					console.log(last_code)

		  				}
		  				else if(frm.doc.survey_type == 'بديل موقع في الخدمات'){
		  					let str = frm.doc.old_sitename;
		  					let curr_code = str.substring(0, 8);
		  					let old_num = str.substring(str.length - 1);
		  					let curr_num = Number(old_num) + 1;
		  					let used_code= curr_code + curr_num ;
		  					frm.doc.survey_code = used_code;



		  					frappe.call({
		  						method: "planning_app.planning_app.doctype.newsites.myapi.set_is_replaced_of_old_site",
		  						args: {'old_sitename': frm.doc.old_sitename},
		  						callback: function(r) {
		  						}
		  					})

		  				}




		  			}

		  		}
		  	})
		  	//----------------end call----------------------------
		  	}
	  	}
	  	
	  	


	  	//-----------------check the data type of long and lat---------------------------
	  	// if (frm.doc.number_of_choices == '1') {
	  	// 	console.log(typ(frm.doc.longitude1))
	  		
	  	// }
	 
	  	// else if (frm.doc.number_of_choices == '2') {
	  	// }
	  	// else if (frm.doc.number_of_choices == '3') {
	  	// }
	  	// else if (frm.doc.number_of_choices == '4') {
	  	// }
	  	//-------------------------------end--------------------------------------------
	  },
	// #################### end  befor save #################################################

//=============================================== validate =============================================================
	validate: function(frm){
		if(frm.doc.number_of_choices == '1'){
			frm.Evaluat_Coordinate(frm,frm.doc.longitude1,'Longitude1','long','في الخيار الاول');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude1,'Latitude1','lat','في الخيار الاول');

			//---------------
			if(frm.doc.tower_type1 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height1,frm.doc.number_of_poles1,'الخيار الاول');
			} else if(frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			}
			if(frm.doc.tower_type1 == 'Pole' || frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height1,'في الخيار الاول');
			} 
			//------------------
		}
		//-----------------
		if(frm.doc.number_of_choices == '2'){
			
			frm.Evaluat_Coordinate(frm,frm.doc.longitude1,'Longitude1','long','في الخيار الاول');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude1,'Latitude1','lat','في الخيار الاول');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude2,'Longitude2','long','في الخيار اثاني');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude2,'Latitude2','lat','في الخيار اثاني');

			//---------------
			if(frm.doc.tower_type1 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height1,frm.doc.number_of_poles1,'الخيار الاول');
			} else if(frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			}
			if(frm.doc.tower_type1 == 'Pole' || frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height1,'في الخيار الاول');
			} 
			//------------------

			//---------------
			if(frm.doc.tower_type2 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height2,frm.doc.number_of_poles2,'الخيار الثاني');
			} else if(frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			}
			if(frm.doc.tower_type2 == 'Pole' || frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height2,'في الخيار الثاني');
			} 
			//------------------
		}
		//-----------------
		if(frm.doc.number_of_choices == '3'){
			//---------------
			if(frm.doc.tower_type1 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height1,frm.doc.number_of_poles1,'الخيار الاول');
			} else if(frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			}
			if(frm.doc.tower_type1 == 'Pole' || frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height1,'في الخيار الاول');
			} 
			//------------------

			//---------------
			if(frm.doc.tower_type2 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height2,frm.doc.number_of_poles2,'الخيار الثاني');
			} else if(frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			}
			if(frm.doc.tower_type2 == 'Pole' || frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height2,'في الخيار الثاني');
			} 
			//------------------


			//---------------
			if(frm.doc.tower_type3 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height3,frm.doc.number_of_poles3,'الخيار الثالث');
			} else if(frm.doc.tower_type3 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height3,'في الخيار الثالث');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height3,'في الخيار الثالث');
			}
			if(frm.doc.tower_type3 == 'Pole' || frm.doc.tower_type3 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height3,'في الخيار الثالث');
			} 
			//------------------
			frm.Evaluat_Coordinate(frm,frm.doc.longitude1,'Longitude1','long','في الخيار الاول');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude1,'Latitude1','lat','في الخيار الاول');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude3,'Longitude3','long','في الخيار الثاني');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude3,'Latitude3','lat','في الخيار الثاني');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude3,'Longitude3','long','في الخيار الثالث');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude3,'Latitude3','lat','في الخيار الثالث');
		}
		//-----------------
		if(frm.doc.number_of_choices == '4'){
			//---------------
			if(frm.doc.tower_type1 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height1,frm.doc.number_of_poles1,'الخيار الاول');
			} else if(frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height1,'في الخيار الاول');
			}
			if(frm.doc.tower_type1 == 'Pole' || frm.doc.tower_type1 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height1,'في الخيار الاول');
			} 
			//------------------

			//---------------
			if(frm.doc.tower_type2 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height2,frm.doc.number_of_poles2,'الخيار الثاني');
			} else if(frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height2,'في الخيار الثاني');
			}
			if(frm.doc.tower_type2 == 'Pole' || frm.doc.tower_type2 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height2,'في الخيار الثاني');
			} 
			//------------------


			//---------------
			if(frm.doc.tower_type3 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height3,frm.doc.number_of_poles3,'الخيار الثالث');
			} else if(frm.doc.tower_type3 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height3,'في الخيار الثالث');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height3,'في الخيار الثالث');
			}
			if(frm.doc.tower_type3 == 'Pole' || frm.doc.tower_type3 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height3,'في الخيار الثالث');
			} 
			//------------------
			
			//---------------
			if(frm.doc.tower_type4 == 'Pole'){
				frm.Evaluat_pole_height(frm,frm.doc.tower_pole_height4,frm.doc.number_of_poles4,'الخيار الرابع');
			} else if(frm.doc.tower_type4 == 'Rooms+Pole'){
				frm.Evaluat_room_pole_height(frm,frm.doc.tower_pole_height4,'في الخيار الرابع');
			} else {
				frm.Evaluat_tower_height(frm,frm.doc.tower_pole_height4,'في الخيار الرابع');
			}
			if(frm.doc.tower_type4 == 'Pole' || frm.doc.tower_type4 == 'Rooms+Pole'){
				frm.Evaluat_building_height(frm,frm.doc.building_height4,'في الخيار الرابع');
			} 
			//------------------
			frm.Evaluat_Coordinate(frm,frm.doc.longitude1,'Longitude1','long','في الخيار الاول');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude1,'Latitude1','lat','في الخيار الاول');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude2,'Longitude2','long','في الخيار الثاني');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude2,'Latitude2','lat','في الخيار الثاني');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude3,'Longitude3','long','في الخيار الثالث');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude3,'Latitude3','lat','في الخيار الثالث');

			frm.Evaluat_Coordinate(frm,frm.doc.longitude4,'Longitude4','long','في الخيار الرابع');
			frm.Evaluat_Coordinate(frm,frm.doc.latitude4,'Latitude4','lat','في الخيار الربابع');

			
		}


				
		
	}
	
	//=============================================== end validate =============================================================


});
