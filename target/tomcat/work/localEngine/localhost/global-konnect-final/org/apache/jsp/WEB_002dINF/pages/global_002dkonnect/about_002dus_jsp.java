package org.apache.jsp.WEB_002dINF.pages.global_002dkonnect;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class about_002dus_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(3);
    _jspx_dependants.add("/WEB-INF/pages/global-konnect/../imports.jsp");
    _jspx_dependants.add("/WEB-INF/pages/global-konnect/../header.jsp");
    _jspx_dependants.add("/WEB-INF/pages/global-konnect/contact-us.jsp");
  }

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

      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("    <meta charset=\"utf-8\">\r\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n");
      out.write("    <meta name=\"description\" content=\"\">\r\n");
      out.write("    <meta name=\"author\" content=\"\">\r\n");
      out.write("\r\n");
      out.write("    <title>Global Konnect - The Travel Destination</title>\r\n");
      out.write("\r\n");
      out.write("    <!-- Bootstrap Core CSS -->\r\n");
      out.write("    <link href=\"vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- MetisMenu CSS -->\r\n");
      out.write("    <link href=\"vendor/metisMenu/metisMenu.min.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Custom CSS -->\r\n");
      out.write("    <link href=\"dist/css/sb-admin-2.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Morris Charts CSS -->\r\n");
      out.write("    <link href=\"vendor/morrisjs/morris.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Custom Fonts -->\r\n");
      out.write("    <link href=\"vendor/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\r\n");
      out.write("\r\n");
      out.write("    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\r\n");
      out.write("    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\r\n");
      out.write("    <!--[if lt IE 9]>\r\n");
      out.write("        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n");
      out.write("        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n");
      out.write("    <![endif]-->\r\n");
      out.write("\r\n");
      out.write("    <style>\r\n");
      out.write("\t\t.getQuoteBtn a {\r\n");
      out.write("    \t\twidth: 100%;\r\n");
      out.write("    \t\theight: 100%;\r\n");
      out.write("    \t\tdisplay: block;\r\n");
      out.write("\t\t    background: #4b4b4b;\r\n");
      out.write("\t\t    color: #fff;\r\n");
      out.write("\t\t    text-decoration: none;\r\n");
      out.write("\t\t    text-align: center;\r\n");
      out.write("\t\t    position: relative;\r\n");
      out.write("\t}\r\n");
      out.write("    </style>");
      out.write("\r\n");
      out.write(" </head>\r\n");
      out.write(" <style>\r\n");
      out.write("\t\t.getQuoteBtn a {\r\n");
      out.write("    \t\twidth: 100%;\r\n");
      out.write("    \t\theight: 100%;\r\n");
      out.write("    \t\tdisplay: block;\r\n");
      out.write("\t\t    background: #4b4b4b;\r\n");
      out.write("\t\t    color: #fff;\r\n");
      out.write("\t\t    text-decoration: none;\r\n");
      out.write("\t\t    text-align: center;\r\n");
      out.write("\t\t    position: relative;\r\n");
      out.write("\t}\r\n");
      out.write(" </style>\r\n");
      out.write(" \r\n");
      out.write("\r\n");
      out.write("<body>\r\n");
      out.write("    <div id=\"wrapper\">\r\n");
      out.write("\t\t");
      out.write("       <!-- Navigation -->\r\n");
      out.write("        <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n");
      out.write("            <div class=\"navbar-header\">\r\n");
      out.write("                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n");
      out.write("                    <span class=\"sr-only\">Toggle navigation</span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                </button>\r\n");
      out.write("                <a class=\"navbar-logo margin10\" href=\"index\"><img src=\"images/logo.png\" alt=\"GlobalKonnect\"></img></a>\r\n");
      out.write("            </div>\r\n");
      out.write("            <!-- /.navbar-header -->\r\n");
      out.write("\r\n");
      out.write("            <ul class=\"nav navbar-top-links navbar-right\">\r\n");
      out.write("            <li class=\"dropdown\">\r\n");
      out.write("                \t<a href=\"About-Us\">About Us</a>\r\n");
      out.write("                </li>\r\n");
      out.write("            \r\n");
      out.write("                <li class=\"dropdown\">\r\n");
      out.write("                \t<a href=\"#\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a>\r\n");
      out.write("                </li>\r\n");
      out.write("                <!-- /.dropdown -->\r\n");
      out.write("            </ul>\r\n");
      out.write("\r\n");
      out.write("        </nav>\r\n");
      out.write("\r\n");
      out.write("        <div id=\"page-wrapper\" style=\"margin:0 0 0 0 !important;\">\r\n");
      out.write("            <div class=\"row\">\r\n");
      out.write("                <div class=\"col-lg-12\">\r\n");
      out.write("                \t<div class=\"col-lg-8\">\r\n");
      out.write("                \t\t<div class=\"panel panel-default\">\r\n");
      out.write("                \t\t\t<div class=\"panel-heading\">\r\n");
      out.write("                          \t\tGlobal Konnect\r\n");
      out.write("                        \t</div>\r\n");
      out.write("                        \t<div class=\"panel panel-body\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<p>Global Konnect is one of the flourishing and reliable Travel & Tourism Companies with its office in Pune, Maharashtra. We offer outstanding Domestic and International Tour Packages to our esteemed clients. We also offer complete travel related services such as Airline Ticketing Services, Rail Ticketing Services, Passport & Visa Services, Car Coach Services and Hotel Booking Services for clientâs comfortable journey. We also cater to provide our services as a proficient Event Organizer and are engaged in organizing private and corporate events. We also offer theme-based tours such as Honeymoon Holidays, Adventure Tours, Golden Triangle tour, Heritage & Culture Tour and much more. We also provide appropriate advice in planning their vacations. We make sure that we meet the expectations of the clients. \r\n");
      out.write("\t\t\t\t\t\t\t\tGlobal Konnect was established in the year 2015, under the management of Mr. JATIN PARMAR. He has always guided the team to work in a positive attitude. We work with an aim to make traveling and expeditions affordable and convenient, hence, we provide the best deals to everyone, so that our tours can be easily attained by even middle income travelers. We are backed by a team of experienced employees that work dedicatedly to satisfy the clients. We offer the best quality services to our clients and work in a professional manner to make your trip memorable for you.\r\n");
      out.write("\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t\t\t\t\t<e>Our Mission and Goal</e>\r\n");
      out.write("\t\t\t\t\t\t\t\t<e>Mission:</e>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t\t\t\t\tTo be customer centric, service focused, and technology driven company committed to provide world-class, personal, consistent, and professional travel management services that delight our customers.\r\n");
      out.write("\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t\t\t\t\t<e>Goal:</e>\r\n");
      out.write("\t\t\t\t\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t\t\t\tOur main goal is to be recognized for excellence, integrity and innovation in our field of travel management, including sales and service. In order to build life-long relationships, we make efforts to add value to each one through partnerships with customers, employees, suppliers and the community.\r\n");
      out.write("\t\t\t\t\t\t\t\t</p>\r\n");
      out.write("                        \t</div>\r\n");
      out.write("                \t\t</div>\r\n");
      out.write("                \t</div>\r\n");
      out.write("                \t<div class=\"col-lg-4\">\r\n");
      out.write("                \t\t   <div class=\"panel panel-default\">\r\n");
      out.write("\t                \t\t\t<div class=\"panel-heading\">\r\n");
      out.write("\t                          \t\tConnect/Enquiries\r\n");
      out.write("\t                        \t</div>\r\n");
      out.write("\t                        \t<div class=\"panel panel-body\">\r\n");
      out.write("\t                        \t\t");
      out.write("<form role=\"form\" method =\"post\" action=\"send-email\" id=\"contactus\"><!--  onsubmit=\"return contactUs(this, this.event)\"-->\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t<label>Firstname</label>\r\n");
      out.write("\t\t<input type=\"text\" name=\"firstname\" id=\"firstname\" placeholder=\"First Name\" class=\"form-control\">\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t<label>Lastname</label>\r\n");
      out.write("\t\t<input type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Last Name\" class=\"form-control\">\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t<label>Email ID</label>\r\n");
      out.write("\t\t<input type=\"text\" name=\"emailID\" id=\"emailID\" placeholder=\"Email ID\" class=\"form-control\">\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t<label>Country</label>\r\n");
      out.write("\t\t<select name=\"country\" id=\"country\" placeholder=\"country\" class=\"form-control\">\r\n");
      out.write("\t\t\t<option value=\"US\">USA</option>\r\n");
      out.write("            <option value=\"SG\">Singapore</option>\r\n");
      out.write("            <option value=\"UK\">United Kingdom</option>\r\n");
      out.write("            <option value=\"AU\">Australia</option>\r\n");
      out.write("            <option value=\"NZ\">New Zealand</option>\r\n");
      out.write("       </select>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t  <label>Message</label>\r\n");
      out.write("\t\t  <textarea name=\"message\" class=\"form-control\"></textarea>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"form-group\">\r\n");
      out.write("\t\t<input type='submit' class=\"btn btn-success\"/>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t \r\n");
      out.write("</form>\r\n");
      out.write("<!-- <script type=\"text/javascript\">\r\n");
      out.write("\tfunction submitDetailsForm(){\r\n");
      out.write("\t\t $.ajax({\r\n");
      out.write("\t\t        url: 'send-email',\r\n");
      out.write("\t\t        type: 'post',\r\n");
      out.write("\t\t        dataType: 'application/json',\r\n");
      out.write("\t\t        data: {\"firstname\":\"sandesh\"},\r\n");
      out.write("\t\t        success: function(data) {\r\n");
      out.write("\t\t       \t\talert(false);           \r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t    });\r\n");
      out.write("\t\t event.preventDefault();\r\n");
      out.write("\t\treturn false;\r\n");
      out.write("\t}\t\r\n");
      out.write("</script> -->");
      out.write("\r\n");
      out.write("\t                        \t</div>\r\n");
      out.write("                \t\t</div>\r\n");
      out.write("                \t</div>\r\n");
      out.write("                <!-- /.col-lg-12 -->\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <!-- /#page-wrapper -->\r\n");
      out.write("\r\n");
      out.write("    </div>\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /#wrapper -->\r\n");
      out.write("\r\n");
      out.write("    <!-- jQuery -->\r\n");
      out.write("    <script src=\"vendor/jquery/jquery.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("    <!-- Bootstrap Core JavaScript -->\r\n");
      out.write("    <script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("    <!-- Metis Menu Plugin JavaScript -->\r\n");
      out.write("    <script src=\"vendor/metisMenu/metisMenu.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("    <!-- Morris Charts JavaScript -->\r\n");
      out.write("    <script src=\"vendor/raphael/raphael.min.js\"></script>\r\n");
      out.write("    <script src=\"vendor/morrisjs/morris.min.js\"></script>\r\n");
      out.write("    <script src=\"data/morris-data.js\"></script>\r\n");
      out.write("\r\n");
      out.write("    <!-- Custom Theme JavaScript -->\r\n");
      out.write("    <script src=\"dist/js/sb-admin-2.js\"></script>\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("\r\n");
      out.write("</html>\r\n");
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
