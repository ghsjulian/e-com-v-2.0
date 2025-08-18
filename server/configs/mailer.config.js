const nodemailer = require("nodemailer");

const sendMail = async (name, toEmail, otp) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        let mailOptions = {
            from: "E-Com V2.0 'ghsgobindo@gmail.com'",
            to: toEmail,
            subject: "Verification OTP (E-Com V2.0)",
            text: "Please verify your email address to change your password ! Here is your six digits OTP verification code.",
            html: `
<!DOCTYPE html>
<html>
<head>
    <title>OTP Verification</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #1a73e8;
            padding: 20px;
            text-align: center;
            color: white;
        }
        .content {
            padding: 30px;
        }
        .otp-code {
            background-color: #f3f3f3;
            border-radius: 6px;
            padding: 15px 20px;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 4px;
            text-align: center;
            margin: 25px 0;
            color: #1a73e8;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777777;
            padding: 20px;
            background-color: #f9f9f9;
            border-top: 1px solid #eaeaea;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #1a73e8;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 15px 0;
        }
        .small-text {
            font-size: 12px;
            color: #666666;
        }
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0 auto;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>OTP Verification</h1>
        </div>
        
        <div class="content">
            <p>Hello [ ${name} ],</p>
            
            <p>We received a request to verify your identity. Please use the following One-Time Password (OTP) to complete your verification:</p>
            
            <h2 class="otp-code">[ ${otp} ]</h2>
            
            <p>This code expires in <strong>15 minutes</strong>. Please do not share this code with anyone.</p>
            
            <p>If you didn't request this verification, please ignore this email or contact our support team immediately.</p>
            
            <p>Best regards,<br>E-Com V2.0</p>
            
            <p class="small-text">
                For security reasons, please don't forward this email to anyone. Our customer service team will never ask you for your verification code.
            </p>
        </div>
        
        <div class="footer">
            &copy; 2025 auth-app. All rights reserved.<br>
            Sylhet, Maulovibazar | <a href="https//ghsresume.netlify.app" style="color: #1a73e8; text-decoration: none;">Developer</a> | <a href="[Unsubscribe Link]" style="color: #1a73e8; text-decoration: none;">Unsubscribe</a>
        </div>
    </div>
</body>
</html>`
        };
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log("\n[!] Error While Sending OTP - ", error);
        return false;
    }
};

module.exports = sendMail;
