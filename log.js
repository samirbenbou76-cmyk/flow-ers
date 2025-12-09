export default async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"] || "unknown";

  // Log it to Vercel logs (visible in your deployment logs)
  console.log("Visitor:", {
    ip,
    userAgent,
    time: new Date().toISOString(),
  });

  res.status(200).json({ success: true });
}
