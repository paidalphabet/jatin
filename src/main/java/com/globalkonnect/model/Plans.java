package com.globalkonnect.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "plans")
public class Plans {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int planID;

	@Column
	private String planName;
	
	@Column 
	private String country;
	
	@Column 
	private String simCompany;
	
	@Column 
	private String localCalling;
	
	@Column 
	private String smsLocal;
	
	@Column
	private String smsInternational;
	
	@Column
	private String data;
	
	@Column
	private String specialNotes;

	public int getPlanID() {
		return planID;
	}

	public void setPlanID(int planID) {
		this.planID = planID;
	}

	public String getPlanName() {
		return planName;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getSimCompany() {
		return simCompany;
	}

	public void setSimCompany(String simCompany) {
		this.simCompany = simCompany;
	}

	public String getLocalCalling() {
		return localCalling;
	}

	public void setLocalCalling(String localCalling) {
		this.localCalling = localCalling;
	}

	public String getSmsLocal() {
		return smsLocal;
	}

	public void setSmsLocal(String smsLocal) {
		this.smsLocal = smsLocal;
	}

	public String getSmsInternational() {
		return smsInternational;
	}

	public void setSmsInternational(String smsInternational) {
		this.smsInternational = smsInternational;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getSpecialNotes() {
		return specialNotes;
	}

	public void setSpecialNotes(String specialNotes) {
		this.specialNotes = specialNotes;
	}
}