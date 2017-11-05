package com.globalkonnect.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globalkonnect.dao.SubscriptionDAO;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

	@Autowired
	private SubscriptionDAO subscriptionDao;
	
	@Autowired
	private EmailNotificationService emailNotificationService;
	
}
