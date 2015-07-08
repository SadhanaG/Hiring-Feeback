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
	    round: {
	        required: true
	      },
		  txt_round: {
	        minlength: 2,
	        required: true
	      },
		panel: {
	        required: true
	      },
		 txt_panel: {
	        minlength: 2,
	        required: true
	      },
		  com_skill: {
	        required: true
	      },
		  txt_com_skill: {
	        minlength: 2,
	        required: true
	      },
		  int_skill: {
	        required: true
	      },
		  txt_int_skill: {
	        minlength: 2,
	        required: true
	      },
		  lead_skill: {
	        required: true
	      },
		  txt_lead_skill: {
	        minlength: 2,
	        required: true
	      },
		  team_mang: {
	        required: true
	      },
		  txt_team_mang: {
	        minlength: 2,
	        required: true
	      },
			logic_skill: {
	        required: true
	      },
		  txt_logic_skill: {
	        minlength: 2,
	        required: true
	      },
			apti_skill: {
	        required: true
	      },
		  txt_apti_skill: {
	        minlength: 2,
	        required: true
	      },
			proSkill_skill: {
					required: true
				},
			txt_pro_skill: {
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
