package com.globalkonnect.dao;

import org.hibernate.Criteria;
import org.hibernate.Session;

import com.globalkonnect.email.EmailTemplate;

public class SubscriptionDAO extends AbstractDao {

	public EmailTemplate getEmailTemplate(String templateName) {
		Session session = getSessionFactory().getCurrentSession();
		Criteria criteria = session.createCriteria(EmailTemplate.class,"templateName");
		EmailTemplate template = (EmailTemplate) criteria.uniqueResult();
		return template;
	}


}
