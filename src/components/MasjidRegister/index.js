import React, { useState } from 'react';
import './index.css'
import Navbar from '../Navbar';
 
const MasidRegister= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    address: '',
    file: null,
  });
 
 
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const file = type === 'file' ? files[0] : null;
 
    setFormData({
      ...formData,
      [name]: type === 'file' ? file : value,
    });
  };
 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const states = ['New York', 'California', 'Texas', 'Florida'];
  const cities = ['New York City', 'Los Angeles', 'Dallas', 'Miami'];
 
  return (
    <>
    <Navbar/>
    <div className='masid-regiser-form'>
        <h1 className='masid-register-heading'>Register your Masjid!</h1>
    </div>
   <div className='masid-form-main-container'>
     <form className='masid-form-container' onSubmit={handleSubmit}>
        <h1 className='app-para-heading'>Masjid Information</h1>
        <p className='app-para-text'>Are you a Masjid? Provide your Masjid details below and register with us for FREE.</p>
      <div className='masid-form-field'>
        <label className='app-para-text'>
          Masjid Name *
        </label>
        <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className='masid-form-input'
            is required
          />
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        Email *
          
        </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='masid-form-input'
            is required
          />
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        Phone Number *
         
        </label>
        <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className='masid-form-input'
            is required
          />
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        Country *
          
        </label>
        <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className='masid-form-input'
            is required
          >
            <option value=""></option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        State *
          
        </label>
        <select   className='masid-form-input'
          name="state"
          value={formData.state}
          onChange={handleChange}
          is required
          >
            <option value=""></option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        City *
          
        </label>
        <select  
          className='masid-form-input'
           name="city"
           value={formData.city}
           onChange={handleChange}
           required
           >
            <option value=""></option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        Postal code *
          
        </label>
        <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className='masid-form-input'
            required
          />
      </div>
 
      <div className='masid-form-field'>
        <label className='app-para-text'>
        Street Address *
          
        </label>
        <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className='masid-form-input'
            is required
          />
      </div>
      <div className="masid-form-field">
          <label className="app-para-text">
          Please upload your Masjid SALAH timing sheet (attach now or we will ask you later. Max size should be 1mb. File formats are XLSX, CSV)
            
          </label>
          <div className="file-input-container">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="file-input"
                required
              />
            </div>
        </div>
 
      <button className='app-container-button'
       type="submit">SEND</button>
    </form>
   </div>
   </>
  );
};
 
export default MasidRegister;