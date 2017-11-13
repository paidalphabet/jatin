package com.globalkonnect.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.globalkonnect.email.EmailTemplate;
import com.globalkonnect.model.Country;
import com.globalkonnect.model.Plans;

@Repository
@Transactional(propagation = Propagation.REQUIRED)
public class SubscriptionDAO extends AbstractDao {

	public EmailTemplate getEmailTemplate(String templateName) {
		Session session = getSessionFactory().getCurrentSession();
		Criteria criteria = session.createCriteria(EmailTemplate.class,"templateName");
		EmailTemplate template = (EmailTemplate) criteria.uniqueResult();
		return template;
	}

	public List<Plans> getPlansByCountry(String countryID) {
		Session session = getSessionFactory().getCurrentSession();
		Criteria criteria = session.createCriteria(Plans.class, "country");
		return criteria.list();
	}

	public List<Country> getCountries() {
		Session session = getSessionFactory().getCurrentSession();
		Criteria criteria = session.createCriteria(Country.class);
		return criteria.list();
	}

}
