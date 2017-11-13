<html class=" js cssanimations csstransitions">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<script async="" src="static/analytics.js"></script>
<script async="" src="static/hotjar-536647.js"></script>
<script async="" src="static/hotjar-536647.js"></script>
</head>
<body>
	<titleclay home="" page="" title="" />
	<link rel="shortcut icon"
		href="https://www.clay.co.in/static/favicon.ico" type="image/x-icon"/>
	<link rel="stylesheet" type="text/css" href="static/reset.css"/>
	<link rel="stylesheet" type="text/css" 	href="static/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="static/main-style.css"/>
	<script src="static/ddmenu.js" type="text/javascript"/>
	<link rel="stylesheet" href="static/style-tabs.css"/>
	<script type="text/javascript" src="static/tabs.js"/>
	<link rel="stylesheet" type="text/css" href="static/style-slider.css" />
	<script type="text/javascript" src="static/modernizr.custom.28468.js"/>
	<script type="text/javascript" src="static/jquery.min.js"/>
	<script type="text/javascript" src="static/jquery-ui.js"/>
	<script type="text/javascript" src="static/jquery.cslider.js"></script>
	<script type="text/javascript"
		src="static/jquery.carouFredSel-5.5.0-packed.js"></script>
	<script type="text/javascript" src="static/jquery-tabs.js"></script>
	<script type="text/javascript" src="static/jquery.rateyo.js"></script>
	<script type="text/javascript"
		src="static/jquery.claylighbox.js"></script>
	<script type="text/javascript"
		src="static/clay-custom-scrollbar.js"></script>
	<script type="text/javascript"
		src="static/jquery.datetimepicker.full.js"></script>
	<script type="text/javascript"
		src="static/milestone-timeline.js"></script>
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

	<script src="static/jquery-1.8.2.js" type="text/javascript"></script>
	<script type="text/javascript">
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 536647, hjsv: 5 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');

        $(function () {
            getCountry();
        });

        function getCountry() {

            $.ajax({
                type: "GET",
                url: "handler_country.ashx?qtype=C&ptype=0",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var options = '';
                    for (var i = 0; i < data.length; i++) {
                        options += '<option value="' + data[i].Code + '">' + data[i].Name + '</option>';
                    }
                    var choose_country = document.getElementById('where-will-you-be-home');
                    choose_country.innerHTML = options;
                    choose_country.selectedIndex = 0;
                    select_skin('#where-will-you-be-home');
                },
                error: function (data) {

                }

            });
        }
        function loadProduct() {
            show();
            var choose_country = document.getElementById('where-will-you-be-home');
            var ctrlvalPhone = document.getElementById('hrViewPlan');


            if (choose_country.selectedIndex > 0) {
                ctrlvalPhone.className = 'TurnBlue';
                $.ajax({
                    type: "GET",
                    url: "handler_country.ashx?qtype=P&ptype=" + choose_country.value,
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var options = '<option selected="selected" value="0">Select Your Service</option>';
                        for (var i = 0; i < data.length; i++) {
                            options += '<option value="' + data[i].Code + '">' + data[i].Name + '</option>';
                        }
                        var choose_product = document.getElementById('select-services-home');
                        choose_product.innerHTML = options;
                        //choose_product.selectedIndex = 0;
                        // select_skin('#select-services-home');
                    },
                    error: function (data) {

                    }
                });
            }
            else {
                ctrlvalPhone.className = '';
            }
        }

        function show() {
            document.getElementById("myDiv").style.display = "block";
            setTimeout("hide()", 2000);  // 5 seconds
        }

        function hide() {
            document.getElementById("myDiv").style.display = "none";
        }


        function ValidateInputs() {
            var choose_country = document.getElementById('where-will-you-be-home');
            var choose_product = document.getElementById('select-services-home');
            if (choose_country.selectedIndex > 0 && choose_product.selectedIndex > 0) {
                //alert("Function Call");
                $.ajax({
                    type: "GET",
                    url: "handler_country.ashx?qtype=R&country=" + choose_country.value + "&ptype=" + choose_product.value,
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        //alert(data);
                        window.location = data;
                    },
                    error: function (data) {

                    }

                });
            }
        }
    </script>
	<title>Buy Online International SIM cards, Data Cards, Roaming
		Services, Global Email Services</title>

	<form name="aspnetForm" method="post" action="https://www.clay.co.in/"
		id="aspnetForm" novalidate="">
		<div>
			<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
			<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT"
				value=""> <input type="hidden" name="__VIEWSTATE"
				id="__VIEWSTATE"
				value="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">
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


		<script src="static/WebResource.axd" type="text/javascript"></script>


		<script src="static/ScriptResource.axd" type="text/javascript"></script>
		<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

		<script src="static/ScriptResource(1).axd" type="text/javascript"></script>
		<div>

			<input type="hidden" name="__VIEWSTATEGENERATOR"
				id="__VIEWSTATEGENERATOR" value="CA0B0334"> <input
				type="hidden" name="__SCROLLPOSITIONX" id="__SCROLLPOSITIONX"
				value="0"> <input type="hidden" name="__SCROLLPOSITIONY"
				id="__SCROLLPOSITIONY" value="0"> <input type="hidden"
				name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="">
		</div>
		<script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$Sc1', 'aspnetForm', ['tctl00$ProfileCountryUpdatePanel',''], ['ctl00$lbCalculate',''], [], 90, 'ctl00');
//]]>
</script>

		<a name="goTop" id="goTop"></a>
		<div class="mostOuter">
			<div class="topline" style="position: fixed; top: 0px;">
				<div class="leftHs">&nbsp;</div>
				<div class="rightHs">
					<div class="contactLink">
						<a href="https://www.clay.co.in/#" class="callIco">Customer
							Care: +91-11-66470000</a>
					</div>

				</div>
			</div>
			<div class="downTop"
				style="position: fixed; height: 84px; top: 25px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;">
				<div class="logoPlace">
					<a href="https://www.clay.co.in/Default.aspx"> <img
						src="static/logo.png" alt="Logo"></a>
				</div>
				<ul class="headBtns">
					<li class="headVrMenu"></li>
					<li id="ctl00_divloginusercontrol"><a
						href="https://www.clay.co.in/Login.aspx" class="headUser"></a></li>

					<li class=""><span id="ctl00_cartCount" class="countItem">0</span><a
						class="headCart"
						href="https://www.clay.co.in/order-shopping-cart.aspx"></a></li>
					<li class="siteSearch">
						<div class="srchInp">
							<input type="text" placeholder="Search">
						</div> <a href="javascript:void(0);"></a>
					</li>
				</ul>
				<nav id="ddmenu" style="margin-top: 18px;">
					<div class="menu-icon" tabindex="0"></div>
					<ul>
						<li tabindex="0" style="padding-bottom: 18px;"><a
							class="top-heading" aria-haspopup="true">Explore Services</a> <i
							class="caret"></i>
							<ul class="dropdown">
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/international-prepaid-sim-cards.aspx">Prepaid</a></li>
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/international-postpaid-sim-card.aspx">Postpaid</a></li>
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/forex.aspx">Forex</a></li>
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/offers.aspx">Offers</a></li>
							</ul></li>
						<li tabindex="0" style="padding-bottom: 18px;"><a
							class="top-heading" aria-haspopup="true">Quick Care</a><i
							class="caret"></i>
							<ul class="dropdown">
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/quickrecharge.aspx">Quick
										Recharge</a></li>
								<li style="padding-bottom: 18px;"><a
									href="https://www.clay.co.in/quickpay.aspx">Quick Pay</a></li>
							</ul></li>
					</ul>
				</nav>
			</div>
			<div class="vrMenu">
				<div class="vrMenuSpace" style="height: 108px;"></div>
				<div class="menuInner">
					<div class="headr">
						<a href="https://www.clay.co.in/default.aspx"></a>
					</div>
					<div id="firstpane" class="menu_list">
						<!--Code for menu starts here-->
						<p class="menu_head hideOnPc">
							<a href="Javascript:void(0);">Explore Services</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/international-postpaid-sim-card.aspx">Postpaid</a>
							<a
								href="https://www.clay.co.in/international-prepaid-sim-cards.aspx">Prepaid</a>
							<a href="https://www.clay.co.in/forex.aspx">Forex</a> <a
								href="https://www.clay.co.in/offers.aspx">Offers</a>
						</div>
						<p class="menu_head hideOnPc">
							<a href="Javascript:void(0);">Quick Care</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/quickrecharge.aspx">Quick
								Recharge</a> <a href="https://www.clay.co.in/quickpay.aspx">
								Quick Pay</a>
						</div>
						<p class="menu_head">
							<a href="Javascript:void(0);">About Us</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/who-we-are.aspx">Who We Are</a> <a
								href="https://www.clay.co.in/whats_new.aspx"> What's New</a> <a
								href="https://www.clay.co.in/offers.aspx">Offers</a>
						</div>
						<p></p>
						<p class="menu_head">
							<a href="Javascript:void(0);">Business</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/vat.aspx">VAT Reclaim</a> <a
								href="https://www.clay.co.in/broadcastpro.aspx">Broadcast
								Pro App</a>
						</div>

						<p class="menu_head">
							<a href="Javascript:void(0);">Media</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/media-center-news.aspx">News
								Room</a> <a
								href="https://www.clay.co.in/media-center-interviews.aspx">
								Interviews</a><a href="https://www.clay.co.in/media-center-tvc.aspx">Commercials</a>
							<a href="https://www.clay.co.in/media-center-testimonials.aspx">
								Testimonials</a>
						</div>
						<p></p>
						<p class="menu_head">
							<a href="Javascript:void(0);">Support</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/faq.aspx">FAQs</a><a
								href="https://www.clay.co.in/support-troubleshooting.aspx">Troubleshoot</a><a
								href="https://www.clay.co.in/support-glossary.aspx">Glossary</a>
							<a href="https://www.clay.co.in/diallinginstruction.aspx">Dialling
								Instructions</a>
						</div>
						<p></p>
						<p class="menu_head">
							<a href="Javascript:void(0);">Contact</a>
						</p>
						<div class="menu_body">
							<span class="dwArrow"></span><a
								href="https://www.clay.co.in/contact-partners.aspx">Partners</a><a
								href="https://www.clay.co.in/contact-us.aspx">Locate us</a> <a
								href="https://www.clay.co.in/contact-feedback.aspx">Feedback</a>
							<a href="https://www.clay.co.in/contact-careers.aspx">Careers</a>
						</div>
						<p></p>
					</div>
				</div>
			</div>
			<div class="contentBox" style="margin-top: 108px;">


				<div class="bannerBox">
					<div id="da-slider" class="da-slider">
						<div class="da-slide travelIns da-slide-toleft">

							<div class="da-img">
								<a href="https://www.clay.co.in/travel-insurance.aspx"> <img
									src="static/main-travel-insurance-banner.jpg" alt="Clay"></a>
							</div>
						</div>
						<div class="da-slide illustBanner da-slide-toleft">
							<h2>
								<div class="claylogoBlue"></div>
								<span>Unlimited Data Across Europe <br> with Clay!
								</span>
								<div class="bigGray">
									<a
										href="https://www.clay.co.in/prepaid-sim-cards.aspx?CountryCode=WU&amp;Service=Prepaid">BUY
										NOW</a>
								</div>
							</h2>
							<div class="da-img">
								<img src="static/Europe-Prepaid-webbanner-Illustration.jpg"
									alt="Clay">
							</div>
						</div>
						<div
							class="da-slide illustBanner da-slide-fromright da-slide-current">
							<h2>
								<div class="claylogoBlue"></div>
								<span>Unlimited Data &amp; Call <br> Across USA at
									just <i class="fa fa-inr" aria-hidden="true"></i>1999/-
								</span>
								<div class="bigGray">
									<a
										href="https://www.clay.co.in/prepaid-sim-cards.aspx?CountryCode=US&amp;Service=Prepaid">BUY
										NOW</a>
								</div>
							</h2>
							<div class="da-img">
								<img src="static/USA-Prepaid-webbanner-illustration.jpg"
									alt="Clay">
							</div>
						</div>
						<div class="da-slide illustBanner da-slide-toleft">
							<h2>
								<div class="claylogoBlue"></div>
								<span>Free Calls Back to India &amp; 4G Data <br>
									Only with Singapore Prepaid SIM
								</span>
								<div class="bigGray">
									<a
										href="https://www.clay.co.in/prepaid-sim-cards.aspx?CountryCode=SG&amp;Service=Prepaid">BUY
										NOW</a>
								</div>
							</h2>
							<div class="da-img">
								<img src="static/singapore-prepaid-webbanner-Illustration.jpg"
									alt="Clay">
							</div>
						</div>
						<div class="da-slide illustBanner da-slide-toleft">
							<h2>
								<div class="claylogoBlue"></div>
								<span>Enjoy Freebies with Malaysia Prepaid<br> SIM
									Available at <i class="fa fa-inr" aria-hidden="true"></i>899/-
								</span>
								<div class="bigGray">
									<a
										href="https://www.clay.co.in/prepaid-sim-cards.aspx?CountryCode=MY&amp;Service=Prepaid">BUY
										NOW</a>
								</div>
							</h2>
							<div class="da-img">
								<img src="static/malaysia-webbanner-Illustration.jpg" alt="Clay">
							</div>
						</div>
						<div class="da-slide illustBanner da-slide-toleft">
							<h2>
								<div class="claylogoBlue"></div>
								<span>Talktime &amp; High Speed Data<br> with
									Thailand SIM Only at <i class="fa fa-inr" aria-hidden="true"></i>499/-
								</span>
								<div class="bigGray">
									<a
										href="https://www.clay.co.in/prepaid-sim-cards.aspx?CountryCode=TH&amp;Service=Prepaid">BUY
										NOW</a>
								</div>
							</h2>
							<div class="da-img">
								<img src="static/thailand-webbanner-Illustration.jpg" alt="Clay">
							</div>
						</div>
						<div class="da-slide da-slide-toleft">
							<div class="da-img">
								<img src="static/duty-free-clay.png" alt="Clay">
							</div>
						</div>
						<nav class="da-arrows">
							<span class="da-arrows-prev"></span> <span class="da-arrows-next"></span>
						</nav>
						<nav class="da-dots">
							<span class=""></span><span class=""></span><span
								class="da-dots-current"></span><span class=""></span><span
								class=""></span><span class=""></span><span class=""></span>
						</nav>
					</div>

				</div>
				<div class="viewPlanBox">
					<a name="goDown" style="margin-top: -85px; float: left" id="goDown"></a>
					<h2 class="buyNowTag">
						<span>Buy International SIM Card</span>
					</h2>
					<h1 class="buyNowTag">Buy Now</h1>
					<div class="selectWraper">
						<select required="" id="where-will-you-be-home"
							onchange="loadProduct()"><option value="0">Select
								Your Destination</option>
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
							<option value="-1">Rest Of The World</option></select>
					</div>
					<div class="spacer"></div>
					<div class="selectWraper">
						<div id="myDiv" class="dropDwnLoader">
							<img id="myImage" src="static/loader.gif">
						</div>
						<select id="select-services-home" required="">
							<option value="" selected="selected">Select Your Service</option>
						</select>
					</div>
					<div class="spacer"></div>
					<div class="viewPlanBtn">
						<a href="javascript:void(0)" id="hrViewPlan"
							onclick="return ValidateInputs();">View Plans</a>
					</div>
				</div>
				<div class="callToActionOuter">
					<div class="callToActionBorder">
						<div class="callToActionBoxes">
							<h3>Offer</h3>
							<div class="clear"></div>
							<p>
								Sign up today and Get 10% Off <span></span>on your First Order
								Online
							</p>
							<div class="genBlueBtn">
								<a href="https://www.clay.co.in/offers.aspx">View Offer</a>
							</div>
						</div>
						<div class="callToActionBoxes part">
							<h3>What’s New</h3>
							<div class="clear"></div>
							<p class="">
								<span>Clay Telecom Introduces Lookout App in India to
									Offer 100% Mobile Security</span>
							</p>
							<div class="genBlueBtn">
								<a href="https://www.clay.co.in/whats_new.aspx">Read More</a>
							</div>
						</div>
						<div class="callToActionBoxes">
							<h3>Testimonials</h3>
							<div class="clear"></div>
							<div class="testimonial_carousel responsive">
								<div class="caroufredsel_wrapper"
									style="display: block; text-align: center; float: none; position: relative; top: auto; right: auto; bottom: auto; left: auto; width: 377px; height: 140px; margin: 0px; overflow: hidden;">
									<ul id="foo1"
										style="text-align: left; float: none; position: absolute; top: 0px; left: -95.6209px; margin: 0px; width: 3393px; height: 140px;">




										<li style="width: 377px;">
											<div class="testimonialBoxes1">
												<p>My overall experience with Clay was very good. There
													were no issues of disconnections and the network was good.</p>
												<span class="name">Ashmitha Lobo</span> <span class="detail">GE
													India Industrial Pvt Ltd</span>
											</div>
										</li>
										<li style="width: 377px;">
											<div class="testimonialBoxes1">
												<p>Excellent service in New Zealand. The service worked
													fabulous for international and local (NZ) calls. Thank you!</p>
												<span class="name">Pritha Sen</span> <span class="detail">AVR
													Edge Networks Pvt Ltd</span>
											</div>
										</li>
										<li style="width: 377px;">
											<div class="testimonialBoxes1">
												<p>That was super prompt! Loved the service. Thank you
													team. The issue is fixed.</p>
												<span class="name">Ranjith</span> <span class="detail">Genpact</span>
											</div>
										</li>
										<li style="width: 377px;">
											<div class="testimonialBoxes1">
												<p>Overall Clay is much better than the services I have
													used in past. I have recommended my staff to use it.</p>
												<span class="name">Harpriya Mehta</span> <span
													class="detail">Siemens Information</span>
											</div>
										</li>
									</ul>
								</div>
								<div class="genBlueBtn">
									<a href="https://www.clay.co.in/media-center-testimonials.aspx">Read
										More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="whyClayBlueOuter">
					<h2>Why Clay?</h2>
					<h3>A strong pan India team working together to make your
						travel secure &amp; cost-efficient!</h3>
					<div class="whyClayBox">
						<div class="whyClayRound">
							<img src="static/glossy-round.png" alt="Clay">
							<div class="icoBox">
								<img src="static/custom-ico.png" alt="Clay">
							</div>
							<div class="textBox">
								<span>Custom-made</span><span>Plans</span>
							</div>
						</div>
						<div class="whyClayRound">
							<img src="static/glossy-round.png" alt="Clay">
							<div class="icoBox">
								<img src="static/call24-7.png" alt="Clay">
							</div>
							<div class="textBox">
								<span>24*7</span><span>Customer Support</span>
							</div>
						</div>
						<div class="whyClayRound">
							<img src="static/glossy-round.png" alt="Clay">
							<div class="icoBox">
								<img src="static/world-map-ico.png" alt="Clay">
							</div>
							<div class="textBox">
								<span>Coverage</span><span>Over 200 Countries</span>
							</div>
						</div>
						<div class="whyClayRound">
							<img src="static/glossy-round.png" alt="Clay">
							<div class="icoBox">
								<img src="static/hidden.png" alt="Clay">
							</div>
							<div class="textBox">
								<span>No Hidden</span><span>Charges</span>
							</div>
						</div>
					</div>
				</div>
				<div class="featuredBoxOuter">
					<div class="headArea">
						<h4>As featured in</h4>
						<span></span>
					</div>
					<div class="clear"></div>
					<div class="list_carousel responsive">
						<div class="caroufredsel_wrapper"
							style="display: block; text-align: start; float: none; position: relative; top: auto; right: auto; bottom: auto; left: auto; width: 1216px; height: 78px; margin: 0px; overflow: hidden;">
							<ul id="foo4"
								style="text-align: left; float: none; position: absolute; top: 0px; left: -567.589px; margin: 0px; width: 4864px; height: 78px;">






								<li style="width: 304px;"><img src="static/bs-standard.png"
									class="gray" alt="Business Standard"></li>
								<li style="width: 304px;"><img src="static/faqs.png"
									class="gray" alt="afaqs"></li>
								<li style="width: 304px;"><img src="static/cellbharat.png"
									class="gray" alt="Cell Bharat"></li>
								<li style="width: 304px;"><img src="static/toi.png"
									class="gray" alt="TOI"></li>
								<li style="width: 304px;"><img src="static/trav-talk.png"
									class="gray" alt="TravTalk"></li>
								<li style="width: 304px;"><img
									src="static/silicon-india.png" class="gray" alt="Silicon India"></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="aboutClayOuter">
					<div class="aboutClayLeft">
						<h2>About Us</h2>
						<h3>Connecting People Across the Globe</h3>
						Our strength lies in our potential to mould varied travel-related
						services as per our customers' needs and their budget. The
						customization is handled by experienced Clay experts to ensure
						there are no boundaries in their connectivity to make their
						travelling experience memorable.
						<div class="clear"></div>
						<div class="genBlueBtn margin-to-50p">
							<a href="https://www.clay.co.in/who-we-are.aspx">Read More</a>
						</div>
					</div>
					<div class="aboutClayRight">
						<video id="video1" poster="static/media/commercial.jpg"
							onplay="play">
							<source src="static/media/Unlimited Data, Seamless Roaming.mp4">
						</video>
					</div>
				</div>
				<%@include file="footer.jsp" %>
				<!--  footer was here -->
				<div class="slideMetop" style="display: none;">
					<a href="https://www.clay.co.in/#goTop"></a>
				</div>
			</div>
		</div>
		<div class="planDetailTbl">
			<div class="headStrip">
				<span id="ctl00_lblPlanHeader"></span> <a href="javascript:void(0);"
					class="maskclose"></a>
			</div>
			<div class="tableHolder">
				<span id="ctl00_lblPlanCurrency" class="crncyTyp"></span>
				<div class="o-section">
					<div id="tabs"
						class="c-tabs ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-vertical ui-helper-clearfix">
						<div class="c-tabs-nav">
							<a href="https://www.clay.co.in/#" class="c-tabs-nav__link"
								id="rpTopdivBasic" onclick="SetTab(&#39;1&#39;)"> <!--<i class="fa fa-home"></i>-->
								<span>Clay Basic</span>
							</a><a href="https://www.clay.co.in/#" class="c-tabs-nav__link"
								id="rpTopdivValue" onclick="SetTab(&#39;2&#39;)"> <!--<i class="fa fa-book"></i>-->
								<span>Clay Value</span>
							</a><a href="https://www.clay.co.in/#" class="c-tabs-nav__link"
								id="rpTopdivPlatinum" onclick="SetTab(&#39;3&#39;)"> <!--<i class="fa fa-heart"></i>-->
								<span>Clay Platinum</span>
							</a>
						</div>

						<div class="c-tab" id="rpdivBasic">
							<div class="c-tab__content"></div>
						</div>
						<div class="c-tab" id="rpdivValue">
							<div class="c-tab__content"></div>
						</div>
						<div class="c-tab" id="rpdivPlatinum">
							<div class="c-tab__content"></div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="getQuoteBox">
			<div class="getQuoteCloseBtn">
				<a href="https://www.clay.co.in/#0">Close</a>
			</div>

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
					<li><input name="ctl00$uc1$txtUser" type="text"
						id="ctl00_uc1_txtUser" class="default name"
						pattern="[A-Za-z0-9 ]{1,20}" title="This field cant be left blank"
						required="required" placeholder="Full Name *"></li>
					<li><input name="ctl00$uc1$txtCompanyName" type="text"
						id="ctl00_uc1_txtCompanyName" class="default"
						placeholder="Company"></li>
					<li><input name="ctl00$uc1$txtEmail" type="text"
						id="ctl00_uc1_txtEmail" class="default email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"
						title="Write a valid email" required="required"
						placeholder="Email ID *"></li>
					<li><input name="ctl00$uc1$txtPhoneNumber" type="text"
						id="ctl00_uc1_txtPhoneNumber" class="default phone"
						pattern="[789][0-9]{9}"
						title="Write a valid 10 digits mobile number" required="required"
						placeholder="Mobile Number *"></li>
					<li style="width: 98.2%"><select name="ctl00$uc1$ddlcountry"
						id="ctl00_uc1_ddlcountry" tabindex="5"
						class="default countryTravel width100" title="Country of Travel"
						required="required">
							<option selected="selected" value="0">Select Your
								Destination</option>
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

					</select></li>
					<li><textarea name="ctl00$uc1$txtRemarks"
							id="ctl00_uc1_txtRemarks"
							class="default width100 partnerMassage margin-bottom-20p"
							pattern="[A-Za-z0-9]{100,800}"
							title="Type atleast 100 characters" required="required"
							placeholder="Message *" minlength="100" maxlength="800"></textarea>
						<div class="bigBluefill margin-bottom-20p">
							<a onclick="return ValidateOpCheckoutQuotes();"
								id="ctl00_uc1_lnkGetQuotes"
								href="javascript:__doPostBack(&#39;ctl00$uc1$lnkGetQuotes&#39;,&#39;&#39;)">Get
								Quote</a>
						</div></li>
				</ul>
			</div>

		</div>
		<div class="tariffChecker">
			<div class="headStrip">
				Use tariff checker to know call rates from the country of your
				travel to rest of the world. <a href="javascript:void(0);"
					class="maskclose"></a>
			</div>
			<div class="checkherHolder">
				<h1>Clay Prepaid SIM Coverage</h1>
				<div class="clear"></div>
				<div class="originSelector">
					<label> Clay user calling from</label> <select
						name="ctl00$ddlFromCountry" id="ctl00_ddlFromCountry"
						class="defaultfull" tabindex="1">
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
						<option value="PRI">Puetro Rico</option>
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
						<option value="KNA">St. Kitts &amp; Nevis</option>
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
					<label> Clay user calling to</label> <select
						name="ctl00$ddlToCountry" id="ctl00_ddlToCountry"
						class="defaultfull" tabindex="2">
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
						<option value="NCL">New Caledonia</option>
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
						<option value="PRI">Puetro Rico</option>
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
						<option value="KNA">St. Kitts &amp; Nevis</option>
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
					<label> &nbsp;</label>
					<div class="bigBluefill width100 alignCenter">
						<a onclick="return ValidCalculate();" id="ctl00_lbCalculate"
							tabindex="3"
							href="javascript:__doPostBack(&#39;ctl00$lbCalculate&#39;,&#39;&#39;)">Calculate</a>
					</div>
				</div>
				<div id="ctl00_pnTariffDetail">

					<div class="tariffDetailBox">
						<hr>
						<div id="ctl00_ProfileCountryUpdatePanel">

							<table width="100%" border="0" cellspacing="0" cellpadding="0"
								class="tariffTable">
								<tbody>
									<tr>
										<th colspan="2">Our Rates From <span
											id="ctl00_spanFromCountry">Albania</span> To <span
											id="ctl00_spanToCountry">Bangladesh</span>
										</th>
									</tr>
									<tr>
										<td>Incoming Calls</td>
										<td><span id="ctl00_lblIncomingCall"></span></td>
									</tr>
									<tr>
										<td>Outgoing Calls (Call Back)</td>
										<td><span id="ctl00_lblOutCallBack"></span></td>
									</tr>
									<tr>
										<td>Outgoing Calls (Call Through)</td>
										<td><span id="ctl00_lblOutCallThrough"></span></td>
									</tr>
									<tr>
										<td>Outgoing SMS</td>
										<td><span id="ctl00_lblOutSms"></span></td>
									</tr>
									<tr>
										<td>Data Charges</td>
										<td><span id="ctl00_lblDataCharges"></span></td>
									</tr>
								</tbody>
							</table>

						</div>
						<div class="tariffOtherDetail">
							<h3>
								<span>Coverage for Data Services</span>
							</h3>
							<ul>

								<li>* Data Pricing above is applicable on the listed mobile
									networks only. Other networks may have higher charges
									applicable</li>

							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="maskScreen"></div>
		<div class="getQuoteBtn">
			<a href="https://www.clay.co.in/#0">Get Quote</a>
		</div>
		<script type="text/javascript" src="static/parallaxbg.js"></script>


		<script type="text/javascript">
//<![CDATA[

theForm.oldSubmit = theForm.submit;
theForm.submit = WebForm_SaveScrollPositionSubmit;

theForm.oldOnSubmit = theForm.onsubmit;
theForm.onsubmit = WebForm_SaveScrollPositionOnSubmit;
//]]>
</script>
	</form>


	</titleclay>
</body>
</html>