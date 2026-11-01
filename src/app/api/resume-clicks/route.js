const COUNTER_KEY = "portfolio:resume-clicks";
export const dynamic = "force-dynamic";

const developmentCounter =
  globalThis.__portfolioResumeClickCounter ||
  (globalThis.__portfolioResumeClickCounter = { count: 0 });

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function runRedisCommand(command) {
  const config = getRedisConfig();
  if (!config) {
    if (process.env.NODE_ENV !== "development") return null;
    if (command.startsWith("incr/")) developmentCounter.count += 1;
    return developmentCounter.count;
  }

  const response = await fetch(`${config.url}/${command}`, {
    headers: { Authorization: `Bearer ${config.token}` },
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Counter storage request failed");

  const result = await response.json();
  if (result.error) throw new Error("Counter storage request failed");
  return Number(result.result ?? 0);
}

export async function GET() {
  try {
    const count = await runRedisCommand(`get/${COUNTER_KEY}`);
    if (count === null) {
      return Response.json({ count: null }, { status: 503 });
    }
    return Response.json({ count });
  } catch {
    return Response.json({ count: null }, { status: 503 });
  }
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ count: null }, { status: 403 });
  }

  try {
    const count = await runRedisCommand(`incr/${COUNTER_KEY}`);
    if (count === null) {
      return Response.json({ count: null }, { status: 503 });
    }
    return Response.json({ count });
  } catch {
    return Response.json({ count: null }, { status: 503 });
  }
}
