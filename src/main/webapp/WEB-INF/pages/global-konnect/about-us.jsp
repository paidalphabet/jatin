<!DOCTYPE html>
<html lang="en">

<head>
<%@include file="../imports.jsp" %>
 </head>
 <style>
		.getQuoteBtn a {
    		width: 100%;
    		height: 100%;
    		display: block;
		    background: #4b4b4b;
		    color: #fff;
		    text-decoration: none;
		    text-align: center;
		    position: relative;
	}
 </style>
 

<body>
    <div id="wrapper">
		<%@include file="../header.jsp" %>
        <div id="page-wrapper" style="margin:0 0 0 0 !important;">
            <div class="row">
                <div class="col-lg-12">
                	<div class="col-lg-8">
                		<div class="panel panel-default">
                			<div class="panel-heading">
                          		Roamex
                        	</div>
                        	<div class="panel panel-body">
								<p>
								Roamex is one of the flourishing and reliable mobile simcard services provider with its office in Pune, Maharashtra. We offer outstanding calling packages to our esteemed clients.  
								Roamex was established in the year 2015, under the management of Mr. Jatin Parmar. He has always guided the team to work in a positive attitude. We work with an aim to make traveling and expeditions affordable and convenient, hence, we provide the best deals to everyone, so that our tours can be easily attained by even middle income travelers. We are backed by a team of experienced employees that work dedicatedly to satisfy the clients. We offer the best quality services to our clients and work in a professional manner to make your trip memorable for you.
								</p>
								<br>
								<p>
								<b>We are located here</b>
								<div id="map" class="panel panel-body" style="height:400px;"></div>
                        	</div>
                		</div>
                	</div>
                	<div class="col-lg-4">
                		   <div class="panel panel-default">
	                			<div class="panel-heading">
	                          		Connect/Enquiries
	                        	</div>
	                        	<div class="panel panel-body">
	                        		<%@include file="contact-us.jsp" %>
	                        	</div>
                		</div>
                	</div>
                <!-- /.col-lg-12 -->
            </div>
                <%@include file="../footer.jsp" %>
        </div>
        <!-- /#page-wrapper -->

    </div>
    </div>
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
