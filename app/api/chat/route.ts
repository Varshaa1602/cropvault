import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { location, question } = await req.json();

  const systemPrompt = `You are CropVault's planning assistant. You explain why a location was recommended for crop-residue-to-energy conversion, using ONLY the data provided below. Do not invent numbers. Keep answers short (2-4 sentences), clear, and practical.

Location data:
Name: ${location.name}
Crop type: ${location.cropType}
Surplus: ${location.surplusTons} tons
Distance: ${location.distanceKm} km
Risk score: ${location.riskScore}
Final ranking score: ${location.finalScore}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        max_tokens: 300,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question },
        ],
      }),
    });

    const data = await response.json();
    console.log('Groq response:', JSON.stringify(data));
    const answer = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ answer });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ answer: 'Something went wrong. Please try again.' });
  }
}