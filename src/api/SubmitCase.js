import multer from 'multer';
import nodemailer from 'nodemailer';

// Configure multer memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Need to export config for file uploads
export const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Process file uploads
  upload.any()(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'File upload error' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: `"Case Submission" <${process.env.EMAIL_USER}>`,
        to: 'saadsaadfast34@gmail.com',
        subject: 'New Case Submission',
        html: generateEmailHtml(req.body),
        attachments: req.files?.map(file => ({
          filename: file.originalname,
          content: file.buffer
        })) || []
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Case submitted successfully' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error submitting case' });
    }
  });
}

function generateEmailHtml(formData) {
  return `
    <h1>New Case Submission</h1>
    ${Object.entries(formData).map(([key, value]) => `
      <p><strong>${key}:</strong> ${value}</p>
    `).join('')}
  `;
}