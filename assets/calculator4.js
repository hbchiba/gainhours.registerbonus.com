$(function(){

	calc();

	$('#plancalc').on('change', calc);
	$('#new_Sum, #inv_days, #compount_rate').bind('change keyup', calc).on('keypress');



});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan, amount, percent, days, total, p1, p2, p3, p4, p5, plantxt;

	plan = $('#plancalc').val();
	amount = $('#new_Sum').val();
	var comp_rate = $('#compount_rate');
	var comp_rate_val = $('#compount_rate').val();
	var comp_rate_val_def = 100;
	var days_count = 1;
	var final_profit = 0;
	var day_part = 0;


	switch (plan) {
					case '1':
			switch (true) {
				    case (amount<20):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $20');
		$('#total_percent').text('min $20');
		$('#total_return').text('min $20');
                    
					break;

				    case (amount<=10000000):
					percent = 21.6;
					days = 5;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    

    
    

	switch (plan) {
					case '2':
			switch (true) {
				    case (amount<100):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $100');
		$('#total_percent').text('min $100');
		$('#total_return').text('min $100');
                    
					break;

				    case (amount<=10000000):
					percent = 14.4;
					days = 10;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    

    
    

    
    

	switch (plan) {
					case '3':
			switch (true) {
				    case (amount<500):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $500');
		$('#total_percent').text('min $500');
		$('#total_return').text('min $500');
                    
					break;

				    case (amount<=10000000):
					percent = 12;
					days = 15;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    

    

    
    

	switch (plan) {
					case '4':
			switch (true) {
				    case (amount<20):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $20');
		$('#total_percent').text('min $20');
		$('#total_return').text('min $20');
                    
					break;

				    case (amount<=10000000):
					percent = 120;
					days = 1;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('-');
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    

    
    

	switch (plan) {
					case '5':
			switch (true) {
				    case (amount<100):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $100');
		$('#total_percent').text('min $100');
		$('#total_return').text('min $100');
                    
					break;

				    case (amount<=10000000):
					percent = 170;
					days = 1;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('-');
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    


    
    

	switch (plan) {
					case '6':
			switch (true) {
				    case (amount<500):
					percent = 0;
					days = 0;
                    
		$('#hourly_profit').text('min $500');
		$('#total_percent').text('min $500');
		$('#total_return').text('min $500');
                    
					break;

				    case (amount<=10000000):
					percent = 200;
					days = 1;
                    
		var totPerc = ((amount*percent/100)/24).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#hourly_profit').text('-');
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1)+'%');

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#hourly_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
                                      
                    

			};
  
    
    }
    
    

    
    
    
    

}