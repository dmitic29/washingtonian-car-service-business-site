import { Injectable } from '@angular/core';
import '../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class QuoteInquiryService {
  quote = {
    name: '',
    phone: '',
    email: '',
    about: ''
  };

  constructor() { }

  getQuote(o) {
    this.quote = o;
    this.sendQuote();
  }

  sendQuote() {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'dimitrije.mitic29@gmail.com',
      Password : '4641EA073FDA3DC3F0DCBE70073B77B60838',
      To : 'bgvrabac1@gmail.com',
      From : `dimitrije.mitic29@gmail.com`,
      Subject : 'New Business Inquiry',
      Body : `
        <b>Name:</b><br/>${this.quote.name} <br/>
        <b>Phone:</b><br/>${this.quote.phone} <br/>
        <b>Email Address:</b><br/>${this.quote.email} <br/>
        <b>About:</b><br/>${this.quote.about} <br/>
        <br><br> <b>~End of Message.~</b>
        `
      }).then(_ => console.log('Email sent!'))
      .catch(err => console.log(err));
  }
}
