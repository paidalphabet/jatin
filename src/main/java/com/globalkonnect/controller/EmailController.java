package com.globalkonnect.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.globalkonnect.email.EmailNotificationService;
import com.globalkonnect.form.ContactUs;
import com.globalkonnect.form.RequestTransformer;

@Controller
public class EmailController {

	@Autowired
	private EmailNotificationService emailNotificationService;

	public EmailNotificationService getEmailNotificationService() {
		return emailNotificationService;
	}

	public void setEmailNotificationService(EmailNotificationService emailNotificationService) {
		this.emailNotificationService = emailNotificationService;
	}
	
	@RequestMapping(name = "/send-email", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<String> sendEmail(HttpServletRequest request, HttpServletResponse response) throws IOException{
		System.out.println("send email");
		ContactUs contactUs = RequestTransformer.getContactUsRequest(request);
		Map<String, String> emailExtendProperties = new HashMap<String, String>();
		emailExtendProperties = prepareContactUSEmail(contactUs);
		String templateID = "CONTACT_US";
		emailNotificationService.sendEmail(emailExtendProperties, templateID);
		return new ResponseEntity<String>("ok", HttpStatus.OK);
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

}
