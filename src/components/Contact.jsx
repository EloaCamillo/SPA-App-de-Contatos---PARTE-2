import React from 'react';
import "./Contact.scss"
import dateFormat from 'dayjs';
class Contact extends React.Component {


  render() {
    const {data} = this.props;
   
    
    return (
      
     <article className="contact" data-testid="contact">
       <span className="contact__avatar" data-testid="contact-avatar">
    <img className="contact__avatar"  src={data.avatar} alt={data.name} /> 
    </span>
    <span className="contact__data" data-testid="contact-name">{data.name}</span>
    <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
    <span className="contact__data" data-testid="contact-country">{data.country}</span>
    <span className="contact__data" data-testid="contact-date">{dateFormat(data.admissionDate).format('DD/MM/YYYY')}</span>
    <span className="contact__data" data-testid="contact-company">{data.company}</span>
    <span className="contact__data" data-testid="contact-data">{data.department}</span>
    </article>
    
   
    
    );
    
  }
}

export default Contact;
