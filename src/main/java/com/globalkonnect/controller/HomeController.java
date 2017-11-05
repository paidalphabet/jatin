package com.globalkonnect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	@RequestMapping(name="/about-us")
	public ModelAndView aboutUs(){
		ModelAndView modelAndView = new ModelAndView(Redirection.ABOUT_US);
		return modelAndView;
	}
	
	/*@RequestMapping(name="/index1")
	public ModelAndView index1(){
		ModelAndView modelAndView = new ModelAndView(Redirection.INDEX);
		return modelAndView;
	}
*/
	
}
