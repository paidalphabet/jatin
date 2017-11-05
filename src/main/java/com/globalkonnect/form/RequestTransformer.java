package com.globalkonnect.form;

import javax.servlet.http.HttpServletRequest;

public class RequestTransformer {

	public final static String firstName = "firstName";
	public static final String lastName = "lastName";
	public static final String emailID = "emailID";
	public static final String country = "country";
	public static final String message = "message";

	public static ContactUs getContactUsRequest(HttpServletRequest request) {
		ContactUs contactUs = new ContactUs();
		String firstName = request.getParameter(RequestTransformer.firstName);
		String lastName = request.getParameter(RequestTransformer.lastName);
		String emailID = request.getParameter(RequestTransformer.emailID);;
		String country = request.getParameter(RequestTransformer.country);
		String message = request.getParameter(RequestTransformer.message);
		contactUs.setFirstName(firstName);
		contactUs.setLastName(lastName);
		contactUs.setEmailID(emailID);
		contactUs.setCountry(country);
		contactUs.setMessage(message);
		return contactUs;
	}

}
