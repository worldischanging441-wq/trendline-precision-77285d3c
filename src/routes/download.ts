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
          return new Response("Stripe configuration is missing.", {
            status: 500,
          });
        }

        const stripeResponse = await fetch(
          `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
          {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`,
            },
          },
        );

        if (!stripeResponse.ok) {
          return new Response("Payment could not be verified.", {
            status: 403,
          });
        }

        const session = (await stripeResponse.json()) as {
          payment_status?: string;
        };

        if (session.payment_status !== "paid") {
          return new Response("Payment has not been confirmed.", {
            status: 403,
          });
        }

        const book = await get("Trading Precision.pdf", {
          access: "private",
        });

        if (!book || book.statusCode !== 200) {
          return new Response("Book file could not be found.", {
            status: 404,
          });
        }

        return new Response(book.stream, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
              'attachment; filename="Trading Precision.pdf"',
            "Cache-Control": "private, no-store",
          },
        });
      },
    },
  },
});
