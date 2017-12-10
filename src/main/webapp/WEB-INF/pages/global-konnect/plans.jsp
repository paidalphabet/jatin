<%@page import="com.globalkonnect.model.Plans"%>
<%@page import="java.util.List"%>
<%
	//System.out.println("-----" + request.getAttribute("plans"));
	int i = 0;

	List<Plans> plans = (List<Plans>) request.getAttribute("plans");
	if (plans != null) {
		for (Plans plan : plans) {
%>
<div class="col-lg-3 col-md-6">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<div class="row">
				<div class="col-xs-3">
					<span class="fa fa-phone fa-2x"><%=plan.getPlanName() %> </span>
				</div>
			</div>
		</div>
		<a href="#">
			<div class="panel-footer">
				<span class="pull-left">
					<span class="" data-toggle="modal" data-target="#plan<%=plan.getPlanID()%>">View Details</span>
				</span> <span class="pull-right"></span>
					
				<div class="clearfix"></div>
			</div>
		</a>
	</div>
</div>

<!-- Modal -->
<div id="plan<%=plan.getPlanID() %>" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"><%=plan.getPlanName() %></h4>
      </div>
      <div class="modal-body">
                                   <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <td><b>Company</b></td><td><%=plan.getSimCompany() %></td>
                                        </tr>
                                        <tr>
                                            <td><b>Local Calling</b></td><td><%=plan.getLocalCalling() %></td>
                                        </tr>
                                        <tr>
	                                        <td><b>Local SMS</b></td><td><%=plan.getSmsLocal() %></td>
                                        </tr>
                                        <tr>
                                        	<td><b>International SMS</b></td><td><%=plan.getSmsInternational() %></td>
                                        </tr>
                                        <tr>
                                        	<td><b>Data</b></td><td><%=plan.getData() %></td>
                                        </tr>
                                        <tr>
                                        	<td><b>Special Notes</b></td><td><%=plan.getSpecialNotes() %></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                            	<button class="btn btn-info pull-right" style="margin:20px;"><a href="about-us">Enquire</a></button>
                            </div>
                            <!-- /.table-responsive -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<%
	i++;
		}
	}
%>