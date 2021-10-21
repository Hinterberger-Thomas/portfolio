import { serve } from "https://deno.land/std@0.112.0/http/server_legacy.ts";

const server = serve({ port: 8080 });
console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

for await (const request of server) {
  let body = "Your user-agent is:\n\n";
  body += request.headers.get("user-agent") || "Unknown";
  request.respond({ status: 200, body });
}