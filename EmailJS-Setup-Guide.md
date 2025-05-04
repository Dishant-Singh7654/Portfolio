# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form functional. The contact form has been configured to send emails to your Gmail account when users submit the form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Connect Your Email Service

1. In the EmailJS dashboard, go to "Email Services" tab
2. Click "Add New Service"
3. Select "Gmail" as your service provider
4. Follow the authentication steps to connect your Gmail account
5. Name your service (e.g., "gmail_service") and save it
6. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following content:

   **Subject:**
   ```
   New Contact Form Submission from {{name}}
   ```

   **Content:**
   ```
   Name: {{name}}
   Email: {{email}}
   Message: {{message}}
   ```

4. Save your template
5. Note down your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to "Account" tab
2. Find your **Public Key** in the API Keys section

## Step 5: Update Your Code

Open the `Contact.jsx` file and replace the placeholder values with your actual EmailJS credentials:

```javascript
// Replace these with your actual EmailJS credentials
const serviceId = 'service_id' // Your EmailJS service ID
const templateId = 'template_id' // Your EmailJS template ID
const publicKey = 'public_key' // Your EmailJS public key
```

## Testing Your Contact Form

1. Start your development server with `npm run dev`
2. Navigate to the Contact section of your portfolio
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox for the submitted message

## Important Notes

- The free plan of EmailJS allows 200 emails per month
- Make sure your form field names (`name`, `email`, `message`) match the variables in your email template
- For security reasons, never commit your actual EmailJS credentials to a public repository

## Troubleshooting

If emails are not being sent:

1. Check browser console for any errors
2. Verify that your EmailJS credentials are correct
3. Make sure your Gmail account doesn't have restrictions that prevent EmailJS from sending emails
4. Check EmailJS dashboard for any failed email logs