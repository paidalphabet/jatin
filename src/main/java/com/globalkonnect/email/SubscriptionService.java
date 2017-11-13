package com.globalkonnect.email;

import java.util.List;

import com.globalkonnect.model.Country;
import com.globalkonnect.model.Plans;

public interface SubscriptionService {

	List<Plans> getPlansByCountry(String countryID);

	List<Country> getCountries();

}
