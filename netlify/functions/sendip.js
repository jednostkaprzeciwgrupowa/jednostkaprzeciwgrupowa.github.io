export async function handler(event, context) {
  const body = JSON.parse(event.body || '{}');
  const ip = body.ip || 'Nieznane IP';

  // Przykład: wyślij dane do webhooka Discord
  await fetch("https://discord.com/api/webhooks/https://discord.com/api/webhooks/1387366520476139602/ayGVizlIBH-Hay_cwvhiQCgS23tGSDK4xBEI-M0F5vYtbpwO8K6tYR1FMNnKUkguRLBw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `Nowe wejście na stronę! IP: ${ip}` })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
}
