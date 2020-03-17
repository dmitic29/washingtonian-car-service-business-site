import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  details: FormGroup;

  constructor(fb: FormBuilder) {
    this.details = fb.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
      About: ['', Validators.minLength(2)]
    });
  }

  saveQuote(): void {
    console.log(this.details.value.Name);
    console.log(this.details.value.Phone);
    console.log(this.details.value.Email);
    console.log(this.details.value.About);
  }
}

class Inquiry {
  'name': string;
  'phone': string;
  'email': string;
  'about': string;
}
