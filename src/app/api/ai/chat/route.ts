import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const OPENROUTER_API_KEY = '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';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, weatherContext, language } = body;

    if (!message) {
      return NextResponse.json({ message: 'Message required' });
    }

    // Build context
    let contextText = '';
    if (weatherContext) {
      contextText = language === 'ar' 
        ? `\nمعلومات الطقس الحالية:
- المدينة: ${weatherContext.city}, ${weatherContext.country}
- درجة الحرارة: ${weatherContext.temperature}°م
- الرطوبة: ${weatherContext.humidity}%
- الحالة: ${weatherContext.condition}`
        : `\nCurrent weather info:
- City: ${weatherContext.city}, ${weatherContext.country}
- Temperature: ${weatherContext.temperature}°C
- Humidity: ${weatherContext.humidity}%
- Condition: ${weatherContext.condition}`;
    }

    const systemContent = language === 'ar' 
      ? `أنت مساعد طقس ذكي اسمه SkyPulse. أجب على أسئلة المستخدم عن الطقس بشكل مختصر ومفيد باللغة العربية.${contextText}`
      : `You are SkyPulse, a friendly weather AI assistant. Answer weather questions concisely and helpfully.${contextText}`;

    // Call OpenRouter API - try deepseek which is usually available
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://skypulse.app',
        'X-Title': 'SkyPulse Weather App'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemContent
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter error:', errorText);
      return NextResponse.json({ 
        message: language === 'ar' ? 'عذراً، حدث خطأ في الاتصال.' : 'Sorry, connection error.'
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json({ 
        message: language === 'ar' ? 'عذراً، لم أتمكن من الرد.' : 'Sorry, no response generated.'
      });
    }

    return NextResponse.json({ message: reply });
    
  } catch (error: any) {
    console.error('AI Chat error:', error?.message || error);
    return NextResponse.json({ 
      message: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.'
    });
  }
}
