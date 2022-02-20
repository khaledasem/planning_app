// Copyright (c) 2021, khaled and contributors
// For license information, please see license.txt

frappe.ui.form.on('kml', {
	// refresh: function(frm) {

	// }

	// #################### onload_post_render #################################################

	refresh: function(frm) {
		frm.add_custom_button('Create KML onload_post_render', ()=>{
	  	
	  		// frappe.msgprint(__('KML'));
	  		let doctyp = frm.doctype
	  		let docnam = frm.docname
	  		let docfild = frm.doc.download
	  		console.log(doctyp + ' name ' + docnam + ' field '+ docfild)


	  		frappe.call({ 
	  			method: 'planning_app.planning_app.doctype.kml.events.upload_image',
	  			args:{ 'doctype': doctyp,
	  				 	'docname': docnam,
	  				 	'filename':'testKML.kml',
	  				 	'is_private': 0,
	  				 	'filedata': 'DKJA',
	  				 	'docfield': 'download',
	  				 	'folder':'home/frappe/Downloads'
	  				 },
	  			 callback: function(r) {
	  			 	console.log(r)
	  			 	// frm.set_value('download', '/private/files/testKML4444.kml')
	  			 	// frm.refresh()

	  			 }
	  		})

	  		frm.refresh_field(frm.doc.download)

	  

	  	})
	},

// #################### END onload_post_render #################################################

});
