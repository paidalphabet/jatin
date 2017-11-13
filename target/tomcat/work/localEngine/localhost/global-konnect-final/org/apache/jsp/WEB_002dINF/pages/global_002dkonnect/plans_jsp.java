package org.apache.jsp.WEB_002dINF.pages.global_002dkonnect;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.globalkonnect.model.Plans;
import java.util.List;

public final class plans_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");

	//System.out.println("-----" + request.getAttribute("plans"));
	int i = 0;

	List<Plans> plans = (List<Plans>) request.getAttribute("plans");
	if (plans != null) {
		for (Plans plan : plans) {

      out.write("\r\n");
      out.write("<div class=\"col-lg-3 col-md-6\">\r\n");
      out.write("\t<div class=\"panel panel-primary\">\r\n");
      out.write("\t\t<div class=\"panel-heading\">\r\n");
      out.write("\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t<div class=\"col-xs-3\">\r\n");
      out.write("\t\t\t\t\t<span class=\"fa fa-phone fa-2x\">");
      out.print(plan.getPlanName() );
      out.write(" </span>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<a href=\"#\">\r\n");
      out.write("\t\t\t<div class=\"panel-footer\">\r\n");
      out.write("\t\t\t\t<span class=\"pull-left\">\r\n");
      out.write("\t\t\t\t\t<span class=\"\" data-toggle=\"modal\" data-target=\"#plan");
      out.print(plan.getPlanID());
      out.write("\">View Details</span>\r\n");
      out.write("\t\t\t\t</span> <span class=\"pull-right\"><i\r\n");
      out.write("\t\t\t\t\tclass=\"fa fa-arrow-circle-right\"></i></span>\r\n");
      out.write("\t\t\t\t<div class=\"clearfix\"></div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</a>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- Modal -->\r\n");
      out.write("<div id=\"plan");
      out.print(plan.getPlanID() );
      out.write("\" class=\"modal fade\" role=\"dialog\">\r\n");
      out.write("  <div class=\"modal-dialog\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Modal content-->\r\n");
      out.write("    <div class=\"modal-content\">\r\n");
      out.write("      <div class=\"modal-header\">\r\n");
      out.write("        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n");
      out.write("        <h4 class=\"modal-title\">");
      out.print(plan.getPlanName() );
      out.write("</h4>\r\n");
      out.write("      </div>\r\n");
      out.write("      <div class=\"modal-body\">\r\n");
      out.write("                                   <div class=\"table-responsive\">\r\n");
      out.write("                                <table class=\"table table-striped table-bordered table-hover\">\r\n");
      out.write("                                    <tbody>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("                                            <td><b>Company</b></td><td>");
      out.print(plan.getSimCompany() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("                                            <td><b>Local Calling</b></td><td>");
      out.print(plan.getLocalCalling() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("\t                                        <td><b>Local SMS</b></td><td>");
      out.print(plan.getSmsLocal() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("                                        \t<td><b>International SMS</b></td><td>");
      out.print(plan.getSmsInternational() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("                                        \t<td><b>Data</b></td><td>");
      out.print(plan.getData() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                        <tr>\r\n");
      out.write("                                        \t<td><b>Special Notes</b></td><td>");
      out.print(plan.getSpecialNotes() );
      out.write("</td>\r\n");
      out.write("                                        </tr>\r\n");
      out.write("                                    </tbody>\r\n");
      out.write("                                </table>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"row\">\r\n");
      out.write("                            \t<button class=\"btn btn-info pull-right\" style=\"margin:20px;\"><a href=\"about-us\">Enquire</a></button>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <!-- /.table-responsive -->\r\n");
      out.write("      </div>\r\n");
      out.write("      <div class=\"modal-footer\">\r\n");
      out.write("        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n");
      out.write("      </div>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("  </div>\r\n");
      out.write("</div>\r\n");

	i++;
		}
	}

    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
