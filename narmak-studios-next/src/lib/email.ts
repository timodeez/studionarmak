// ============================================================================
// EMAIL SERVICE CONFIGURATION
// ============================================================================
// This file handles sending emails from your website.
// 
// WHAT THIS DOES:
// - Sends email notifications when someone submits a contact form
// - Sends email notifications when someone applies for a job
// - Sends welcome emails to new subscribers
// - Handles email templates and formatting
//
// SETUP REQUIRED:
// 1. Create a Resend account at https://resend.com
// 2. Verify your domain (so emails don't go to spam)
// 3. Get your API key from Resend dashboard
// 4. Add RESEND_API_KEY to your .env.local file
// 5. Update the email addresses below to your actual emails
// 6. Uncomment the Resend code below
// ============================================================================

// Define what an email looks like
interface EmailData {
  to: string;        // Who to send the email to
  subject: string;   // Email subject line
  html: string;      // Email content (HTML format)
}

// ============================================================================
// MAIN EMAIL SENDING FUNCTION
// ============================================================================
// This function actually sends emails using Resend
export async function sendEmail(emailData: EmailData) {
  try {
    // ============================================================================
    // IMPORTANT: UNCOMMENT THIS SECTION AFTER SETTING UP RESEND
    // ============================================================================
    // Right now, this just logs emails instead of sending them
    // Once you set up Resend, uncomment the code below and remove the console.log
    
    /*
    // Import and initialize Resend
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Studio Narmak <noreply@yourdomain.com>',  // CHANGE THIS to your verified domain
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });

    // If there's an error, log it and throw an error
    if (error) {
      console.error('Email error:', error);
      throw new Error('Failed to send email');
    }

    // Return the email data if successful
    return data;
    */
    
    // ============================================================================
    // TEMPORARY: LOG EMAILS INSTEAD OF SENDING (FOR DEVELOPMENT)
    // ============================================================================
    // This will be removed once you set up Resend
    console.log('📧 EMAIL WOULD BE SENT:', {
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html
    });
    return { success: true };
    
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}

// ============================================================================
// EMAIL TEMPLATES
// ============================================================================
// These functions create nicely formatted emails for different purposes

// Generate email for contact form submissions (Get a Quote page)
export function generateContactEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  files?: string[];
}) {
  return {
    // CHANGE THIS EMAIL ADDRESS to where you want to receive quote requests
    to: 'your-email@yourdomain.com', // ⚠️ UPDATE THIS TO YOUR EMAIL
    
    subject: `New Quote Request from ${data.name}`,
    
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">🎬 New Quote Request - Studio Narmak</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Project Details</h3>
          ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
          ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ''}
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        
        ${data.files && data.files.length > 0 ? `
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">📎 Uploaded Files (${data.files.length})</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.files.map(file => `<li>${file}</li>`).join('')}
          </ul>
          <p style="margin-top: 10px; font-size: 14px; color: #666;">
            <em>Note: Files are stored in the database. You can access them through the admin dashboard.</em>
          </p>
        </div>
        ` : ''}
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          This email was sent from the Studio Narmak website contact form.<br>
          Reply directly to this email to respond to ${data.name}.
        </p>
      </div>
    `
  };
}

// Generate email for job applications (Careers page)
export function generateApplicationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  position: string;
  experience?: string;
  portfolio?: string;
  coverLetter: string;
  files?: string[];
}) {
  return {
    // CHANGE THIS EMAIL ADDRESS to where you want to receive job applications
    to: 'hr@yourdomain.com', // ⚠️ UPDATE THIS TO YOUR HR EMAIL
    
    subject: `Job Application: ${data.position} - ${data.name}`,
    
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">💼 New Job Application - Studio Narmak</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Applicant Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
          <p><strong>Position:</strong> ${data.position}</p>
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Experience & Portfolio</h3>
          ${data.experience ? `<p><strong>Experience:</strong> ${data.experience}</p>` : ''}
          ${data.portfolio ? `<p><strong>Portfolio:</strong> <a href="${data.portfolio}" target="_blank">${data.portfolio}</a></p>` : ''}
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Cover Letter</h3>
          <p style="white-space: pre-wrap;">${data.coverLetter}</p>
        </div>
        
        ${data.files && data.files.length > 0 ? `
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">📎 Uploaded Files (${data.files.length})</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${data.files.map(file => `<li>${file}</li>`).join('')}
          </ul>
          <p style="margin-top: 10px; font-size: 14px; color: #666;">
            <em>Note: Files are stored in the database. You can access them through the admin dashboard.</em>
          </p>
        </div>
        ` : ''}
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          This email was sent from the Studio Narmak careers page.<br>
          Reply directly to this email to respond to ${data.name}.
        </p>
      </div>
    `
  };
}

// ============================================================================
// ADDITIONAL EMAIL TEMPLATES YOU CAN USE
// ============================================================================

// Welcome email for new subscribers
export function generateWelcomeEmail(email: string) {
  return {
    to: email,
    subject: 'Welcome to Studio Narmak Updates!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">🎉 Welcome to Studio Narmak!</h2>
        
        <p>Thank you for subscribing to our updates. You'll be the first to know about:</p>
        
        <ul>
          <li>🎬 New projects and behind-the-scenes content</li>
          <li>💡 Industry insights and animation tips</li>
          <li>💼 Job opportunities and team updates</li>
          <li>📝 Latest blog posts and tutorials</li>
        </ul>
        
        <p>Stay creative!</p>
        <p>- The Studio Narmak Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          <a href="https://yourdomain.com/unsubscribe?email=${email}">Unsubscribe</a> | 
          <a href="https://yourdomain.com">Visit our website</a>
        </p>
      </div>
    `
  };
}

// Newsletter template
export function generateNewsletterEmail(subscribers: string[], subject: string, content: string) {
  return {
    to: subscribers.join(', '), // Send to all subscribers
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">Studio Narmak Newsletter</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          ${content}
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          <a href="https://yourdomain.com/unsubscribe">Unsubscribe</a> | 
          <a href="https://yourdomain.com">Visit our website</a>
        </p>
      </div>
    `
  };
} 