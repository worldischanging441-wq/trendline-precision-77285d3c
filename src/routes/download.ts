import { createFileRoute } from "@tanstack/react-router";
import { get } from "@vercel/blob";

export const Route = createFileRoute("/download")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const sessionId = url.searchParams.get("session_id");

        if (!sessionId) {
          return new Response("Missing payment session.", {
            status: 400,
          });
        }

        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

        if (!stripeSecretKey) {
          console.error("STRIPE_SECRET_KEY is not configured.");
          return new Response("Server configuration error.", {
            status: 500,
          });
        }

        // Ask Stripe to verify this Checkout Session.
        const stripeResponse = await fetch(
          `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
          {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`,
            },
          },
        );

        if (!stripeResponse.ok) {
          console.error("Stripe session verification failed.");
          return new Response("Unable to verify payment.", {
            status: 403,
          });
        }

        const session = (await stripeResponse.json()) as {
          payment_status?: string;
        };

        // Only deliver the book after Stripe confirms payment.
        if (session.payment_status !== "paid") {
          return new Response("Payment has not been confirmed.", {
            status: 403,
          });
        }

        // Retrieve the private PDF from Vercel Blob.
        const blob = await get("Trading Precision.pdf", {
          access: "private",
        });

        if (!blob || blob.statusCode !== 200) {
          console.error("Trading Precision.pdf could not be retrieved.");
          return new Response("Book temporarily unavailable.", {
            status: 500,
          });
        }

        return new Response(blob.stream, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
              'attachment; filename="Trading Precision.pdf"',
            "Cache-Control": "private, no-store",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
