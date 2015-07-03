$(document).ready(function(){
	
		$('#contact-form').validate({
	    rules: {
		  txt_date: {
	      required: true
	      },
	      c_name: {
	        minlength: 2,
	        required: true
	      },
	      c_position: {
			minlength: 2,
	        required: true
	      },
	      c_tech_set: {
	      	minlength: 2,
	        required: true
	      },
	      sel_round: {
	        required: true
	      },
		  txt_round: {
	        minlength: 2,
	        required: true
	      },		  
		  sel_panel: {
	        required: true
	      },		  
		 txt_panel: {
	        minlength: 2,
	        required: true
	      },
		  sel_com_skill: {
	        required: true
	      },
		  txt_com_skill: {
	        minlength: 2,
	        required: true
	      },		  
		  sel_int_skill: {
	        required: true
	      },
		  txt_int_skill: {
	        minlength: 2,
	        required: true
	      },		  
		  sel_lead_skill: {
	        required: true
	      },		  
		  txt_lead_skill: {
	        minlength: 2,
	        required: true
	      },
		  sel_team: {
	        required: true
	      },
		  txt_team: {
	        minlength: 2,
	        required: true
	      },		  
		  skill_one: {
	        minlength: 2,
	        required: true
	      },
		  sel_skill_one: {
	        required: true
	      },
		  txt_skil_one: {
	        minlength: 2,
	        required: true
	      },		  
		  sel_rate: {
	        required: true
	      },
		  txt_rate: {
	        minlength: 2,
	        required: true
	      },		  
		  rating_radio: {
	        required: true
	      }	  
		   
	    },
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.form-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready