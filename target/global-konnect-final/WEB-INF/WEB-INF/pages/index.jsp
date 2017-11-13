<!DOCTYPE html>
<html lang="en">

<head>
<%@include file="imports.jsp" %>
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
	<span class="getQuoteBtn">
		<a href="#">Get Quote</a>
	</span>
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
            </div>
    
            <!-- /.row -->
                 </div>
        <!-- /#page-wrapper -->

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
