<form role="form" method ="post" action="send-email" id="contactus"><!--  onsubmit="return contactUs(this, this.event)"-->
	<div class="form-group">
		<label>Firstname</label>
		<input type="text" name="firstname" id="firstname" placeholder="First Name" class="form-control">
	</div>
	<div class="form-group">
		<label>Lastname</label>
		<input type="text" name="lastname" id="lastname" placeholder="Last Name" class="form-control">
	</div>
	<div class="form-group">
		<label>Email ID</label>
		<input type="text" name="emailID" id="emailID" placeholder="Email ID" class="form-control">
	</div>
	<div class="form-group">
		<label>Country</label>
		<select name="country" id="country" placeholder="country" class="form-control">
			<option value="US">USA</option>
            <option value="SG">Singapore</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="NZ">New Zealand</option>
       </select>
	</div>
	<div class="form-group">
		  <label>Message</label>
		  <textarea name="message" class="form-control"></textarea>
	</div>
	<div class="form-group">
		<input type='submit' class="btn btn-success"/>
	</div>
	 
</form>
<!-- <script type="text/javascript">
	function submitDetailsForm(){
		 $.ajax({
		        url: 'send-email',
		        type: 'post',
		        dataType: 'application/json',
		        data: {"firstname":"sandesh"},
		        success: function(data) {
		       		alert(false);           
				}
		    });
		 event.preventDefault();
		return false;
	}	
</script> -->