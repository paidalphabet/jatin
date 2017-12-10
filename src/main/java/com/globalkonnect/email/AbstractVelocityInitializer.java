package com.globalkonnect.email;

import java.io.StringReader;
import java.util.Map;
import java.util.Set;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeServices;
import org.apache.velocity.runtime.RuntimeSingleton;
import org.apache.velocity.runtime.parser.ParseException;
import org.apache.velocity.runtime.parser.node.SimpleNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.globalkonnect.dao.SubscriptionDAO;

public abstract class AbstractVelocityInitializer {

	private final static Logger LOGGER = LoggerFactory.getLogger(AbstractVelocityInitializer.class);
	
	@Autowired
	private VelocityEngine velocityEngine;
	
	@Autowired SubscriptionDAO subscriptionDao;
	
	private String subject;
	

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	protected VelocityContext velocityContext;

	protected void init() {
		velocityEngine.init();
		velocityContext = new VelocityContext();

	}

	protected void populateVelocityContext(final Map<String, String> emailExtendedProperties, final VelocityContext velocityContext) {
		LOGGER.debug("Invoked populateVelocityContext method > params > : "+emailExtendedProperties);
		final Set<String> keySet = emailExtendedProperties.keySet();
		for(final String key : keySet){
			final String keyValue = emailExtendedProperties.get(key);
			velocityContext.put(key, keyValue);
		}
		LOGGER.debug("Executed populateVelocityContext method");
	}

	protected Template getTemplate(String templateID) throws Exception{
		LOGGER.debug("Invoked getTemplate method for ID : "+templateID);
		final Template template = new Template();
		final RuntimeServices runtimeServices = RuntimeSingleton.getRuntimeServices();
		final EmailTemplate emailTemplate = (EmailTemplate) subscriptionDao.getEmailTemplate(templateID);
		if(null != emailTemplate){
			try {
				final SimpleNode node  = RuntimeSingleton.parse(new StringReader(emailTemplate.getTemplateContent()),emailTemplate.getTemplateName());
				template.setData(node);
				template.setRuntimeServices(runtimeServices);
				template.initDocument();
				this.setSubject(emailTemplate.getSubject());
			} catch (ParseException e) {
				LOGGER.debug("Exception in getTemplate method for ID : "+templateID);
				e.printStackTrace();
				return null;
			}
			LOGGER.debug("Executed getTemplate method for ID : "+templateID);
			return template;
		}else{
			LOGGER.debug("In getTemplate method for ID : "+ templateID + " : template not found");
			return null;
		}
	}
}
