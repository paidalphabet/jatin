package org.apache.jsp.WEB_002dINF.pages;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import com.globalkonnect.model.Country;
import java.util.List;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(4);
    _jspx_dependants.add("/WEB-INF/pages/imports.jsp");
    _jspx_dependants.add("/WEB-INF/pages/header.jsp");
    _jspx_dependants.add("/WEB-INF/pages/carousel.jsp");
    _jspx_dependants.add("/WEB-INF/pages/footer.jsp");
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

      out.write("<!DOCTYPE html>\n");
      out.write("\n");
      out.write("\n");
      out.write("<html lang=\"en\">\n");
      out.write("\n");
      out.write("<head>\n");
      out.write("    <script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js\"></script>\n");
      out.write("\n");
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
      out.write("\n");
      out.write(" </head>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\n");
      out.write("\tfunction getPlans(){\n");
      out.write("\t\tvar countryID = document.getElementById('countries').value;\n");
      out.write("\t\tvar url = \"plans\" + \"/\" + countryID;\n");
      out.write("\t\t$(\"#plansTemplate\").html('');\n");
      out.write("\t\t$.ajax({\n");
      out.write("\t\t\t  url: url,\n");
      out.write("\t\t\t  success: function(data){\n");
      out.write("\t\t\t\t\t//console.log(data);\n");
      out.write("\t\t\t\t\t$(\"#plansTemplate\").html(data);\n");
      out.write("\t\t\t\t\t$(\"#plansTemplate\").show();\n");
      out.write("\t\t\t\t  }\n");
      out.write("\t});\n");
      out.write("\t}\n");
      out.write("</script>\n");
      out.write("\n");
      out.write("<body>\n");
      out.write("    <div id=\"wrapper\">\n");
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
      out.write("\n");
      out.write("        <div id=\"page-wrapper\" style=\"margin:0 0 0 0 !important;\">\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <div class=\"col-lg-12\">\n");
      out.write("                    <h1 class=\"page-header\">\n");
      out.write("                    \t<span>\n");
      out.write("                    \t\t");
      out.write("<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n");
      out.write("  <!-- Indicators -->\r\n");
      out.write("  <ol class=\"carousel-indicators\">\r\n");
      out.write("    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n");
      out.write("    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n");
      out.write("    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n");
      out.write("  </ol>\r\n");
      out.write("\r\n");
      out.write("  <!-- Wrapper for slides -->\r\n");
      out.write("  <div class=\"carousel-inner\">\r\n");
      out.write("    <div class=\"item active\">\r\n");
      out.write("      <img src=\"images/singapore.jpg\" alt=\"Los Angeles\">\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("    <div class=\"item\">\r\n");
      out.write("      <img src=\"images/chicago.jpg\" alt=\"Chicago\">\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("    <div class=\"item\">\r\n");
      out.write("      <img src=\"images/ny.jpg\" alt=\"New York\">\r\n");
      out.write("    </div>\r\n");
      out.write("  </div>\r\n");
      out.write("\r\n");
      out.write("  <!-- Left and right controls -->\r\n");
      out.write("  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n");
      out.write("    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n");
      out.write("    <span class=\"sr-only\">Previous</span>\r\n");
      out.write("  </a>\r\n");
      out.write("  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n");
      out.write("    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n");
      out.write("    <span class=\"sr-only\">Next</span>\r\n");
      out.write("  </a>\r\n");
      out.write("</div>");
      out.write("\n");
      out.write("                    \t</span>\n");
      out.write("                    </h1>\n");
      out.write("                </div>\n");
      out.write("                <!-- /.col-lg-12 -->\n");
      out.write("                <div class=\"col-lg-12\">\n");
      out.write("                \t<div class=\"col-md-3\">\n");
      out.write("                \t</div>\n");
      out.write("                \t<div class=\"row\">\n");
      out.write("                \t<div class=\"col-md-4\">\n");
      out.write("                \t\t<div class=\"\">\n");
      out.write("\t\t\t\t\t\t\t<select name=\"country\" id=\"countries\" placeholder=\"country\" class=\"form-control\">\n");
      out.write("\t\t\t\t\t\t\t");
 
								List<Country> countries = (List)request.getAttribute("countries");
								if(countries !=null) {
									for(Country country : countries) {
							
      out.write("\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"");
      out.print(country.getCountryID());
      out.write('"');
      out.write('>');
      out.print(country.getCountryName() );
      out.write("</option>\n");
      out.write("\t\t\t\t\t\t\t");
	
							  }
							}
							
      out.write("\n");
      out.write("\t\t\t\t\t\t\t\n");
      out.write("       \t\t\t\t\t\t</select>\n");
      out.write("                \t  </div>\n");
      out.write("                \t  </div>\n");
      out.write("                \t  <div class=\"col-md-3\">\n");
      out.write("                \t  \t\t<button onclick=\"getPlans()\" class=\"btn\">View Plans</button>\n");
      out.write("                \t  </div>\n");
      out.write("                \t  </div>\n");
      out.write("                \t  <br/>\n");
      out.write("                \t  <div class=\"clearfix\"></div>\n");
      out.write("                \t  <div id =\"plansTemplate\">\n");
      out.write("                  \t </div>\n");
      out.write("                </div>\n");
      out.write("             </div>\n");
      out.write("        </div>\n");
      out.write("        <div class=\"footer\">\t\n");
      out.write("        \t\t");
      out.write("<footer class=\"footer\">\r\n");
      out.write("        <div class=\"container text-left\">\r\n");
      out.write("            <small style=\"color:grey\" class=\"copyright\">Copyright &copy 2015 WebSharks Pvt. Limited.All Rights Reserved.</small>\r\n");
      out.write("            <a href=\"#\"><small style=\"color:grey\" class=\"fa fa-lg fa-skype pull-right\">  </small></a>\r\n");
      out.write("            <a href=\"#\"><small style=\"color:grey\" class=\"fa fa-lg fa-google-plus pull-right\">  </small></a>\r\n");
      out.write("            <a href=\"#\"><small style=\"color:grey\" class=\"fa fa-lg fa-linkedin pull-right\">  </small></a>\r\n");
      out.write("            <a href=\"#\"><small style=\"color:grey\" class=\"fa fa-lg fa-twitter pull-right\">  </small></a>\r\n");
      out.write("            <a href=\"#\"><small style=\"color:grey\" class=\"fa fa-lg fa-facebook pull-right\">  </small></a>\r\n");
      out.write("        </div><!--End container-->\r\n");
      out.write("    </footer><!--End footer 2-->");
      out.write("\n");
      out.write("         </div>\n");
      out.write("    \n");
      out.write("            <!-- /.row -->\n");
      out.write("                 </div>\n");
      out.write("        <!-- /#page-wrapper -->\n");
      out.write("\n");
      out.write("    <!-- /#wrapper -->\n");
      out.write("\n");
      out.write("    <!-- jQuery -->\n");
      out.write("    <script src=\"vendor/jquery/jquery.min.js\"></script>\n");
      out.write("\n");
      out.write("    <!-- Bootstrap Core JavaScript -->\n");
      out.write("    <script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\n");
      out.write("\n");
      out.write("    <!-- Metis Menu Plugin JavaScript -->\n");
      out.write("    <script src=\"vendor/metisMenu/metisMenu.min.js\"></script>\n");
      out.write("\n");
      out.write("    <!-- Morris Charts JavaScript -->\n");
      out.write("    <script src=\"vendor/raphael/raphael.min.js\"></script>\n");
      out.write("    <script src=\"vendor/morrisjs/morris.min.js\"></script>\n");
      out.write("    <script src=\"data/morris-data.js\"></script>\n");
      out.write("\n");
      out.write("    <!-- Custom Theme JavaScript -->\n");
      out.write("    <script src=\"dist/js/sb-admin-2.js\"></script>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("\n");
      out.write("</html>\n");
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
