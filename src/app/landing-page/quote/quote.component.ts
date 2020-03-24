import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteInquiryService } from 'src/app/quote-inquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  submitClicked = false;
  details: FormGroup;

  constructor(fb: FormBuilder, private qis: QuoteInquiryService, private router: Router) {
    this.details = fb.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
      About: ['', Validators.minLength(2)]
    });
  }

  saveQuote(): void {
    this.qis.getQuote({
      name: this.details.value.Name,
      phone: this.details.value.Phone,
      email: this.details.value.Email,
      about: this.details.value.About
    });

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }
}
