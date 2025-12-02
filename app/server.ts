const isProduction = process.env.NEXT_APP_ENV === "production";

export const server = isProduction
  ? "https://opoolaconference.onrender.com/api/v1"
  : "http://localhost:8000/api/v1";

export const client = isProduction
  ? "https://opoolaconference.vercel.app/"
  : "http://localhost:3000";


