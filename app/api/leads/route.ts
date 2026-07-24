import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!googleScriptUrl) {
    console.log("Demo lead submission:", payload);
    return NextResponse.json({
      ok: true,
      demo: true,
      message: "Saved in demo mode. Add GOOGLE_APPS_SCRIPT_URL to connect Google automation.",
    });
  }

  const response = await fetch(googleScriptUrl, {
    method: "POST",
    headers: {"Content-Type": "text/plain;charset=utf-8"},
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ok: false}, {status: 502});
  }

  return NextResponse.json({ok: true});
}
