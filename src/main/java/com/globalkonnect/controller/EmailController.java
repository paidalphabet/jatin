package com.globalkonnect.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.globalkonnect.email.EmailNotificationService;
import com.globalkonnect.email.SubscriptionService;
import com.globalkonnect.form.ContactUs;
import com.globalkonnect.form.RequestTransformer;
import com.globalkonnect.model.Plans;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class EmailController {

	@Autowired
	private SubscriptionService subscriptionService;

	public SubscriptionService getSubscriptionService() {
		return subscriptionService;
	}

	public void setSubscriptionService(SubscriptionService subscriptionService) {
		this.subscriptionService = subscriptionService;
	}

	@Autowired
	private EmailNotificationService emailNotificationService;

	public EmailNotificationService getEmailNotificationService() {
		return emailNotificationService;
	}

	public void setEmailNotificationService(EmailNotificationService emailNotificationService) {
		this.emailNotificationService = emailNotificationService;
	}
	
	@RequestMapping(value = "/send-email", method = RequestMethod.POST)//, consumes = "application/form-data")
	public @ResponseBody ResponseEntity<String> sendEmail(HttpServletRequest request, HttpServletResponse response) throws IOException{
		System.out.println("send email");
		ContactUs contactUs = RequestTransformer.getContactUsRequest(request);
		Map<String, String> emailExtendProperties = new HashMap<String, String>();
		emailExtendProperties = prepareContactUSEmail(contactUs);
		String templateID = "CONTACT_US";
		emailNotificationService.sendEmail(emailExtendProperties, templateID);
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}
	

	@RequestMapping(value="/plans/{countryID}", produces="application/json")
	public ModelAndView getPlansByCountryID(@PathVariable String countryID, HttpServletRequest request, HttpServletResponse response) {
		List<Plans> plans = subscriptionService.getPlansByCountry(countryID);
		//String planDetails = convertToJson(plans);
		ModelMap modelMap = new ModelMap();
		modelMap.addAttribute("plans", plans);
		ModelAndView planDetails = new ModelAndView(Redirection.PLANS, modelMap);
		return planDetails;
	}

	private Map<String, String> prepareContactUSEmail(ContactUs contactUs) {
		Map<String, String> emailExtendProperties = new HashMap<String, String>();
		emailExtendProperties.put(RequestTransformer.firstName, contactUs.getFirstName());
		emailExtendProperties.put(RequestTransformer.lastName, contactUs.getLastName());
		emailExtendProperties.put(RequestTransformer.emailID, contactUs.getEmailID());
		emailExtendProperties.put(RequestTransformer.country, contactUs.getCountry());
		emailExtendProperties.put(RequestTransformer.message, contactUs.getMessage());
		return emailExtendProperties;
	}
	
	private final static GsonBuilder gsonBuilder = new GsonBuilder();
	
	protected Gson getGson() {
		final Gson gson = gsonBuilder.enableComplexMapKeySerialization().serializeNulls().create();
		return gson;
	}

	protected Object convertFromJson(final Class clazz, final String data) {
		final Gson gson = getGson();
		final Object object = gson.fromJson(data, clazz);
		return object;
	}	
	
	protected String convertToJson(Object object){
		final Gson gson = getGson();
		final String jsonizedString = gson.toJson(object);
		return jsonizedString;
		
	}


}
