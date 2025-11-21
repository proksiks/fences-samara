export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const telegramBotToken = config.telegramBotToken;
  const telegramChatId = config.telegramChatId;
  const telegramTopicId = config.telegramTopicId;

  if (!telegramBotToken || !telegramChatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram credentials not configured',
    });
  }

  const body = await readBody(event);
 const { email, phone, district, comment, formType, timestamp, recaptchaToken } = body;

 // Проверяем обязательные поля в зависимости от типа формы
  if (!email || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    });
  }

  // Проверяем reCAPTCHA токен
  const recaptchaSecretKey = config.recaptchaSecretKey;

  if (!recaptchaSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'reCAPTCHA secret key not configured',
    });
  }

  if (!recaptchaToken) {
    throw createError({
      statusCode: 400,
      statusMessage: 'reCAPTCHA token is required',
    });
  }

  // Отправляем токен на проверку в Google
  const verificationResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`
  });

  const verificationResult = await verificationResponse.json();

  if (!verificationResult.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'reCAPTCHA verification failed',
    });
  }

  // Формируем сообщение в зависимости от типа формы
  let message;
  switch (formType) {
    case 'promo':
      message = `
        📩 <b>Новая заявка с промо страницы</b>
        
        📧 <b>Email:</b> ${email}
        📞 <b>Телефон:</b> ${phone}
        📍 <b>Район:</b> ${district || 'Не указан'}
        💬 <b>Комментарий:</b> ${comment || 'Не указан'}
        ⏰ <b>Время:</b> ${new Date(timestamp).toLocaleString('ru-RU')}
      `.trim();
      break;
    case 'short':
      message = `
        📩 <b>Новая краткая заявка</b>
        
        📧 <b>Email:</b> ${email}
        📞 <b>Телефон:</b> ${phone}
        💬 <b>Комментарий:</b> ${comment || 'Не указан'}
        ⏰ <b>Время:</b> ${new Date(timestamp).toLocaleString('ru-RU')}
      `.trim();
      break;
    case 'index':
    default:
      message = `
        📩 <b>Новая заявка с сайта</b>
        
        📧 <b>Email:</b> ${email}
        📞 <b>Телефон:</b> ${phone}
        📍 <b>Район:</b> ${district || 'Не указан'}
        💬 <b>Комментарий:</b> ${comment || 'Не указан'}
        ⏰ <b>Время:</b> ${new Date(timestamp).toLocaleString('ru-RU')}
      `.trim();
  }

  try {
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const payload: Record<string, unknown> = {
      chat_id: telegramChatId,
      text: message,
      parse_mode: 'HTML',
    };

    // Добавляем message_thread_id, если он указан в конфиге
    if (telegramTopicId) {
      payload.message_thread_id = telegramTopicId;
    }

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      throw new Error(`Telegram API error: ${error}`);
    }

    return {
      status: 'success',
      message: 'Application received successfully',
    };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send notification',
    });
  }
});
