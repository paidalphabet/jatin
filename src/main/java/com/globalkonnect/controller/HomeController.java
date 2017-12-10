package com.globalkonnect.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.globalkonnect.email.SubscriptionService;
import com.globalkonnect.model.Country;

@Controller
public class HomeController {

	@Autowired
	private SubscriptionService subscriptionService;

	@RequestMapping(name = "/about-us")
	public ModelAndView aboutUs() {
		ModelMap modelMap = new ModelMap();
		List<Country> countries = subscriptionService.getCountries();
		modelMap.put("countries", countries);
		ModelAndView view = new ModelAndView(Redirection.ABOUT_US, modelMap);
		return view;
	}

	@RequestMapping(value = "/index")
	public ModelAndView listEmployee(ModelAndView model) throws IOException {
		ModelMap modelMap = new ModelMap();
		List<Country> countries = subscriptionService.getCountries();
		modelMap.put("countries", countries);
		ModelAndView view = new ModelAndView(Redirection.INDEX, modelMap);
		return view;
	}

}
