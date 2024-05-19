import React from "react";
import ReactDOMServer from "react-dom/server"; // Import ReactDOMServer for rendering components to HTML
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Render the ContactFormEmail component to HTML
    const emailContentHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      })
    );

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "uniformedtornado@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: emailContentHtml, // Use the rendered HTML here
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
