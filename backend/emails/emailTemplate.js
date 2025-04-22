export function createWelcomeEmailTemplate(name, profileUrl) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to UnLinked</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #812F21, #a05248); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <img src="https://img.freepik.com/premium-photo/antique-statue-god-goddess-couple-handcrafted-gold_1087247-184.jpg?w=740" alt="Logo" style="width: 150px; margin-bottom: 20px; border-radius: 10px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Varkari Sampraday</h1>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #812F21;"><strong>Hello ${name},</strong></p>
        <p>We're thrilled to have you join our cultural community! Varkari Sampraday is your platform to connect, share, and track your loved ones.</p>
        <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 16px; margin: 0;"><strong>Here's how to get started:</strong></p>
          <ul style="padding-left: 20px;">
            <li>Complete your profile</li>
            <li>Connect with colleagues and friends</li>
            <li>Join groups relevant to your interests</li>
            <li>Explore job opportunities</li>
          </ul>
        </div>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${profileUrl}" style="background-color: #812F21; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Complete Your Profile</a>
        </div>
        <p>If you have any questions or need assistance, our support team is always here to help.</p>
        <p>Best regards,<br>The Varkari Sampraday Team</p>
      </div>
    </body>
    </html>
    `;
  }
  