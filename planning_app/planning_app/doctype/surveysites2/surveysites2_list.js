frappe.listview_settings['SurveySites2'] = {
     colwidths: {"subject": 10},
        add_fields: [ "status", "name", "constr_site_status" ],

     // filters: [
     //    ['is_replaced', '!=', 'Yes'],
     //    ['evaluate', '-=', 'OK']
    // ],
    // hide_name_column: true, // hide the last column which shows the `name`
    get_indicator(doc) {
        // customize indicator color --------------
       if (doc.is_replaced == 'Yes') {
            return [__("Replaced"), "blur", "is_replaced,=,Yes"];
        
        
        }else if (doc.constr_site_status == 'جاري اعداد الوثيقة') {
            return [__("جاري اعداد الوثيقة"), "blue", "constr_site_status,=,جاري اعداد الوثيقة"];
        
        } else if (doc.constr_site_status == 'تم التسليم للمقاول') {
            return [__("تم التسليم للمقاول"), "blue", "constr_site_status,=,تم التسليم للمقاول"];
        
        
        } else if (doc.constr_site_status == 'جاهز مدنيا') {
            return [__("جاهز مدنيا"), "green", "constr_site_status,=,جاهز مدنيا"];
        
        } 
        else if (doc.constr_site_status == 'جاهز فنيا') {
            return [__("جاهز فنيا"), "green", "constr_site_status,=,فجاهز فنيا"];
        
         }

          else if (doc.constr_site_status == 'تعرقل بسبب مشاكل') {
            return [__("تعرقل بسبب مشاكل"), "red", "constr_site_status,=,تعرقل بسبب مشاكل"];
        
         }
         
        
       
    }

        // frappe.msgprint(doc.constr_site_status)
    //     if (doc.constr_site_status == 'جاري اعداد الوثيقة') {
    //         return [__("جاري اعداد الوثيقة"), "yellow", "constr_site_status,=,جاري اعداد الوثيقة"];
    //       }
    
    // },



};