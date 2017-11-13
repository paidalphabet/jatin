
<!DOCTYPE HTML>
<html>
<meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />


<head>
    
	<titleClay Home Page</title>
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon" /><link rel="stylesheet" type="text/css" href="../css/reset.css" /><link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css" /><link rel="stylesheet" type="text/css" href="../css/main-style.css" />
    <script type="text/javascript" src="https://gc.kis.v2.scr.kaspersky-labs.com/809789FC-A0C3-5844-B106-EACFBDD5595A/main.js" charset="UTF-8"></script><script src="js/ddmenu.js" type="text/javascript"></script>
    <link rel="stylesheet" href="../css/style-tabs.css" />
    <script type="text/javascript" src="js/tabs.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/style-slider.css" />
    <script type="text/javascript" src="js/modernizr.custom.28468.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/jquery.cslider.js"></script>
    <script type="text/javascript" src="js/jquery.carouFredSel-5.5.0-packed.js"></script>
    <script type="text/javascript" src="js/jquery-tabs.js"></script>
    <script type="text/javascript" src="js/jquery.rateyo.js"></script>
    <script type="text/javascript" src="js/jquery.claylighbox.js"></script>
    <script type="text/javascript" src="js/clay-custom-scrollbar.js"></script>
    <script type="text/javascript" src="js/jquery.datetimepicker.full.js"></script>
    <script type="text/javascript" src="js/milestone-timeline.js"></script>
    <script type="text/javascript">
        function SetTab(id) {
            if (id == "1") {
                rpdivBasic.className = 'c-tab is-active';
                rpTopdivBasic.className = 'c-tabs-nav__link is-active';

                rpdivValue.className = 'c-tab';
                rpTopdivValue.className = 'c-tabs-nav__link';

                rpdivPlatinum.className = 'c-tab';
                rpTopdivPlatinum.className = 'c-tabs-nav__link';
            }
            if (id == "2") {
                rpdivBasic.className = 'c-tab';
                rpTopdivBasic.className = 'c-tabs-nav__link';

                rpdivValue.className = 'c-tab is-active';
                rpTopdivValue.className = 'c-tabs-nav__link is-active';

                rpdivPlatinum.className = 'c-tab';
                rpTopdivPlatinum.className = 'c-tabs-nav__link';
            }
            if (id == "3") {
                rpdivPlatinum.className = 'c-tab is-active';
                rpTopdivPlatinum.className = 'c-tabs-nav__link is-active';

                rpdivBasic.className = 'c-tab';
                rpTopdivBasic.className = 'c-tabs-nav__link';

                rpdivValue.className = 'c-tab';
                rpTopdivValue.className = 'c-tabs-nav__link';
            }
        }
    </script>
	<!-- Hotjar Tracking Code for www.clay.co.in -->
	<script>
		(function(h,o,t,j,a,r){
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
			h._hjSettings={hjid:536647,hjsv:5};
			a=o.getElementsByTagName('head')[0];
			r=o.createElement('script');r.async=1;
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
			a.appendChild(r);
		})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
	</script>
    <script type="text/javascript">
        function valid_email(eml) {
            //declare the required variables
            var mint_len;
            var mstr_eml = eml;
            var mint_at = 0;
            var mint_atnum = 0;
            var mint_dot = 0;
            var mint_dotnum = 0;

            mint_len = eml.length; //takes the length of the email address entered

            //checking for the symbol single quote. If found replace it with its html code
            if (mstr_eml.indexOf("'") != -1) {
                mstr_eml = mstr_eml.replace("'", "'");
            }

            //checking for the (@) & (.) symbol
            for (var iloop = 0; iloop < mint_len; iloop++) {
                if (mstr_eml.charAt(iloop) == "@") {
                    mint_at = iloop + 1;
                    mint_atnum = mint_atnum + 1;
                }
                if (mstr_eml.charAt(iloop) == ".") {
                    mint_dot = iloop + 1;
                    mint_dotnum = mint_dotnum + 1;
                }
            }

            //if nothing entered in the field
            if (mstr_eml == "") {
                return true;
            }

            //if @ entered more than once & dot (.) entered more than 4 times
            else
                if ((mint_atnum != 1) || (mint_dotnum > 4) || ((mint_dot - mint_at) < 2) || ((mint_len - mint_dot) < 2) || (mint_at < 3)) {
                    return true;
                }

                //if any blank space is entered in the email address
                else if (mstr_eml.indexOf(" ") != -1) {
                    return true;
                }
            return false;
        }

       
    </script>
    <script type="text/javascript">
		

        function ValidSubscribe() {

            //var regExp = /^0[0-9].*$/
            var ctrlvalPhone = document.getElementById('ctl00_txtEmail');
            var lkbtn = document.getElementById('ctl00_lk');
            var pnSubscribeThanks = document.getElementById('pnSubscribeThanks');


            //             alert(ctrlvalPhone);
            //             return false;
            if (ctrlvalPhone.value.trim() == '') {
                ctrlvalPhone.className = 'inputError';
                ctrlvalPhone.focus();
                return false;
            }
            else if (valid_email(ctrlvalPhone.value)) {
                ctrlvalPhone.className = 'inputError';
                ctrlvalPhone.focus();
                return false;
            }
            else {
                ctrlvalPhone.className = '';
                ctrlvalPhone.value = '';
                pnSubscribeThanks.style.display = 'block';
                //lkbtn.className = 'TurnBlue';
                return false;
            }

        }

        function CloseReset() {
            var pnSubscribeThanks = document.getElementById('pnSubscribeThanks');
            pnSubscribeThanks.style.display = 'none';
        }

        function TurnBlue() {
            var ctrlvalPhone = document.getElementById('ctl00_txtEmail');
            var lkbtn = document.getElementById('ctl00_lk');
            //alert(ctrlvalPhone.value.length);
            if (ctrlvalPhone.value.length > 0) {

                lkbtn.className = 'TurnBlue';
            }
            else {
                //alert(ctrlvalPhone.value.length);
                lkbtn.className = '';
            }

        }

        function ValidCalculate() {

            //var regExp = /^0[0-9].*$/
            var ctrlvalPhone = document.getElementById('ctl00_ddlFromCountry');

            if (ctrlvalPhone.value == '0') {
                ctrlvalPhone.className = 'defaultfull inputError';
                ctrlvalPhone.focus();
                return false;
            }

            else {
                ctrlvalPhone.className = 'defaultfull';
                //ctrlvalPhone.value = '';
                //pnSubscribeThanks.style.display = 'block';
                //lkbtn.className = 'TurnBlue';

            }

            var ctrltoCountry = document.getElementById('ctl00_ddlToCountry');

            if (ctrltoCountry.value == '0') {
                ctrltoCountry.className = 'defaultfull inputError';
                ctrltoCountry.focus();
                return false;
            }

            else {
                ctrltoCountry.className = 'defaultfull';
                //ctrlvalPhone.value = '';
                //pnSubscribeThanks.style.display = 'block';
                //lkbtn.className = 'TurnBlue';

            }

        }

        
    </script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-7094101-1', 'auto');
        ga('send', 'pageview');

    </script>
    <!--Start of Tawk.to Script-->
    
    <!--End of Tawk.to Script-->
    
<title>

</title></head>
<body>
    <form name="aspnetForm" method="post" action="./jquery-1.8.2.js?404%3bhttps%3a%2f%2fwww.clay.co.in%3a443%2fjs%2fjquery-1.8.2.js" id="aspnetForm" novalidate="">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=3aUhe9n2OyprH8ePmuswd-EE65XYBMWKDNvttxdhaS1ShdGjJ1_wnraavm305aL8nXYiwkegcMyfZ-pjzjmJGptdON41&amp;t=636354654046607314" type="text/javascript"></script>


<script src="/ScriptResource.axd?d=GyHojo6aAbWnsCffwhST6p69G8MeuiWb-QFe5253dmi855rIsMNjAlOK9XThGPaERHHGYKxaxqbLhcrCPh8kz_4bhuGN_hrgWCEhVK2MI0Of_mYRZFbinjoXX77aVgm2AGDDmg2&amp;t=3a1336b1" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

<script src="/ScriptResource.axd?d=hkfGpcezLZsN8gsqhknUA7n1uo_AvHBkUPxLFOQISkFK9J4vO2frXHHHrOYjzZu5X_PC3B5jVxEnjnfObJSw3G2tmTrJDunRk6ybsH1v56cEUMcZyvzmzuSycRlsyg15c-x0sA2&amp;t=3a1336b1" type="text/javascript"></script>
<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="193A34DB" />
	<input type="hidden" name="__SCROLLPOSITIONX" id="__SCROLLPOSITIONX" value="0" />
	<input type="hidden" name="__SCROLLPOSITIONY" id="__SCROLLPOSITIONY" value="0" />
	<input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="" />
</div>
    <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$Sc1', 'aspnetForm', ['tctl00$ProfileCountryUpdatePanel',''], ['ctl00$lbCalculate',''], [], 90, 'ctl00');
//]]>
</script>

    <a name="goTop" id="goTop"></a>
    <div class="mostOuter">
        <div class="topline">
            <div class="leftHs">
                &nbsp;</div>
            <div class="rightHs">
                <div class="contactLink">
                    <a href="#" class="callIco">Customer Care: +91-11-66470000</a></div>
                
            </div>
        </div>
        <div class="downTop">
            <div class="logoPlace">
                <a href="Default.aspx">
                    <img src="images/logo.png" alt="Logo" /></a></div>
            <ul class="headBtns">
                <li class="headVrMenu"></li>
                <li id="ctl00_divloginusercontrol"><a href="Login.aspx" class="headUser"></a>
                </li>
                
                <li class=""><span id="ctl00_cartCount" class="countItem">0</span><a class="headCart"
                    href="order-shopping-cart.aspx"></a></li>
                <li class="siteSearch">
                    <div class="srchInp">
                        <input type="text" placeholder="Search" /></div>
                    <a href="javascript:void(0);"></a></li>
            </ul>
            <nav id="ddmenu">
    <div class="menu-icon"></div>
    <ul>
    <li><a class="top-heading">Explore Services</a>
    <i class="caret"></i>
    <ul class="dropdown"><li><a href="international-prepaid-sim-cards.aspx">Prepaid</a></li>
    <li><a href="international-postpaid-sim-card.aspx">Postpaid</a></li>
    <li><a href="forex.aspx">Forex</a></li>
    <li><a href="offers.aspx">Offers</a></li>
    </ul>
    </li>
    <li><a class="top-heading">Quick Care</a><i class="caret"></i>
    <ul class="dropdown"><li><a href="quickrecharge.aspx">Quick Recharge</a></li>
                        <li><a href="quickpay.aspx">Quick Pay</a></li>
    </ul>
 </li>
	</ul>
</nav>
        </div>
        <div class="vrMenu">
            <div class="vrMenuSpace">
            </div>
            <div class="menuInner">
                <div class="headr">
                    <a href="default.aspx"></a>
                </div>
                <div id="firstpane" class="menu_list">
                    <!--Code for menu starts here-->
                    <p class="menu_head hideOnPc">
                        <a href="Javascript:void(0);">Explore Services</a></p>
                    <div class="menu_body">
                        <span class="dwArrow"></span><a href="international-postpaid-sim-card.aspx">Postpaid</a>
                        <a href="international-prepaid-sim-cards.aspx">Prepaid</a> <a href="forex.aspx">Forex</a>
                        <a href="offers.aspx">Offers</a>
                    </div>
                    <p class="menu_head hideOnPc">
                        <a href="Javascript:void(0);">Quick Care</a></p>
                    <div class="menu_body">
                        <span class="dwArrow"></span><a href="quickrecharge.aspx">Quick Recharge</a> <a href="quickpay.aspx">
                            Quick Pay</a>
                    </div>
                    <p class="menu_head">
                        <a href="Javascript:void(0);">About Us</a>
                        <div class="menu_body">
                            <span class="dwArrow"></span><a href="who-we-are.aspx">Who We Are</a> <a href="whats_new.aspx">
                                What's New</a> <a href="offers.aspx">Offers</a>
                        </div>
                    </p>
                    <p class="menu_head">
                        <a href="Javascript:void(0);">Business</a></p>
                    <div class="menu_body">
                        <span class="dwArrow"></span><a href="vat.aspx">VAT Reclaim</a>
                        
                        <a href="broadcastpro.aspx">Broadcast Pro App</a>
                    </div>
                    
                    <p class="menu_head">
                        <a href="Javascript:void(0);">Media</a>
                        <div class="menu_body">
                            <span class="dwArrow"></span><a href="media-center-news.aspx">News Room</a> <a href="media-center-interviews.aspx">
                                Interviews</a><a href="media-center-tvc.aspx">Commercials</a> <a href="media-center-testimonials.aspx">
                                    Testimonials</a>
                        </div>
                    </p>
                    <p class="menu_head">
                        <a href="Javascript:void(0);">Support</a>
                        <div class="menu_body">
                            <span class="dwArrow"></span><a href="faq.aspx">FAQs</a><a href="support-troubleshooting.aspx">Troubleshoot</a><a
                                href="support-glossary.aspx">Glossary</a> <a href="diallinginstruction.aspx">Dialling
                                    Instructions</a>
                        </div>
                    </p>
                    <p class="menu_head">
                        <a href="Javascript:void(0);">Contact</a>
                        <div class="menu_body">
                            <span class="dwArrow"></span><a href="contact-partners.aspx">Partners</a><a href="contact-us.aspx">Locate
                                us</a> <a href="contact-feedback.aspx">Feedback</a> <a href="contact-careers.aspx">Careers</a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        <div class="contentBox">
            
            
    <div class="thankyouOuter">
        <div class="pageNotFound">
            sorry page not found<br />
        </div>
        <div class="massage404">
            We couldn't find the page you were looking for.
            <br />
            Feel free to contact us. If there's anything we are missing something in our website.
            <br />
            <br />
            <br />
            Team-Clay<br />
            <img src="images/logo-gray.png" alt="Clay Team" class="signatureClay" />
        </div>
        <div class="clear">
        </div>
    </div>

            <div class="footerOuter">
                <div class="grayLogo">
                    <img src="images/logo-gray.png" alt="Clay Telecom" /></div>
                <div class="subscribeBox">
                    <label>
                        Subscribe for Offers</label>
                    <div class="clear">
                    </div>
                    <div id="ctl00_pnSubscribe">
	
                        <div class="afterSubmit">
                            
                            
                            <input name="ctl00$txtEmail" type="text" id="ctl00_txtEmail" onkeypress="TurnBlue();" placeholder="Your E-mail *" /><div
                                class="subscribeBtn">
                                <a onclick="return ValidSubscribe();" id="ctl00_lk" href="javascript:__doPostBack(&#39;ctl00$lk&#39;,&#39;&#39;)">Subscribe</a>
                            </div>
                        </div>
                    
</div>
                    <div class="afterSubmitMsg" id="pnSubscribeThanks" style="display: none">
                        Thank you for subscribing Clay offers<span class="reset" onclick="CloseReset()"></span></div>
                </div>
                <hr />
                <div class="clear">
                </div>
                <div class="blocks block1">
                    <div class="headArea">
                        <h2>
                            About Us</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="who-we-are.aspx">Who We Are</a></li>
                        <li><a href="whats_new.aspx">What's New</a></li>
                        <li><a href="offers.aspx">Offers</a></li>
                    </ul>
                </div>
                <div class="blocks block2">
                    <div class="headArea">
                        <h2>
                            Business Solutions</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="vat.aspx">VAT Reclaim </a></li>
                        
                        <li><a href="broadcastpro.aspx">Broadcast Pro App</a></li>
                        <li><a href="resellersprogram.aspx">Reseller Program</a></li>
                        
                    </ul>
                </div>
                <div class="blocks block3">
                    <div class="headArea">
                        <h2>
                            Explore Services</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="international-prepaid-sim-cards.aspx">Prepaid</a></li>
                        <li><a href="international-postpaid-sim-card.aspx">Postpaid</a></li>
                        <li><a href="forex.aspx">Forex</a></li>
                        <li><a href="travel-insurance.aspx">Insurance</a></li>
                </div>
                <div class="blocks block4">
                    <div class="headArea">
                        <h2>
                            Media Centre</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="media-center-news.aspx">News Room</a></li>
                        <li><a href="media-center-interviews.aspx">Interviews</a></li>
                        <li><a href="media-center-tvc.aspx">Commercials</a></li>
                        <li><a href="media-center-testimonials.aspx">Testimonials</a></li></ul>
                </div>
                
                <div class="blocks block5">
                    <div class="headArea">
                        <h2>
                            Support</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="faq.aspx">FAQ</a></li>
                        <li><a href="support-troubleshooting.aspx">Troubleshoot</a></li>
                        <li><a href="support-glossary.aspx">Glossary</a></li>
                        <li><a href="diallinginstruction.aspx">Dialling Instructions</a></li>
                    </ul>
                </div>
                <div class="blocks block6">
                    <div class="headArea">
                        <h2>
                            Contact Us</h2>
                        <span></span>
                    </div>
                    <ul class="mainLink">
                        <li><a href="contact-partners.aspx">Partners</a></li>
                        <li><a href="contact-us.aspx">Locate Us</a></li>
                        <li><a href="contact-feedback.aspx">Feedback</a></li>
                        <li><a href="contact-careers.aspx">Careers</a></li>
                    </ul>
                </div>
                <div class="clear">
                </div>
                <div class="copyOuter">
                    <div class="copyLeft">
                        &copy; 2017 Falcon Business Resources Pvt. Ltd. <span>|</span> <a href="pivacy-policy.aspx">
                            Privacy Policy</a>
                        </div>
                    <div class="copyRight">
                        <ul class="socialFoot">
                            <li><a class="fb" href="https://www.facebook.com/claytelecom" target="_blank"></a>
                            </li>
                            <li><a class="ttr" href="https://twitter.com/ClayTelecom" target="_blank"></a></li>
                            <li><a class="lkIn" href="https://www.linkedin.com/company/clay-telecom" target="_blank">
                            </a></li>
                            <li><a class="youTb" href="https://www.youtube.com/channel/UCp8L8rA5N6h3g5BfZFzyZDQ"
                                target="_blank"></a></li>
                            <div class="clearOnTab">
                            </div>
                            
                            
                            <li><a href="https://seal.panaceainfosec.com/index.php?certid=CERT895BA0B940" onclick="window.open(this.href,'Panacea Certificate','height=500,width=650,scrollbar=yes,status=no,menubar=no,toolbar=no,resizable'); return false"
                                class="panacea pciSeal"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="slideMetop">
                <a href="#goTop"></a>
            </div>
        </div>
    </div>
    <div class="planDetailTbl">
        <div class="headStrip">
            <span id="ctl00_lblPlanHeader"></span>
            <a href="javascript:void(0);" class="maskclose"></a>
        </div>
        <div class="tableHolder">
            <span id="ctl00_lblPlanCurrency" class="crncyTyp"></span>
            <div class="o-section">
                <div id="tabs" class="c-tabs no-js">
                    <div class="c-tabs-nav">
                        <a href="#" class="c-tabs-nav__link" id="rpTopdivBasic" onclick="SetTab('1')">
                            <!--<i class="fa fa-home"></i>-->
                            <span>Clay Basic</span> </a><a href="#" class="c-tabs-nav__link" id="rpTopdivValue"
                                onclick="SetTab('2')">
                                <!--<i class="fa fa-book"></i>-->
                                <span>Clay Value</span> </a><a href="#" class="c-tabs-nav__link" id="rpTopdivPlatinum"
                                    onclick="SetTab('3')">
                                    <!--<i class="fa fa-heart"></i>-->
                                    <span>Clay Platinum</span> </a>
                    </div>
                    
                    <div class="c-tab" id="rpdivBasic">
                        <div class="c-tab__content">
                            
                            
                        </div>
                    </div>
                    <div class="c-tab" id="rpdivValue">
                        <div class="c-tab__content">
                            
                            
                        </div>
                    </div>
                    <div class="c-tab" id="rpdivPlatinum">
                        <div class="c-tab__content">
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="getQuoteBox">
        <div class="getQuoteCloseBtn">
            <a href="#0">Close</a></div>
        
<script type="text/javascript">


    function valid_email(eml) {
        //declare the required variables
        var mint_len;
        var mstr_eml = eml;
        var mint_at = 0;
        var mint_atnum = 0;
        var mint_dot = 0;
        var mint_dotnum = 0;

        mint_len = eml.length; //takes the length of the email address entered

        //checking for the symbol single quote. If found replace it with its html code
        if (mstr_eml.indexOf("'") != -1) {
            mstr_eml = mstr_eml.replace("'", "'");
        }

        //checking for the (@) & (.) symbol
        for (var iloop = 0; iloop < mint_len; iloop++) {
            if (mstr_eml.charAt(iloop) == "@") {
                mint_at = iloop + 1;
                mint_atnum = mint_atnum + 1;
            }
            if (mstr_eml.charAt(iloop) == ".") {
                mint_dot = iloop + 1;
                mint_dotnum = mint_dotnum + 1;
            }
        }

        //if nothing entered in the field
        if (mstr_eml == "") {
            return true;
        }

        //if @ entered more than once & dot (.) entered more than 4 times
        else
            if ((mint_atnum != 1) || (mint_dotnum > 4) || ((mint_dot - mint_at) < 2) || ((mint_len - mint_dot) < 2) || (mint_at < 3)) {
                return true;
            }

            //if any blank space is entered in the email address
            else if (mstr_eml.indexOf(" ") != -1) {
                return true;
            }
        return false;
    }
    function ValidateUserQuotes() {

        var ctrlval = document.getElementById('ctl00_uc1_txtUser');

        if (ctrlval.value == '') {
            ctrlval.className = "error";
            return false;
        }

        else {
            ctrlval.className = "";
            return true;
        }
    }






    function isNumberKey(event) {
        //            var charCode = (evt.which) ? evt.which : event.keyCode
        //            
        //            if (charCode > 31 && (charCode < 48 || charCode > 57))
        //                return false;

        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
        // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
        // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.returnValue = false;
                return false;
            }
        }

        return true;
    }

    function ValidateOpCheckoutQuotes() {

        var regExp = /^0[0-9].*$/
        var ctrlvalPhone = document.getElementById('ctl00_uc1_txtUser');
        if (ctrlvalPhone.value.trim() == '') {
            ctrlvalPhone.className = 'default name inputError';
            ctrlvalPhone.focus();
            return false;
        }
        else {
            ctrlvalPhone.className = 'default name';
        }

        //        var ctrltxtCompanyName = document.getElementById('ctl00_uc1_txtCompanyName');
        //        if (ctrltxtCompanyName.value.trim() == '') {
        //            ctrltxtCompanyName.className = 'default companyName inputError';
        //            ctrltxtCompanyName.focus();
        //            return false;
        //        }
        //        else {
        //            ctrltxtCompanyName.className = 'default companyName';
        //        }

        var ctrltxtEmail = document.getElementById('ctl00_uc1_txtEmail');
        if (ctrltxtEmail.value.trim() == '') {
            ctrltxtEmail.className = 'default email inputError';
            ctrltxtEmail.focus();
            return false;
        }
        else if (valid_email(ctrltxtEmail.value)) {
            ctrltxtEmail.className = 'default email inputError';
            ctrltxtEmail.focus();
            return false;
        }
        else {
            ctrltxtEmail.className = 'default email';
        }

        var ctrltxtPhoneNumber = document.getElementById('ctl00_uc1_txtPhoneNumber');
        //        if (ctrltxtPhoneNumber.value.trim() == '') {
        //            ctrltxtPhoneNumber.className = 'default phone inputError';
        //            return false;
        //        }
        if (!isNaN(ctrltxtPhoneNumber.value)) {
            if (ctrltxtPhoneNumber.value == '') {
                ctrltxtPhoneNumber.className = 'default phone inputError';
                ctrltxtPhoneNumber.focus();
                return false;
            }
            else if (ctrltxtPhoneNumber.value.length < 10) {
                ctrltxtPhoneNumber.className = 'default phone inputError';
                ctrltxtPhoneNumber.focus();
                return false;
            }
            else if (ctrltxtPhoneNumber.value.length == 10) {
                if (!regExp.test(ctrltxtPhoneNumber.value)) {
                    ctrltxtPhoneNumber.className = 'default phone';
                    //return true;
                }

                else {
                    ctrltxtPhoneNumber.className = 'default phone inputError';
                    ctrltxtPhoneNumber.focus();
                    return false;
                }
            }
            else if (ctrltxtPhoneNumber.value.length == 11) {
                if (!regExp.test(ctrltxtPhoneNumber.value)) {
                    ctrltxtPhoneNumber.className = 'default phone inputError';
                    ctrltxtPhoneNumber.focus();
                    return false;
                }
                else {
                    ctrltxtPhoneNumber.className = 'default phone inputError';
                    //return true;
                }
            }
        }
        else {
            ctrltxtPhoneNumber.className = 'default phone inputError';
            ctrltxtPhoneNumber.focus();
            return false;
        }





        var ctrlddlcountry = document.getElementById('ctl00_uc1_ddlcountry');
        if (ctrlddlcountry.value.trim() == '0') {
            ctrlddlcountry.className = 'default countryTravel width100 inputError';
            ctrlddlcountry.focus();
            return false;
        }
        else {
            ctrlddlcountry.className = 'default countryTravel width100';
        }

        var ctrltxtRemarks = document.getElementById('ctl00_uc1_txtRemarks');
        if (ctrltxtRemarks.value.trim() == '') {
            ctrltxtRemarks.className = 'default width100 partnerMassage margin-bottom-20p inputError';
            ctrltxtRemarks.focus();
            return false;
        }
        else {
            ctrltxtEmail.className = 'default width100 partnerMassage margin-bottom-20p';
        }



        return check;
    }
</script>
<div class="getQtForm">
    <ul>
        <li>
            <input name="ctl00$uc1$txtUser" type="text" id="ctl00_uc1_txtUser" class="default name" pattern="[A-Za-z0-9 ]{1,20}" title="This field cant be left blank" required="required" placeholder="Full Name *" /></li>
        <li>
            <input name="ctl00$uc1$txtCompanyName" type="text" id="ctl00_uc1_txtCompanyName" class="default" placeholder="Company" /></li>
        <li>
            <input name="ctl00$uc1$txtEmail" type="text" id="ctl00_uc1_txtEmail" class="default email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" title="Write a valid email" required="required" placeholder="Email ID *" /></li>
        <li>
            <input name="ctl00$uc1$txtPhoneNumber" type="text" id="ctl00_uc1_txtPhoneNumber" class="default phone" pattern="[789][0-9]{9}" title="Write a valid 10 digits mobile number" required="required" placeholder="Mobile Number *" /></li>
        <li style="width: 98.2%">
            <select name="ctl00$uc1$ddlcountry" id="ctl00_uc1_ddlcountry" tabindex="5" class="default countryTravel width100">
	<option selected="selected" value="0">Select Your Destination</option>
	<option value="AU">Australia</option>
	<option value="BR">Brazil</option>
	<option value="CA">Canada</option>
	<option value="CN">China</option>
	<option value="WU">Europe</option>
	<option value="DE">Germany</option>
	<option value="HK">Hong Kong</option>
	<option value="ID">Indonesia</option>
	<option value="IT">Italy</option>
	<option value="MY">Malaysia</option>
	<option value="MX">Mexico</option>
	<option value="RU">Russia</option>
	<option value="SG">Singapore</option>
	<option value="ZA">South Africa</option>
	<option value="LK">Sri Lanka</option>
	<option value="TH">Thailand</option>
	<option value="GB">United Kingdom</option>
	<option value="US">USA</option>
	<option value="VN">Vietnam</option>
	<option value="-1">Rest Of The World</option>

</select>
            
        </li>
        <li>
            <textarea name="ctl00$uc1$txtRemarks" id="ctl00_uc1_txtRemarks" class="default width100 partnerMassage margin-bottom-20p" pattern="[A-Za-z0-9]{100,800}" title="Type atleast 100 characters" required="required" placeholder="Message *" minlength="100" maxlength="800"></textarea>
            <div class="bigBluefill margin-bottom-20p">
                <a onclick="return ValidateOpCheckoutQuotes();" id="ctl00_uc1_lnkGetQuotes" href="javascript:__doPostBack(&#39;ctl00$uc1$lnkGetQuotes&#39;,&#39;&#39;)">Get Quote</a></div>
        </li>
    </ul>
</div>

    </div>
    <div class="tariffChecker">
        <div class="headStrip">
            Use tariff checker to know call rates from the country of your travel to rest of
            the world. <a href="javascript:void(0);" class="maskclose"></a>
        </div>
        <div class="checkherHolder">
            <h1>
                Clay Prepaid SIM Coverage</h1>
            <div class="clear">
            </div>
            <div class="originSelector">
                <label>
                    Clay user calling from</label>
                <select name="ctl00$ddlFromCountry" id="ctl00_ddlFromCountry" class="defaultfull" tabindex="1">
	<option value="0">Select the Origin of call</option>
	<option value="AFG">Afghanistan</option>
	<option value="ALB">Albania</option>
	<option value="DZA">Algeria</option>
	<option value="AND">Andorra</option>
	<option value="AGO">Angola</option>
	<option value="AIA">Anguilla</option>
	<option value="ATG">Antigua/Barbuda</option>
	<option value="ARG">Argentina</option>
	<option value="ARM">Armenia</option>
	<option value="ABW">Aruba</option>
	<option value="AUS">Australia</option>
	<option value="AUT">Austria</option>
	<option value="AZE">Azerbaijan</option>
	<option value="BHR">Bahrain</option>
	<option value="BGD">Bangladesh</option>
	<option value="BRB">Barbados</option>
	<option value="BLR">Belarus</option>
	<option value="BEL">Belgium</option>
	<option value="BEN">Benin</option>
	<option value="BMU">Bermuda</option>
	<option value="BOL">Bolivia</option>
	<option value="BIH">Bosnia/Herzegovina</option>
	<option value="BWA">Botswana</option>
	<option value="BRA">Brazil</option>
	<option value="VGB">British Virgin Islands</option>
	<option value="BRN">Brunei Darussalam</option>
	<option value="BGR">Bulgaria</option>
	<option value="BFA">Burkina Faso</option>
	<option value="BDI">Burundi</option>
	<option value="KHM">Cambodia</option>
	<option value="CMR">Cameroon</option>
	<option value="CAN">Canada</option>
	<option value="CPV">Cape Verde Islands</option>
	<option value="CYM">Cayman Islands</option>
	<option value="TCD">Chad</option>
	<option value="CHL">Chile</option>
	<option value="CHN">China</option>
	<option value="COL">Colombia</option>
	<option value="COG">Congo</option>
	<option value="COD">Congo Dem Rep</option>
	<option value="CRI">Costa Rica</option>
	<option value="HRV">Croatia Republic</option>
	<option value="CYP">Cyprus</option>
	<option value="CZE">Czech Republic</option>
	<option value="DNK">Denmark</option>
	<option value="DMA">Dominica</option>
	<option value="DOM">Dominican Republic</option>
	<option value="EGY">Egypt</option>
	<option value="GNQ">Equatorial Guinea</option>
	<option value="EST">Estonia</option>
	<option value="ETH">Ethiopia</option>
	<option value="FRO">Faeroe Islands</option>
	<option value="FJI">Fiji Islands</option>
	<option value="FIN">Finland</option>
	<option value="FRA">France</option>
	<option value="GUF">French Guiana</option>
	<option value="PYF">French Polynesia</option>
	<option value="GAB">Gabon</option>
	<option value="GMB">Gambia</option>
	<option value="GEO">Georgia</option>
	<option value="DEU">Germany</option>
	<option value="GHA">Ghana</option>
	<option value="GIB">Gibraltar</option>
	<option value="GRC">Greece</option>
	<option value="GRL">Greenland</option>
	<option value="GRD">Grenada</option>
	<option value="GLP">Guadaloupe</option>
	<option value="GUM">Guam</option>
	<option value="GIN">Guinea</option>
	<option value="GUY">Guyana</option>
	<option value="HTI">Haiti</option>
	<option value="HND">Honduras</option>
	<option value="HKG">Hong Kong</option>
	<option value="HUN">Hungary</option>
	<option value="ISL">Iceland</option>
	<option value="IDN">Indonesia</option>
	<option value="IRN">Iran</option>
	<option value="IRQ">Iraq</option>
	<option value="IRL">Ireland</option>
	<option value="ISR">Israel</option>
	<option value="ITA">Italy</option>
	<option value="CIV">Ivory Coast</option>
	<option value="JPN">Japan</option>
	<option value="JOR">Jordan</option>
	<option value="KAZ">Kazakhstan</option>
	<option value="KEN">Kenya</option>
	<option value="KWT">Kuwait</option>
	<option value="LAO">Laos</option>
	<option value="LVA">Latvia</option>
	<option value="LBN">Lebanon</option>
	<option value="LBR">Liberia</option>
	<option value="LBY">Libya</option>
	<option value="LIE">Liechtenstein</option>
	<option value="LTU">Lithuania</option>
	<option value="LUX">Luxembourg</option>
	<option value="MAC">Macau</option>
	<option value="MKD">Macedonia</option>
	<option value="MDG">Madagascar</option>
	<option value="MWI">Malawi</option>
	<option value="MYS">Malaysia</option>
	<option value="MLI">Mali Republic</option>
	<option value="MLT">Malta</option>
	<option value="MTQ">Martinique (Fr. Antilles)</option>
	<option value="MRT">Mauritania</option>
	<option value="MYT">Mayotte Island</option>
	<option value="MDA">Moldova</option>
	<option value="MNG">Mongolia</option>
	<option value="MSR">Monsterrat</option>
	<option value="MNE">Montenegro</option>
	<option value="MAR">Morocco</option>
	<option value="MOZ">Mozambique</option>
	<option value="NAM">Namibia</option>
	<option value="NPL">Nepal</option>
	<option value="NLD">Netherlands</option>
	<option value="ANT">Netherlands Antilles</option>
	<option value="NZL">New Zealand</option>
	<option value="NER">Niger Republic</option>
	<option value="NGA">Nigeria</option>
	<option value="NOR">Norway</option>
	<option value="OMN">Oman</option>
	<option value="PSE">Palestine</option>
	<option value="PAN">Panama</option>
	<option value="PRY">Paraguay</option>
	<option value="PER">Peru</option>
	<option value="PHL">Philippines</option>
	<option value="POL">Poland</option>
	<option value="PRT">Portugal</option>
	<option value="PRI">Puetro Rico </option>
	<option value="QAT">Qatar</option>
	<option value="REU">Reunion Island</option>
	<option value="ROU">Romania</option>
	<option value="RUS">Russia</option>
	<option value="RWA">Rwanda</option>
	<option value="SAU">Saudi Arabia</option>
	<option value="SEN">Senegel Republic</option>
	<option value="SRB">Serbia</option>
	<option value="SLE">Sierra Leone</option>
	<option value="SGP">Singapore</option>
	<option value="SVK">Slovakia</option>
	<option value="SVN">Slovenia Republic</option>
	<option value="ZAF">South Africa</option>
	<option value="KOR">South Korea</option>
	<option value="ESP">Spain</option>
	<option value="LKA">Sri Lanka</option>
	<option value="KNA">St. Kitts &amp; Nevis  </option>
	<option value="LCA">St. Lucia</option>
	<option value="VCT">St. Vincent/Grenadines</option>
	<option value="SDN">Sudan</option>
	<option value="SWE">Sweden</option>
	<option value="CHE">Switzerland</option>
	<option value="SYR">Syria</option>
	<option value="TWN">Taiwan</option>
	<option value="TZA">Tanzania</option>
	<option value="THA">Thailand</option>
	<option value="TGO">Togo Republic of</option>
	<option value="TTO">Trinidad/Tobago</option>
	<option value="TUR">Turkey</option>
	<option value="TCA">Turks/Caicos Islands</option>
	<option value="UGA">Uganda</option>
	<option value="UKR">Ukraine</option>
	<option value="ARE">United Arab Emirates</option>
	<option value="GBR">United Kingdom</option>
	<option value="URY">Uruguay</option>
	<option value="USA">USA</option>
	<option value="VIR">USA - Virgin Islands</option>
	<option value="VEN">Venezuela</option>
	<option value="VNM">Vietnam</option>
	<option value="YEM">Yemen Arab Republic</option>
	<option value="ZMB">Zambia</option>
	<option value="ZWE">Zimbabwe</option>
</select>
            </div>
            <div class="originSelector">
                <label>
                    Clay user calling to</label>
                <select name="ctl00$ddlToCountry" id="ctl00_ddlToCountry" class="defaultfull" tabindex="2">
	<option value="0">Select the Origin of call</option>
	<option value="AFG">Afghanistan</option>
	<option value="ALB">Albania</option>
	<option value="DZA">Algeria</option>
	<option value="ASM">American Samoa</option>
	<option value="AND">Andorra</option>
	<option value="AGO">Angola</option>
	<option value="AIA">Anguilla</option>
	<option value="ATG">Antigua/Barbuda</option>
	<option value="ARG">Argentina</option>
	<option value="ARM">Armenia</option>
	<option value="ABW">Aruba</option>
	<option value="AUS">Australia</option>
	<option value="AUT">Austria</option>
	<option value="AZE">Azerbaijan</option>
	<option value="BHR">Bahrain</option>
	<option value="BGD">Bangladesh</option>
	<option value="BRB">Barbados</option>
	<option value="BLR">Belarus</option>
	<option value="BEL">Belgium</option>
	<option value="BEN">Benin</option>
	<option value="BMU">Bermuda</option>
	<option value="BTN">Bhutan</option>
	<option value="BOL">Bolivia</option>
	<option value="BIH">Bosnia/Herzegovina</option>
	<option value="BWA">Botswana</option>
	<option value="BRA">Brazil</option>
	<option value="VGB">British Virgin Islands</option>
	<option value="BRN">Brunei Darussalam</option>
	<option value="BGR">Bulgaria</option>
	<option value="BFA">Burkina Faso</option>
	<option value="BDI">Burundi</option>
	<option value="KHM">Cambodia</option>
	<option value="CMR">Cameroon</option>
	<option value="CAN">Canada</option>
	<option value="CPV">Cape Verde Islands</option>
	<option value="CYM">Cayman Islands</option>
	<option value="CAF">Central African Republic</option>
	<option value="TCD">Chad</option>
	<option value="CHL">Chile</option>
	<option value="CHN">China</option>
	<option value="COL">Colombia</option>
	<option value="COM">Comoros</option>
	<option value="COG">Congo</option>
	<option value="COD">Congo Dem Rep</option>
	<option value="COK">Cook Islands</option>
	<option value="CRI">Costa Rica</option>
	<option value="HRV">Croatia Republic</option>
	<option value="CYP">Cyprus</option>
	<option value="CZE">Czech Republic</option>
	<option value="DNK">Denmark</option>
	<option value="DMA">Dominica</option>
	<option value="DOM">Dominican Republic</option>
	<option value="TLS">East Timor</option>
	<option value="EGY">Egypt</option>
	<option value="GNQ">Equatorial Guinea</option>
	<option value="ERI">Eritrea</option>
	<option value="EST">Estonia</option>
	<option value="ETH">Ethiopia</option>
	<option value="FRO">Faeroe Islands</option>
	<option value="FLK">Falkland Islands</option>
	<option value="FJI">Fiji Islands</option>
	<option value="FIN">Finland</option>
	<option value="FRA">France</option>
	<option value="GUF">French Guiana</option>
	<option value="PYF">French Polynesia</option>
	<option value="GAB">Gabon</option>
	<option value="GMB">Gambia</option>
	<option value="GEO">Georgia</option>
	<option value="DEU">Germany</option>
	<option value="GHA">Ghana</option>
	<option value="GIB">Gibraltar</option>
	<option value="GRC">Greece</option>
	<option value="GRL">Greenland</option>
	<option value="GRD">Grenada</option>
	<option value="GLP">Guadaloupe</option>
	<option value="GUM">Guam</option>
	<option value="GIN">Guinea</option>
	<option value="GNB">Guinea Bissau</option>
	<option value="GUY">Guyana</option>
	<option value="HTI">Haiti</option>
	<option value="HND">Honduras</option>
	<option value="HKG">Hong Kong</option>
	<option value="HUN">Hungary</option>
	<option value="ISL">Iceland</option>
	<option value="IND">India</option>
	<option value="IDN">Indonesia</option>
	<option value="IRN">Iran</option>
	<option value="IRQ">Iraq</option>
	<option value="IRL">Ireland</option>
	<option value="ISR">Israel</option>
	<option value="ITA">Italy</option>
	<option value="CIV">Ivory Coast</option>
	<option value="JPN">Japan</option>
	<option value="JOR">Jordan</option>
	<option value="KAZ">Kazakhstan</option>
	<option value="KEN">Kenya</option>
	<option value="KIR">Kiribati</option>
	<option value="KWT">Kuwait</option>
	<option value="LAO">Laos</option>
	<option value="LVA">Latvia</option>
	<option value="LBN">Lebanon</option>
	<option value="LSO">Lesotho</option>
	<option value="LBR">Liberia</option>
	<option value="LBY">Libya</option>
	<option value="LIE">Liechtenstein</option>
	<option value="LTU">Lithuania</option>
	<option value="LUX">Luxembourg</option>
	<option value="MAC">Macau</option>
	<option value="MKD">Macedonia</option>
	<option value="MDG">Madagascar</option>
	<option value="MWI">Malawi</option>
	<option value="MYS">Malaysia</option>
	<option value="MDV">Maldives</option>
	<option value="MLI">Mali Republic</option>
	<option value="MLT">Malta</option>
	<option value="MHL">Marshall Islands</option>
	<option value="MTQ">Martinique (Fr. Antilles)</option>
	<option value="MRT">Mauritania</option>
	<option value="MUS">Mauritius</option>
	<option value="MYT">Mayotte Island</option>
	<option value="FSM">Micronesia</option>
	<option value="MDA">Moldova</option>
	<option value="MCO">Monaco</option>
	<option value="MNG">Mongolia</option>
	<option value="MSR">Monsterrat</option>
	<option value="MNE">Montenegro</option>
	<option value="MAR">Morocco</option>
	<option value="MOZ">Mozambique</option>
	<option value="MMR">Myanmar/Burma</option>
	<option value="NAM">Namibia</option>
	<option value="NPL">Nepal</option>
	<option value="NLD">Netherlands</option>
	<option value="ANT">Netherlands Antilles</option>
	<option value="NCL">New Caledonia  </option>
	<option value="NZL">New Zealand</option>
	<option value="NER">Niger Republic</option>
	<option value="NGA">Nigeria</option>
	<option value="NIU">Niue Island</option>
	<option value="PRK">North Korea</option>
	<option value="NOR">Norway</option>
	<option value="OMN">Oman</option>
	<option value="PLW">Palau</option>
	<option value="PSE">Palestine</option>
	<option value="PAN">Panama</option>
	<option value="PNG">Papua New Guinea</option>
	<option value="PRY">Paraguay</option>
	<option value="PER">Peru</option>
	<option value="PHL">Philippines</option>
	<option value="POL">Poland</option>
	<option value="PRT">Portugal</option>
	<option value="PRI">Puetro Rico </option>
	<option value="QAT">Qatar</option>
	<option value="REU">Reunion Island</option>
	<option value="ROU">Romania</option>
	<option value="RUS">Russia</option>
	<option value="RWA">Rwanda</option>
	<option value="SMR">San Marino</option>
	<option value="SAU">Saudi Arabia</option>
	<option value="SEN">Senegel Republic</option>
	<option value="SRB">Serbia</option>
	<option value="SLE">Sierra Leone</option>
	<option value="SGP">Singapore</option>
	<option value="SVK">Slovakia</option>
	<option value="SVN">Slovenia Republic</option>
	<option value="SOM">Somalia</option>
	<option value="ZAF">South Africa</option>
	<option value="KOR">South Korea</option>
	<option value="ESP">Spain</option>
	<option value="LKA">Sri Lanka</option>
	<option value="SHN">St. Helena</option>
	<option value="KNA">St. Kitts &amp; Nevis  </option>
	<option value="LCA">St. Lucia</option>
	<option value="SPM">St. Pierre Et Miquelon</option>
	<option value="VCT">St. Vincent/Grenadines</option>
	<option value="SDN">Sudan</option>
	<option value="SUR">Suriname</option>
	<option value="SWZ">Swaziland</option>
	<option value="SWE">Sweden</option>
	<option value="CHE">Switzerland</option>
	<option value="SYR">Syria</option>
	<option value="TWN">Taiwan</option>
	<option value="TZA">Tanzania</option>
	<option value="THA">Thailand</option>
	<option value="TGO">Togo Republic of</option>
	<option value="TKL">Tokelau</option>
	<option value="TON">Tonga Islands</option>
	<option value="TTO">Trinidad/Tobago</option>
	<option value="TUR">Turkey</option>
	<option value="TCA">Turks/Caicos Islands</option>
	<option value="TUV">Tuvalu</option>
	<option value="UGA">Uganda</option>
	<option value="UKR">Ukraine</option>
	<option value="ARE">United Arab Emirates</option>
	<option value="GBR">United Kingdom</option>
	<option value="URY">Uruguay</option>
	<option value="USA">USA</option>
	<option value="VIR">USA - Virgin Islands</option>
	<option value="VUT">Vanuatu</option>
	<option value="VAT">Vatican City</option>
	<option value="VEN">Venezuela</option>
	<option value="VNM">Vietnam</option>
	<option value="WLF">Wallis/Futuna Island</option>
	<option value="YEM">Yemen Arab Republic</option>
	<option value="ZMB">Zambia</option>
	<option value="ZWE">Zimbabwe</option>
</select>
            </div>
            <div class="calcBtn">
                <label>
                    &nbsp;</label><div class="bigBluefill width100 alignCenter">
                        <a onclick="return ValidCalculate();" id="ctl00_lbCalculate" tabindex="3" href="javascript:__doPostBack(&#39;ctl00$lbCalculate&#39;,&#39;&#39;)">Calculate</a>
                    </div>
            </div>
            <div id="ctl00_pnTariffDetail">
	
                <div class="tariffDetailBox">
                    <hr />
                    <div id="ctl00_ProfileCountryUpdatePanel">
		
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tariffTable">
                                <tr>
                                    <th colspan="2">
                                        Our Rates From <span id="ctl00_spanFromCountry">Albania</span> To <span id="ctl00_spanToCountry">Bangladesh</span>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Incoming Calls
                                    </td>
                                    <td>
                                        <span id="ctl00_lblIncomingCall"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Outgoing Calls (Call Back)
                                    </td>
                                    <td>
                                        <span id="ctl00_lblOutCallBack"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Outgoing Calls (Call Through)
                                    </td>
                                    <td>
                                        <span id="ctl00_lblOutCallThrough"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Outgoing SMS
                                    </td>
                                    <td>
                                        <span id="ctl00_lblOutSms"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Data Charges
                                    </td>
                                    <td>
                                        <span id="ctl00_lblDataCharges"></span>
                                    </td>
                                </tr>
                            </table>
                        
	</div>
                    <div class="tariffOtherDetail">
                        <h3>
                            <span>Coverage for Data Services</span></h3>
                        <ul>
                            
                            <li>* Data Pricing above is applicable on the listed mobile networks only. Other networks
                                may have higher charges applicable</li>
                            
                        </ul>
                    </div>
                </div>
            
</div>
        </div>
    </div>
    <div class="maskScreen">
    </div>
    <div class="getQuoteBtn">
        <a href="#0">Get Quote</a></div>
    <script type="text/javascript" src="js/parallaxbg.js"></script>
    

<script type="text/javascript">
//<![CDATA[

theForm.oldSubmit = theForm.submit;
theForm.submit = WebForm_SaveScrollPositionSubmit;

theForm.oldOnSubmit = theForm.onsubmit;
theForm.onsubmit = WebForm_SaveScrollPositionOnSubmit;
//]]>
</script>
</form>
</body>
</html>
