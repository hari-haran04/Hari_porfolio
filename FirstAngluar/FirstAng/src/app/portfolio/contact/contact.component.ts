import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  isSending = false;
  sentSuccess = false;

  // REPLACE THESE WITH YOUR ACTUAL EMAILJS IDS
  // Go to https://www.emailjs.com/ to create your account and get these.
  private serviceID = 'service_n0n50w7';
  private templateID = 'template_j61cw59';
  private publicKey = 'Z9DQZ4opOA5ZP7Tvy';

  async sendMessage() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields.');
      return;
    }

    this.isSending = true;

    try {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
        to_name: 'Hariharan',
      };

      await emailjs.send(
        this.serviceID,
        this.templateID,
        templateParams,
        this.publicKey
      );

      this.sentSuccess = true;
      this.name = '';
      this.email = '';
      this.message = '';

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.sentSuccess = false;
      }, 5000);

    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again later or email me directly.');
    } finally {
      this.isSending = false;
    }
  }
}
