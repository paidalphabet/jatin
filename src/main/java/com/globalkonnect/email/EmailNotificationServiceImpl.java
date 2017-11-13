package com.globalkonnect.email;

import java.io.IOException;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.velocity.Template;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.globalkonnect.configuration.ApplicationConstants;
import com.sun.mail.smtp.SMTPTransport;

public class EmailNotificationServiceImpl extends AbstractVelocityInitializer implements EmailNotificationService, Runnable {

	private final static Logger LOGGER = LoggerFactory.getLogger(EmailNotificationServiceImpl.class);
	private String from;
	private List<String> toList = new ArrayList<String>();
	private List<String> ccList = new ArrayList<String>();
	private List<String> bccList = new ArrayList<String>();
	private String message;
	private int templateID;

	public int getTemplateID() {
		return templateID;
	}

	public void setTemplateID(int templateID) {
		this.templateID = templateID;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public List<String> getToList() {
		return toList;
	}

	public void setToList(List<String> toList) {
		this.toList = toList;
	}

	public List<String> getCcList() {
		return ccList;
	}

	public void setCcList(List<String> ccList) {
		this.ccList = ccList;
	}

	public List<String> getBccList() {
		return bccList;
	}

	public void setBccList(List<String> bccList) {
		this.bccList = bccList;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public void run() {
		LOGGER.debug("Email Thread Started");
		try {
			Properties props = System.getProperties();
	        props.put("mail.smtps.host", ApplicationConstants.EMAIL_ACC_SMTP_HOST);
	        props.put("mail.smtps.auth","true");
	        Session session = Session.getInstance(props, null);
	        session.setDebug(true);
	        
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress(ApplicationConstants.EMAIL_ACC_ID));
	        
	        if (toList != null && toList.size() > 0) {
				for (final String toRecipient : toList) {
					msg.addRecipient(Message.RecipientType.TO, new InternetAddress(toRecipient));
				}
			}
			if (ccList != null && ccList.size() > 0) {
				for (final String toCC : ccList) {
					msg.addRecipient(Message.RecipientType.CC, new InternetAddress(toCC));
				}
			}
			if (bccList != null && bccList.size() > 0) {
				for (final String toBCC : bccList) {
					msg.addRecipient(Message.RecipientType.BCC, new InternetAddress(toBCC));
				}
			}
	        
	        Multipart mp = new MimeMultipart();
			MimeBodyPart htmlPart = new MimeBodyPart();
			htmlPart.setContent(message, "text/html");
			mp.addBodyPart(htmlPart);
	        msg.setContent(mp);
	        
	        msg.setSubject(getSubject());

	        msg.setSentDate(new Date());
	        
	        SMTPTransport t = (SMTPTransport)session.getTransport("smtps");
	        t.connect("smtp.mailgun.com", "postmaster@wisegoals.in", "6194351b03fe4985bbd361c57c5f8863");
	        t.sendMessage(msg, msg.getAllRecipients());
	        System.out.println("Response: " + t.getLastServerResponse());
	        t.close();
	        
		} catch (final MessagingException e) {
			e.printStackTrace();
		}
		LOGGER.debug("Email Thread Stopped");
	}

	@Override
	public void sendEmail(final Map<String, String> emailExtendedProperties, final String templateID) throws IOException {
		LOGGER.debug("Inside sendEmail thread");
		super.init();

		Template template = null;
		try {
			template = super.getTemplate(templateID);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (template != null) {
			StringWriter writer = new StringWriter();
			super.populateVelocityContext(emailExtendedProperties, velocityContext);
			template.merge(velocityContext, writer);
			this.setMessage(writer.toString());

			LOGGER.debug("Email Content - " + this.getMessage());
			final Thread emailThread = new Thread(this);
			LOGGER.debug("Inside sendEmail thread " + emailThread.getName());
			emailThread.start();
		}
		LOGGER.debug("Executed sendEmail thread");
	}

}
