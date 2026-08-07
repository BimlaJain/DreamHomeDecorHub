import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return Response.json(
                {
                    success: false,
                    message: "Please fill in all fields.",
                },
                {
                    status: 400,
                }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "DreamHomeDecorHub <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL],
            replyTo: email,
            subject: `DreamHomeDecorHub: ${subject}`,

            html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 30px;">

          <h2 style="color: #8C603A;">
            New Contact Message
          </h2>

          <div style="background: #FAF6F1; padding: 20px; border-radius: 12px;">

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Subject:</strong> ${subject}
            </p>

          </div>

          <div style="margin-top: 25px;">

            <h3>Message</h3>

            <p style="line-height: 1.7; color: #555;">
              ${message}
            </p>

          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 13px; color: #888;">
            This message was sent through the DreamHomeDecorHub contact form.
          </p>

        </div>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);

            return Response.json(
                {
                    success: false,
                    message: "Unable to send your message right now.",
                },
                {
                    status: 500,
                }
            );
        }

        return Response.json({
            success: true,
            message: "Your message has been sent successfully!",
            data,
        });

    } catch (error) {
        console.error("Contact API Error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong. Please try again.",
            },
            {
                status: 500,
            }
        );
    }
}