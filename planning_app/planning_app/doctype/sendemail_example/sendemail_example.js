// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('sendEmail_example', {

	setup:  function(frm) {
		frm.send_email_check = function(frm){

			frm.call({
	  			method: "planning_app.planning_app.doctype.sendemail_example.my_email_api.send_email",
	  			args: { 
	  				'doc': frm.doc,
	  				'recipients': 'testsurveyyemenmobile@agmail.com',
	  				'msg': 'Test message send email',
	  				'title': 'test'
	  				// 'attachments': ''
	  				},
	  			callback: function(r) {
	  				console.log('Checked')
	  			}
	  		})



		},

	frm.getinf = function(frm){
	}		
		


	},
	// refresh: function(frm) {

	// }

	send_email: function(frm){
		// frm.send_email_check(frm)
		

	frappe.db.set_value('test_setvalue', '2', 'test', 'SET')
    .then(r => {
        let doc = r.message;
        console.log(doc);
    })
	}

});
