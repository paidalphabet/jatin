<!DOCTYPE html>
<%@page import="com.globalkonnect.model.Country"%>
<%@page import="java.util.List"%>
<html lang="en">

<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>

<%@include file="imports.jsp" %>
 </head>
<script type="text/javascript">

	function getPlans(){
		var countryID = document.getElementById('countries').value;
		var url = "plans" + "/" + countryID;
		$("#plansTemplate").html('');
		$.ajax({
			  url: url,
			  success: function(data){
					//console.log(data);
					$("#plansTemplate").html(data);
					$("#plansTemplate").show();
				  }
	});
	}
</script>

<body>
    <div id="wrapper">
		<%@include file="header.jsp" %>
        <div id="page-wrapper" style="margin:0 0 0 0 !important;">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                    	<span>
                    		<%@include file="carousel.jsp" %>
                    	</span>
                    </h1>
                </div>
                <!-- /.col-lg-12 -->
                <div class="col-lg-12">
                	<div class="col-md-3">
                	</div>
                	<div class="row">
                	<div class="col-md-4">
                		<div class="">
							<select name="country" id="countries" placeholder="country" class="form-control">
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
                	  </div>
                	  <div class="col-md-3">
                	  		<button onclick="getPlans()" class="btn">View Plans</button>
                	  </div>
                	  </div>
                	  <br/>
                	  <div class="clearfix"></div>
                	  <div id ="plansTemplate">
                  	 </div>
                </div>
             </div>
        </div>
        <div class="footer">	
        		<%@include file="footer.jsp" %>
         </div>
    
            <!-- /.row -->
                 </div>
        <!-- /#page-wrapper -->

    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="vendor/raphael/raphael.min.js"></script>
    <script src="vendor/morrisjs/morris.min.js"></script>
    <script src="data/morris-data.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

</body>

</html>
