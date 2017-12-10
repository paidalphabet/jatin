<%@page import="com.globalkonnect.model.Country"%>
<%@page import="java.util.List"%>
<form role="form" method ="post" action="send-email" id="contactus"><!--  onsubmit="return contactUs(this, this.event)"-->
	<label class="control-label" for="inputSuccess" id="emailSent" style="display:none;">Email Sent Successfully !</label>
	<div class="form-group">
		<label>Firstname</label>
		<input type="text" name="firstname" id="firstname" placeholder="First Name" class="form-control" onchange="hideEmailSent()">
	</div>
	<div class="form-group">
		<label>Lastname</label>
		<input type="text" name="lastname" id="lastname" placeholder="Last Name" class="form-control" onchange="hideEmailSent()">
	</div>
	<div class="form-group">
		<label>Email ID</label>
		<input type="text" name="emailID" id="emailID" placeholder="Email ID" class="form-control" onchange="hideEmailSent()">
	</div>
	<div class="form-group">
		<label>Country</label>
		<select name="country" id="country" placeholder="country" class="form-control" onchange="hideEmailSent()">
			<% 
								List<Country> countries = (List)request.getAttribute("countries");
								if(countries !=null) {
									for(Country country : countries) {
							%>
									<option value="<%=country.getCountryID()%>"><%=country.getCountryName() %></option>
							<%	
							  }
							}
							%>
							
       </select>
	</div>
	<div class="form-group">
		  <label>Message</label>
		  <textarea name="message" class="form-control" onchange="hideEmailSent()"></textarea>
	</div>
	<div class="form-group">
		<button class="btn btn-success" onclick="sendEmail()">Submit</button>
	</div>
	 
</form>
 <script type="text/javascript">
	function sendEmail(){
		 $.ajax({
		        url: 'send-email',
		        type: 'post',
		        data: $("#contactus").serialize(),
		        success: function(data) {
					if(data=="ok"){
						$("#emailSent").show();
					}		  			           
				}
		    });
		 event.preventDefault();
		return false;
	}

	function hideEmailSent(){
		document.getElementById('emailSent').style.display='none'
	}
</script> 