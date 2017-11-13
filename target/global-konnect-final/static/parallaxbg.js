//Banner slider
$(function() {
			$('#da-slider').cslider({
					autoplay	: true,
                    
					//bgincrement	: 450
				});
			});
//Banner slider

//$(document).ready(function(){
//if ($(window).width() < 801) {
//   $("ul.partnerBanifits").removeClass("col-3-list").addClass("col-2-list");
//}
//else {
//   return
//}
//});
//$(document).ready(function(){
//if ($(window).width() < 361) {
//   $("ul.partnerBanifits").removeClass("col-3-list").removeClass("col-2-list").addClass("col-1-list");
//}
//else {
//   return
//}
//});
//Image Light Box
$( document ).ready(function() {
			/* Basic Gallery */
			$( '.swipebox' ).swipebox();			
			/* Video */
			$( '.swipebox-video' ).swipebox();
			/* Dynamic Gallery */
			$( '#gallery' ).click( function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : '#', title : 'My Caption' },
					{ href : '#', title : 'My Second Caption' }
				] );
			} );
      });
//Image Light Box
//for carousel
$(function() {
//	Fluid layout example 1, resizing the items
				$('#foo4,#foo3').carouFredSel({
					responsive: true,
					width: '100%',
					scroll: 2,
					items: {
						width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
				$('#foo1').carouFredSel({
					responsive: true,
					width: '100%',
					scroll: 1,
					items: {
					//	width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 1
						}
					}
});
$('#partnerSlider').carouFredSel({
					responsive: true,
					width: '100%',
					scroll: 1,
					items: {
					//	width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 4
						}
					}
				});
});
//for carousel
(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

//Fixed animated header start
var iScrollPos = 0;
$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
         $('.downTop').css('position','fixed').css('height','62px').css('top','0px').css('background','rgba(255,255,255,1)').css('box-shadow','0 1px 3px 0 rgba(0,0,0,0.2)');
		 $('.topline').css('position','fixed').css('top','-25px');
		 $('.contentBox').css('margin-top','64px');
		 $('.downTop').addClass('smlHead');
		 $('.lftTopSpace').css('height','50');
		 $(".userMenu").css('display','none');
		 $("#ddmenu").css('margin-top','8px');
		 $("#ddmenu li").css('padding-bottom','6px');
		 $(".vrMenuSpace").css('height','62px');
    } else {
		$('.topline').css('position','fixed').css('top','0');
        $('.downTop').css('position','fixed').css('height','84').css('top','25px').css('background','rgba(255,255,255,1)').css('box-shadow','0 1px 3px 0 rgba(0,0,0,0.2)');
		$('.contentBox').css('margin-top','108px');
		$('.downTop').removeClass('smlHead');
		$('.lftTopSpace').css('height','100');
		$("#ddmenu").css('margin-top','18px');
		$("#ddmenu li").css('padding-bottom','18px');
		$(".vrMenuSpace").css('height','108px');
    }
    iScrollPos = iCurScrollPos;
});
//Fixed animated header end

$(document).ready(function(){
    var lastLogWidth = $('.lastLogin').width();
	$(".loginUserName").click(function() {
		$(".userMenu").slideToggle().css('right', lastLogWidth + 'px');		
		});	
		$(".downTop,.contentBox").click(function() {
		$(".userMenu").fadeOut();		
		});
	$(".leftMenuShow").click(function() {
	$(".vrLeftMenu").slideToggle();     
        });

		$(".siteSearch a").click(function() {
		$(".srchInp").toggleClass("srchInpShow");     
        });
		$(".siteSearch a").click(function() {
		$("li.siteSearch").toggleClass("activeSrch");     
        });
		
		$(".headVrMenu").click(function() {
		$(".vrMenu").toggleClass("vrMenuShow");
		$("li.headVrMenu").toggleClass("activeM");
        });
        $(".allConentBox,.contentBox").mouseenter(function() {
         setTimeout(function () {      
         $(".vrMenu").removeClass("vrMenuShow");
         $("li.headVrMenu").removeClass("activeM");       
            }, 50);	
		});
		
//		$("a.headCart,.cartClose").click(function() {
//		$("div.cartBox").slideToggle();
//        });
//		$("a.headCart,.cartClose").click(function() {
//		$("a.headCart").toggleClass("activeCart");     
//        });

//		$(".menuInner ul li a").click(function() {
//		$(".menuInner ul li").toggleClass("active");
//        });
});
//error message show/hide
$(document).ready(function () {
	$(".btnToShow").click(function() {	
	$(".errorMsgOuter").delay(20).show("drop", {
                direction: "down"
            }, 1000).delay(3000).hide("drop", {
                direction: "down"
            }, 1000);
	});
});
//error message show/hide
$(document).ready(function()
{
		$("#firstpane p.menu_head").click(function()
    {
		$(this).css("background","#1a3192").css("color","#fff").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
       	$(this).siblings().css("background","#222").css("color","#fff");
	});
});
//Function for smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
});
//Function for smooth scrolling
//tabs
$(document).ready(function(){
$(".tabs-01").each(function(){

		$(this).find(".tab").hide();
		$(this).find(".tab-menu li:first a").addClass("activetab").show();
		$(this).find(".tab:first").show();

});
$(".tabs-01").each(function(){

		$(this).find(".tab-menu a").click(function() {
				$(this).parent().parent().find("a").removeClass("activetab");
				$(this).addClass("activetab");
				$(this).parent().parent().parent().parent().find(".tab").hide();
				var activeTab = $(this).attr("href");
				$(activeTab).fadeIn();
				return false;
		});
});
});
//tabs
// FAQ Accordian
function faqPanels() {
	var curFaqQ;
	var lastFaqQ;
	for(var i=0; i<$("div.faqPanels h4").size(); i++)
	{
		var a = $("div.faqPanels h4:eq("+i+")").text();	
		$("div.faqPanels h4:eq("+i+")").html('<span>'+a+'</span><sub>'+i+'</sub>');
		//$("div.faqPanels div.faqPanel:eq("+i+")").append('<p>Did this answer your question? <a href="faq.aspx#yes">Yes</a> | <a href="#feedback" rel="faqFrom_500_280" class="elementLight">No</a></p>');		
	}
	$("div.faqPanels h4 span").mouseover(function() {
		$(this).parent("h4").addClass("hover");
	});
	$("div.faqPanels h4 span").mouseout(function() {
		$(this).parent("h4").removeClass("hover");
	});
	$("div.faqPanels h4 span").click(function() {
		curFaqQ = $(this).parent("h4").find('sub').text();
		if(lastFaqQ == null)
		{
			$("div.faqPanels div.faqPanel:eq("+curFaqQ+")").slideDown();
			$("div.faqPanels h4:eq("+curFaqQ+")").addClass("active");
			lastFaqQ = curFaqQ;
		}
		else if(lastFaqQ == curFaqQ)
		{
			$("div.faqPanels div.faqPanel:eq("+lastFaqQ+")").slideUp();
			$("div.faqPanels h4:eq("+lastFaqQ+")").removeClass("active");
			lastFaqQ = null;
		}
		else
		{
			$("div.faqPanels div.faqPanel:eq("+lastFaqQ+")").slideUp();
			$("div.faqPanels h4:eq("+lastFaqQ+")").removeClass("active");
			$("div.faqPanels div.faqPanel:eq("+curFaqQ+")").slideDown();
			$("div.faqPanels h4:eq("+curFaqQ+")").addClass("active");
			lastFaqQ = curFaqQ;
		}
	});
}faqPanels();
// FAQ Accordian
// blog Accordian
function blogPanels() {
	var curBlogQ;
	var lastBlogQ;
	for(var i=0; i<$("div.blogPanels h4").size(); i++)
	{
		var a = $("div.blogPanels h4:eq("+i+")").text();	
		$("div.blogPanels h4:eq("+i+")").html('<span>'+a+'</span><sub>'+i+'</sub>');
		//$("div.blogPanels div.blogPanel:eq("+i+")").append('<p>Did this answer your question? <a href="blog.aspx#yes">Yes</a> | <a href="#feedback" rel="blogFrom_500_280" class="elementLight">No</a></p>');		
	}
	$("div.blogPanels h4 span").mouseover(function() {
		$(this).parent("h4").addClass("hover");
	});
	$("div.blogPanels h4 span").mouseout(function() {
		$(this).parent("h4").removeClass("hover");
	});
	$("div.blogPanels h4 span").click(function() {
		curBlogQ = $(this).parent("h4").find('sub').text();
		if(lastBlogQ == null)
		{
			$("div.blogPanels div.blogPanel:eq("+curBlogQ+")").slideDown();
			$("div.blogPanels h4:eq("+curBlogQ+")").addClass("active");
			lastBlogQ = curBlogQ;
		}
		else if(lastBlogQ == curBlogQ)
		{
			$("div.blogPanels div.blogPanel:eq("+lastBlogQ+")").slideUp();
			$("div.blogPanels h4:eq("+lastBlogQ+")").removeClass("active");
			lastBlogQ = null;
		}
		else
		{
			$("div.blogPanels div.blogPanel:eq("+lastBlogQ+")").slideUp();
			$("div.blogPanels h4:eq("+lastBlogQ+")").removeClass("active");
			$("div.blogPanels div.blogPanel:eq("+curBlogQ+")").slideDown();
			$("div.blogPanels h4:eq("+curBlogQ+")").addClass("active");
			lastBlogQ = curBlogQ;
		}
	});
}blogPanels();
// blog Accordian

// Partners Accordian
function partnersPanels() {
	var curPartnersQ;
	var lastPartnersQ;
	for(var i=0; i<$("div.partnersPanels h4").size(); i++)
	{
		var a = $("div.partnersPanels h4:eq("+i+")").text();	
		$("div.partnersPanels h4:eq("+i+")").html('<span>'+a+'</span><sub>'+i+'</sub>');
		//$("div.partnersPanels div.partnersPanel:eq("+i+")").append('<p>Did this answer your question? <a href="partners.aspx#yes">Yes</a> | <a href="#feedback" rel="partnersFrom_500_280" class="elementLight">No</a></p>');		
	}
	$("div.partnersPanels h4 span").mouseover(function() {
		$(this).parent("h4").addClass("hover");
	});
	$("div.partnersPanels h4 span").mouseout(function() {
		$(this).parent("h4").removeClass("hover");
	});
	$("div.partnersPanels h4 span").click(function() {
		curPartnersQ = $(this).parent("h4").find('sub').text();
		if(lastPartnersQ == null)
		{
			$("div.partnersPanels div.partnersPanel:eq("+curPartnersQ+")").slideDown();
			$("div.partnersPanels h4:eq("+curPartnersQ+")").addClass("active");
			lastPartnersQ = curPartnersQ;
		}
		else if(lastPartnersQ == curPartnersQ)
		{
			$("div.partnersPanels div.partnersPanel:eq("+lastPartnersQ+")").slideUp();
			$("div.partnersPanels h4:eq("+lastPartnersQ+")").removeClass("active");
			lastPartnersQ = null;
		}
		else
		{
			$("div.partnersPanels div.partnersPanel:eq("+lastPartnersQ+")").slideUp();
			$("div.partnersPanels h4:eq("+lastPartnersQ+")").removeClass("active");
			$("div.partnersPanels div.partnersPanel:eq("+curPartnersQ+")").slideDown();
			$("div.partnersPanels h4:eq("+curPartnersQ+")").addClass("active");
			lastPartnersQ = curPartnersQ;
		}
	});
}partnersPanels();
// Partners Accordian

//Function for Home Page Video
	$("#video1").click(function() {	
	$("#video1").attr("controls","controls");
	$("#video1").attr("autoplay","autoplay");
	//$(".vidControlBar").slideToggle();
		});
	$("#video2").click(function() {	
	$("#video2").attr("controls","controls");
	$("#video2").attr("autoplay","autoplay");
		});
	$("#video3").click(function() {	
	$("#video3").attr("controls","controls");
	$("#video3").attr("autoplay","autoplay");
		});
//Function for Home Page Video

//Function for Commercial Page Video
$('.vidThumb .content ul li').each(function(i) {
    $(this).attr('id', 'videoLink'+(i+1));
});
$('.vidHolder').each(function(i) {
    $(this).attr('id', 'vidHolderContent'+(i+1));
	$('#vidHolderContent1').show();
});

$(document).ready(function () {
	$("#videoLink1").click(function() {
	document.getElementById('video3').pause();
	document.getElementById('video2').pause();
	$("#vidHolderContent1").fadeIn();
	$("#videoLink2,#videoLink3,#videoLink4").removeClass("active");
	$("#videoLink1").addClass("active");	
	$("#vidHolderContent2,#vidHolderContent3,#vidHolderContent4").hide();	
});
	$("#videoLink2").click(function() {
	document.getElementById('video1').pause();
	document.getElementById('video3').pause();	
	$("#vidHolderContent2").fadeIn();
	$("#videoLink1,#videoLink3,#videoLink4").removeClass("active");
	$("#videoLink2").addClass("active");
	$("#vidHolderContent1,#vidHolderContent3,#vidHolderContent4").hide();	
});
	$("#videoLink3").click(function() {
	document.getElementById('video1').pause();
	document.getElementById('video2').pause();
	$("#vidHolderContent3").fadeIn();
	$("#videoLink1,#videoLink2,#videoLink4").removeClass("active");
	$("#videoLink3").addClass("active");
	$("#vidHolderContent1,#vidHolderContent2,#vidHolderContent4").hide();	
});
	$("#videoLink4").click(function() {	
	$("#vidHolderContent4").fadeIn();
	$("#videoLink1,#videoLink2,#videoLink3").removeClass("active");
	$("#videoLink4").addClass("active");
	$("#vidHolderContent1,#vidHolderContent2,#vidHolderContent3").hide();	
});
});
//Function for Commercial Page Video
//Function for GoTop Link
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.slideMetop').fadeIn();
  } else {
    $('.slideMetop').fadeOut();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.slideMedown').fadeOut();
  } else {
    $('.slideMedown').fadeIn();
  }
});
//Function for GoTop Link
//Form Fields
$(document).ready(function() {
	$("input.email").attr("pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").attr("title","Write a valid email").attr("required","required").attr("placeholder","Email ID *");
	$("input.name").attr("pattern","[A-Za-z0-9 ]{1,20}").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Full Name *");
	$("input.dob").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Date of Birth *");
	$("input.custName").attr("pattern","[A-Za-z0-9 ]{1,20}").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Cutomer Name *");
	$("input.functionalArea").attr("pattern","[A-Za-z0-9]{1,30}").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Functional Area *");
	$("input.companyName").attr("pattern","[A-Za-z0-9 ]{1,30}").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Company Name *");
	$("input.amount").attr("pattern","^(0|[1-9][0-9]*)$").attr("title","Please enter amount").attr("required","required").attr("placeholder","Amount *");
	$("input.phone").attr("pattern","[789][0-9]{9}").attr("title","Write a valid 10 digits mobile number").attr("required","required").attr("placeholder","Mobile Number *");
    $("input.clayMobile").attr("pattern","[123456789][0-9]{7,10}").attr("title","Write a valid 8 to 11 digits mobile number").attr("required","required").attr("placeholder","Clay Mobile Number *");
    $("input.contactNum").attr("pattern","[789][0-9]{9}").attr("title","Write a valid 10 digits mobile number").attr("required","required").attr("placeholder","Contact Number *");
	$("input.altPhone").attr("title","Your alternate contact number").attr("required","required").attr("placeholder","Alternate Number *");
	$("input.cpchaCode").attr("title","Please type captcha code").attr("required","required").attr("placeholder","Enter Captcha Code *");
	$("input.landline").attr("pattern","[235][0-9]{7}").attr("title","Write a valid 8 digits landline number").attr("placeholder","Landline Number");
	$("input.invoiceNum").attr("title","Type your invoice number").attr("placeholder","Invoice Number");
	$("input.stdCode").attr("title","Area Code").attr("placeholder","STD");
	$("input.isdCode").attr("title","Country Code").attr("placeholder","ISD");
    $("input.zipCode").attr("title","Enter Zip/Postal Code").attr("required","required").attr("placeholder","Zip Code *");
	
	$("input.passWd").attr("pattern","(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}").attr("title","Type at least one number, one uppercase and at least 6 characters").attr("required","required").attr("placeholder","Password");	
	$("input.prmoCode").attr("title","Please type correct code").attr("required","required").attr("placeholder","Have a promo code?");
	$("input.address1").attr("title","Please type Address").attr("required","required").attr("placeholder","Address Line1 *");
	$("input.address2").attr("title","Please type Address").attr("required","required").attr("placeholder","Address Line2 *");
	$("input.handsetModel").attr("title","Your Handset Model").attr("required","required").attr("placeholder","Handset Model *");
	$("input.resumeUpload").attr("title","Please Upload Resume").attr("required","required").attr("placeholder","Upload Resume *");
	$("input.passportUpload").attr("title","Please Upload Self Attested Passport").attr("required","required").attr("placeholder","Upload Self Attested Passport ");
	$("input.visaUpload").attr("title","Please Upload Visa").attr("required","required").attr("placeholder","Upload Visa *");
	$("input.currentLocation").attr("title","Your Current Location").attr("required","required").attr("placeholder","Current Location *");
	$("input.currentDesignation").attr("title","Your Current Designation").attr("required","required").attr("placeholder","Current Designation *");
	$("input.currentEmplyr").attr("title","Your Current Employer").attr("required","required").attr("placeholder","Current Employer *");	
	$("input.handsetType").attr("title","Type your handset model").attr("required","required").attr("placeholder","Type your handset model *");	
	$("input.areaExpertise").attr("title","Your Expertise").attr("required","required").attr("placeholder","Area of Expertise *");
	$(".cartSummeryPromo input[type=text]").attr("title","Enter Promo Code").attr("placeholder","Promo Code");
	
	$("select.dropdownSpecialization").attr("title","Specialization").attr("required","required");
    $("select.clayProduct").attr("title","Select Clay Product").attr("required","required");
	$("select.complaintTopic").attr("title","Complaint Topic").attr("required","required");
    $("select.countryTravel").attr("title","Country of Travel").attr("required","required");
	$("select.complaintSubTopic").attr("title","Complaint Sub Topic").attr("required","required");
	$("select.dropdownLocations").attr("title","Current Locations").attr("required","required");		
	$("select.dropdownCountry").attr("title","Qualification").attr("required","required");
	$("select.dropdownState").attr("title","Select State").attr("required","required");
	$("select.dropdownCity").attr("title","Select City").attr("required","required");
	$("select.dropdownExperience").attr("title","Your Total Working Experience").attr("required","required");
	$("select.dropdownList").attr("title","Select Country").attr("required","required");
	$("select.dropdownServices").attr("title","Select Services").attr("required","required")
	$("select.dropdownGender").attr("title","Gender").attr("required","required");
	$("select.servicesList").attr("title","Select Service Type").attr("required","required");
	$("select.selectDefault").attr("title","Please Select").attr("required","required");
	$("select.simtype").attr("title","Select Service Type").attr("required","required");
	$("select.dropdownMarital").attr("title","Marital Status").attr("required","required");
	$("textarea.messageForDemo").attr("pattern","[A-Za-z0-9]{20,300}").attr("title","Type atleast 20 characters").attr("required","required");
	$("textarea.feedback").attr("pattern","[A-Za-z0-9]{100,800}").attr("title","Type atleast 100 characters").attr("required","required")
	$("textarea.partnerMassage").attr("pattern","[A-Za-z0-9]{100,800}").attr("title","Type atleast 100 characters").attr("required","required").attr("placeholder","Message *").attr("minlength","100").attr("maxlength","800");
	//CheckoutPage fields
	$("input.customerName").attr("pattern","[A-Za-z0-9 ]{1,20}").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Customer Name *");
	$("input.departureDate").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Departure Date *");
	$("input.returnDate").attr("title","This field cant be left blank").attr("required","required").attr("placeholder","Return Date *");
	//CheckoutPage fields
});
//Form Fields
//Date and Time Funtions
$.datetimepicker.setLocale('en');
$('#datetimepicker_format').datetimepicker({value:'2015/04/15', format: $("#datetimepicker_format_value").val()});
console.log($('#datetimepicker_format').datetimepicker('getValue'));

$("#datetimepicker_format_change").on("click", function(e){
	$("#datetimepicker_format").data('xdsoft_datetimepicker').setOptions({format: $("#datetimepicker_format_value").val()});
});
$("#datetimepicker_format_locale").on("change", function(e){
	$.datetimepicker.setLocale($(e.currentTarget).val());
});

$('#datetimepicker').datetimepicker({
dayOfWeekStart : 1,
lang:'en',
disabledDates:['1986/01/08','1986/01/09','1986/01/10'],
startDate:	'1986/01/05'
});
$('#datetimepicker').datetimepicker({value:'2015/04/15 05:03',step:10});

//$('.default_Date').datetimepicker();

$('.default_Date').datetimepicker({
	minDate:0,
	timepicker:false,
});

$('#default_datePicker').datetimepicker({
	//formatTime:'H:i',
	formatDate:'d.m.Y',
	//defaultDate:'8.12.1986', // it's my birthday
	defaultDate:'+03.01.1970', // it's my birthday
	//defaultTime:'10:00',
	timepickerScrollbar:false
});
$('#datetimepicker10').datetimepicker({
	step:5,
	inline:true
});
$('#datetimepicker_mask').datetimepicker({
	mask:'9999/19/39 29:59'
});

$('#datetimepicker1').datetimepicker({
	datepicker:false,
	format:'H:i',
	step:5
});
$('#datetimepicker2').datetimepicker({
	yearOffset:222,
	lang:'ch',
	timepicker:false,
	format:'d/m/Y',
	formatDate:'Y/m/d',
	minDate:'-1970/01/02', // yesterday is minimum date
	maxDate:'+1970/01/02' // and tommorow is maximum date calendar
});
$('#datetimepicker3').datetimepicker({
	inline:true
});
$('#datetimepicker4').datetimepicker();
$('#open').click(function(){
	$('#datetimepicker4').datetimepicker('show');
});
$('#close').click(function(){
	$('#datetimepicker4').datetimepicker('hide');
});
$('#reset').click(function(){
	$('#datetimepicker4').datetimepicker('reset');
});
$('#datetimepicker5').datetimepicker({
	datepicker:false,
	allowTimes:['12:00','13:00','15:00','17:00','17:05','17:20','19:00','20:00'],
	step:5
});
$('#datetimepicker6').datetimepicker();
$('#destroy').click(function(){
	if( $('#datetimepicker6').data('xdsoft_datetimepicker') ){
		$('#datetimepicker6').datetimepicker('destroy');
		this.value = 'create';
	}else{
		$('#datetimepicker6').datetimepicker();
		this.value = 'destroy';
	}
});
var logic = function( currentDateTime ){
	if (currentDateTime && currentDateTime.getDay() == 6){
		this.setOptions({
			minTime:'11:00'
		});
	}else
		this.setOptions({
			minTime:'8:00'
		});
};
$('#datetimepicker7').datetimepicker({
	onChangeDateTime:logic,
	onShow:logic
});
$('#datetimepicker8').datetimepicker({
	onGenerate:function( ct ){
		$(this).find('.xdsoft_date')
			.toggleClass('xdsoft_disabled');
	},
	minDate:'-1970/01/2',
	maxDate:'+1970/01/2',
	timepicker:false
});
$('#datetimepicker9').datetimepicker({
	onGenerate:function( ct ){
		$(this).find('.xdsoft_date.xdsoft_weekend')
			.addClass('xdsoft_disabled');
	},
	weekends:['01.01.2014','02.01.2014','03.01.2014','04.01.2014','05.01.2014','06.01.2014'],
	timepicker:false
});
var dateToDisable = new Date();
	dateToDisable.setDate(dateToDisable.getDate() + 2);
$('#datetimepicker11').datetimepicker({
	beforeShowDay: function(date) {
		if (date.getMonth() == dateToDisable.getMonth() && date.getDate() == dateToDisable.getDate()) {
			return [false, ""]
		}

		return [true, ""];
	}
});
$('#datetimepicker12').datetimepicker({
	beforeShowDay: function(date) {
		if (date.getMonth() == dateToDisable.getMonth() && date.getDate() == dateToDisable.getDate()) {
			return [true, "custom-date-style"];
		}

		return [true, ""];
	}
});
$('#datetimepicker_dark').datetimepicker({theme:'dark'})
//Profile Form Editable
$(document).ready(function() {
	$(".profileEditBtn").click(function() {	
	$("span.txtArea").fadeOut("100");
	$("input,textarea").removeAttr("disabled");
	$("input[type=text],input[type=password],textarea").attr("onclick","select()");
	$("ul.profileViewEdit li,.addressHolder input[type=text]").css("margin-bottom","10px");
	$(".profileCloseSave,.addressHolder input[type=text]").fadeIn("500");
	
});
});
$(document).ready(function() {
	$("a.disableAll").click(function() {	
	$("input").attr("disabled","disabled")
	$("span.txtArea").fadeIn("500");
	$("ul.profileViewEdit li,.addressHolder input[type=text]").css("margin-bottom","-5px");
	$(".profileCloseSave,.addressHolder input[type=text]").fadeOut("500");
});
// Date and time functions
//Profile Form Editable
//View Plans Details lightBox
$(document).ready(function () {
 $(".lkInventoryStatus").click(function() { 
 $(".maskScreen").fadeIn('fast');
    $("body").css({"overflow":"hidden"});
 $(".tariffChecker").show("drop", {
                direction: "up"
            }, 600);
 //$(".vidControlBar").slideToggle();
 $("a.maskclose").click(function() {
 $(".tariffChecker").hide("drop", {
                direction: "up"
            }, 300);
    $("body").css({"overflow":"auto"});
 $(".maskScreen").fadeOut('fast');
 });
 });

});
$(document).ready(function () {
	$(".viewDetails a").click(function() {	
	$(".maskScreen").fadeIn('fast');
    $("body").css({"overflow":"hidden"});
	$(".planDetailTbl").show("drop", {
                direction: "up"
            }, 600);
	//$(".vidControlBar").slideToggle();
	$("a.maskclose").click(function() {
	$(".planDetailTbl").hide("drop", {
                direction: "up"
            }, 300);
    $("body").css({"overflow":"auto"});
	$(".maskScreen").fadeOut('fast');
	});
	});
});
});
//View Plans Details lightBox
//Tariff Checker lightBox
$(document).ready(function () {
	$(".tariffDetails").click(function() {	
	$(".maskScreen").fadeIn('fast');
    $("body").css({"overflow":"hidden"});
	$(".tariffChecker").show("drop", {
                direction: "up"
            }, 600);
	//$(".vidControlBar").slideToggle();
	$("a.maskclose").click(function() {
	$(".tariffChecker").hide("drop", {
                direction: "up"
            }, 300);
    $("body").css({"overflow":"auto"});
	$(".maskScreen").fadeOut('fast');
	});
	});
});
//Tariff Checker lightBox
//Get Quote
$(document).ready(function(){
$('.getQuoteBtn a').click(function(){
//$(".maskScreen").fadeIn('fast');
	$(".getQuoteBox").show("slide", {
                direction: "right"
            }, 600);
	//$(".vidControlBar").slideToggle();
	$(".getQuoteCloseBtn a").click(function() {
	$(".getQuoteBox").hide("slide", {
                direction: "right"
            }, 300);
//$(".maskScreen").fadeOut('fast');
	    });
    });
});
//Get Quote
$(document).ready(function(){
$('.dashMenuToggle').click(function(){
	$("ul.dashVrNenu").slideToggle();	
    });
});
 $(window).resize(function() {
if ($(window).width() > 799) {
   $("ul.dashVrNenu").addClass('showMenu');
   //alert('hi');
}
else {
   $("ul.dashVrNenu").removeClass('showMenu');
}
});


//More Videos
$(document).ready(function(){
if ($(window).width() < 530) {
   $(".vidHolder").addClass("thumbRemove");
}
else {
   return
}
});


$(document).ready(function(){
$('.moreVids').click(function(){
	$(".vidThumb").css({
    'opacity':'1',
    'visibility':'visible'});
	});
$('.thumbRemove').click(function(){
	$(".vidThumb").css({
    'opacity':'0',
    'visibility':'hidden'});
	});
});

//More Videos
//Custom Checkbox
		$("ul.customCheck li label input,.customDefaultCheck label input,.staySignin label input").click(function() {
        $(this).parent().toggleClass("rdChecked");
		})
//Custom Checkbox
//Pay Option vertical Tab
$('#tabs')
    .tabs()
    .addClass('ui-tabs-vertical ui-helper-clearfix');
//Pay Option vertical Tab

//Dashboard Plans Sorting
$('#mix-wrapper').mixItUp({
    load: { sort: 'order:asc' },
    animation: {
        effects: 'fade rotateZ(10deg)',
        duration: 700
    },
    selectors: {
        target: '.mix-target',
        filter: '.filter-btn',
        sort: '.sort-btn'
    },
    callbacks: {
        onMixEnd: function (state) {
            console.log(state);
        }
    }
});
//Dashboard Plans Sorting
//FeedbackStar Rating
$(function () {
        var rating = 1.6;
        $(".counter").text(rating);
        $("#rateYo1").on("rateyo.init", function () { console.log("rateyo.init"); });		
        $("#rateYo1").rateYo({
			rating: rating,
			numStars: 5,
			precision: 2,
			starWidth: "64px",
			spacing: "5px",
			rtl: true,
          	multiColor: {
            startColor: "#000000",
            endColor  : "#ffffff"
          },
          onInit: function () {
            console.log("On Init");
          },
          onSet: function () {
            console.log("On Set");
          }
        })
		.on("rateyo.set", function () { console.log("rateyo.set"); })
          .on("rateyo.change", function () { console.log("rateyo.change"); });
        $(".rateyo").rateYo();
        $(".rateyo-readonly-widg").rateYo({
          rating: rating,
          numStars: 5,
          precision: 2,
          minValue: 1,
          maxValue: 5
        }).on("rateyo.change", function (e, data) {        
          console.log(data.rating);
        });		
      });
$(".rateyo").rateYo({
  onSet: function(rating, rateYoInstance) {
    $(this).next().val(rating);
  },
  rating: 0,
  starWidth: "20px",
  numStars: 5,
  fullStar: true
});
//FeedbackStar Rating

//Custom Scrolling
		(function($){
			$(window).load(function(){
				$("#content_1").mCustomScrollbar({
                autoHideScrollbar:false,
					theme:"light-thin"
				});
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar:false,
					theme:"light-thin"
				});
			});
		})(jQuery);
//Custom Scrolling
//Responsive Tabs
  var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });
  myTabs.init();
//Responsive Tabs
})();