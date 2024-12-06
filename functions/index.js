/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const mailchimp = require("@mailchimp/mailchimp_marketing");

admin.initializeApp();

// Initialize Mailchimp with your API Key and Server Prefix (found in Mailchimp settings)
mailchimp.setConfig({
  apiKey: "f2d68c2d8c0a302ade63c2abf35e016d-us7",
  server: "us-7",
});

// Cloud function that triggers when a new email is added to Firestore
exports.sendWelcomeEmail = functions.firestore
  .document("subscribers/{subscriberId}")
  .onCreate(async (snap, context) => {
    const email = snap.data().email; // Get email from Firestore document

    // Wait for 10 seconds before sending the email
    await new Promise(resolve => setTimeout(resolve, 10000));

    try {
      // Add the email to Mailchimp Audience
      const response = await mailchimp.lists.addListMember("your-audience-id", {
        email_address: email,
        status: "subscribed",
      });

      console.log("Email added to Mailchimp:", response);

      // Send a promotional email (using the 'send' feature in Mailchimp)
      const emailContent = {
        from_name: "A&S TaxCare",
        from_email: "info@yourdomain.com", // Replace with your email
        subject: "Thank you for subscribing to A&S TaxCare",
        html: "<strong>Thank you for subscribing to our service. Here’s our latest offer...</strong>", // Your promotional content
      };

      // You can use transactional email features in Mailchimp for sending one-time emails
      await mailchimp.messages.send({ ...emailContent, to: email });

      console.log("Promotional email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
