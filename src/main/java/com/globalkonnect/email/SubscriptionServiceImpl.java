package com.globalkonnect.email;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globalkonnect.dao.SubscriptionDAO;
import com.globalkonnect.model.Country;
import com.globalkonnect.model.Plans;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {
	
	private static List<Country> countries = new ArrayList<Country>();

	@Autowired
	private SubscriptionDAO subscriptionDao;
	
	@Autowired
	private EmailNotificationService emailNotificationService;

	@Override
	public List<Plans> getPlansByCountry(String countryID) {
		return subscriptionDao.getPlansByCountry(countryID);
	}

	@Override
	public List<Country> getCountries() {
		if(countries!=null && countries.size() > 0){
			return countries;
		}
		countries = subscriptionDao.getCountries();
		return countries;
	}
	
}
