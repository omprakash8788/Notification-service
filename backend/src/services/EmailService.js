const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  });

  return result;
};

module.exports = sendEmail;
