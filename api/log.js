export default function handler(req, res) {
  // IP address (Vercel passes it here)
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  // Browser / OS info
  const userAgent = req.headers["user-agent"];

  // Timestamp
  const time = new Date().toISOString();

  // Log format (print to Vercel logs)
  console.log({
    ip,
    userAgent,
    time
  });

  res.status(200).json({ status: "logged" });
}
