// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('learn_api', {

	setup: function(frm){
		
		// ##############################  server call api ######################################
		frm.server_call_api_learn = function(frm){

			//--------------setvalue---------------------------------------
			frappe.db.set_value('learn_api', '1', 'test_add_value_js', 'SET')
	    	.then(r => {
	        	let doc = r.message;
	        	// console.log(doc);
	    	}),
	    	//---------------------------------------------------------------



	    	// ----------------------------- get doc by name------------------
			frappe.db.get_doc('govern1', 'عدن')
	   		 .then(doc => {
	        	console.log(doc.name)
	    	})
	   		 //---------------------------------------------------------------



	   		 //-------------------- get list -----------------------------
	   		frappe.db.get_list('Modiriat', {
	    		fields: ['name1', 'government'],
			    filters: {
			        government: 'حجة'
			    }
			}).then(records => {
			    console.log(records);
			})



			//-------------------- get value -----------------------------
			// frappe.db.get_value('Modiriat', 'government', 'الحديدة')
			 //    .then(r => {
			 //        console.log(r.message.name1) // Open
			 //    })



		 	// total number of Task records---------------------------------
			frappe.db.count('govern1')
			    .then(count => {
			        console.log(count)
			    })

			// frappe.db.count("Employee", filters={"employment_type": ["in", ("board member", "contract")]})
			// frappe.db.count("Employee", filters={"government": frm.doc.government2})

			
			 //------------- check exist -------------------------------
			 frappe.db.exists('govern1', 'الحديدة')
		    .then(exists => {
		        console.log(exists) // true
		    })



		},


		// ---------------------dialog -------------------------------------
		frm.dialog_api_learn = function(frm){


			//------------------------------
			let d = new frappe.ui.Dialog({
			    title: 'Enter details',
			    fields: [
			        {
			            label: 'First Name',
			            fieldname: 'first_name',
			            fieldtype: 'Data'
			        },
			        {
			            label: 'Last Name',
			            fieldname: 'last_name',
			            fieldtype: 'Data'
			        },
			        {
			            label: 'Age',
			            fieldname: 'age',
			            fieldtype: 'Int'
			        }
			    ],
			    primary_action_label: 'Submit',
			    primary_action(values) {
			        console.log(values);
			        d.hide();
			    }
			});

			d.show();

		},


			// --------------------msg throw -------------------------------------------------
		frm.throw_func = function(frm){
			frappe.throw(__('This is an Error Message'))
		},


			

			// ------------------------------- prompt for multiple values
		frm.prompt_func = function(frm){
			frappe.prompt([
			    {
			        label: 'First Name',
			        fieldname: 'first_name',
			        fieldtype: 'Data'
			    },
			    {
			        label: 'Last Name',
			        fieldname: 'last_name',
			        fieldtype: 'Data'
			    },
			], (values) => {
			    console.log(values.first_name, values.last_name);
			})
		},


			//----------------------confirm ------------------------------
		frm.confirm_func = function(frm){
			frappe.confirm('Are you sure you want to proceed?',
		    () => {
		        // action to perform if Yes is selected
		    }, () => {
		        // action to perform if No is selected
		    })
		},

		    // ---------warn msg -------------------------------------
		 frm.warn_func = function(frm){
		    frappe.warn('Are you sure you want to proceed?',
		    'There are unsaved changes on this page',
		    () => {
		        // action to perform if Continue is selected
		    },
		    'Continue',
		    true // Sets dialog as minimizable
			)
		},



		//--------------------- alert msg ---------------------------------
			//show_alert with indicator
		frm.alert_func = function(frm){
			frappe.show_alert({
			    message:__('Hi, you have a new message'),
			    indicator:'green'
			}, 5);
		},


		frm.msgprint_func = function(frm){
				frappe.msgprint({
			    title: __('Notification'),
			    indicator: 'green',
			    message: __('Document updated successfully')
				});
		},

		frm.MultiSelectDialog_func = function(frm){
			new frappe.ui.form.MultiSelectDialog({
		    doctype: "Material Request",
		    target: this.cur_frm,
		    setters: {
		        schedule_date: null,
		        status: 'Pending'
		    },
		    add_filters_group: 1,
		    date_field: "transaction_date",
		    get_query() {
		        return {
		            filters: { docstatus: ['!=', 2] }
		        }
		    },
		    action(selections) {
		        console.log(selections);
		    }
		});

		// MultiSelectDialog with custom query method
		let query_args = {
		    query:"dotted.path.to.method",
		    filters: { docstatus: ["!=", 2], supplier: "John Doe" }
		}

		new frappe.ui.form.MultiSelectDialog({
		    doctype: "Material Request",
		    target: this.cur_frm,
		    setters: {
		        schedule_date: null,
		        status: 'Pending'
		    },
		    add_filters_group: 1,
		    date_field: "transaction_date",
		    get_query() {
		        return query_args;
		    },
		    action(selections) {
		        console.log(selections);
		    }
		});
		}
		
		

	},
	// refresh: function(frm) {

	// }





	//---------------------------------------------------------------------------
	server_call_apis: function(frm){

		 frm.server_call_api_learn(frm)


		//frm.dialog_api_learn(frm)

	},



	// ##############################  dialog  api ######################################
		
		

		//----------------- msg print ----------------------------------------






	dialog_apis:function(frm){
		//----------------dialog -----------------------
		// frm.dialog_api_learn(frm)
		// frm.alert_func(frm)
		// frm.warn(frm)
		// frm.confirm_func(frm)
		// frm.prompt_func(frm)
		// frm.throw_func(frm)
		// frm.msgprint_func(frm)
		// frm.alert_func(frm)
		// frm.MultiSelectDialog_func(frm)


		//frappe.show_progress('Loading..', 70, 100, 'Please wait');



		// fetch('http://localhost:8001/api/method/login', {
		//     method: 'POST',
		//     headers: {
		//         'Accept': 'application/json',
		//         'Content-Type': 'application/json',
		//     },
		//     body: JSON.stringify({
		//         usr: 'administrator',
		//         pwd: 'khaled135'
		//     })
		// })
		// .then(r => r.json())
		// .then(r => {
		//     console.log(r);
		// })


		// GET /api/resource/:doctype


		fetch('http://localhost:8001/api/method/ToDo/5709721e38', {
		    // method: 'GET',
		    //   headers: {
			   //      'Accept': 'application/json',
			   //      'Content-Type': 'application/json',
			   //  },
			    // body: JSON.stringify({
			    //     usr: 'administrator',
			    //     pwd: 'khaled135'
			    // })
			
		})
		.then(r => r.json())
		.then(r => {
		    console.log(r);
		})
		
		
	},

	rest_api: function(frm){
		frappe.call({
	  						method: "planning_app.planning_app.doctype.learn_api.api.get_func",
	  						// args: {'old_sitename': frm.doc.old_sitename},
	  						callback: function(r) {
	  							console.log(r)
	  						}
	  					})
	}



	

});
