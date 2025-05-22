require('dotenv').config();
const axios = require('axios');
const cron = require('node-cron');

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;

function startDailyNotificationJob() {
  // Minden nap 10:00-kor szerveridő szerint
  cron.schedule('0 10 * * *', async () => {
    console.log('🔔 Küldés: napi értesítés 10:00-kor');

    try {
      const response = await axios.post(
        'https://onesignal.com/api/v1/notifications',
        {
          app_id: ONESIGNAL_APP_ID,
          included_segments: ['All'],
          headings: { en: "Jó reggelt!" },
          contents: { en: "Ez a napi üzeneted 💬" },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${ONESIGNAL_API_KEY}`,
          }
        }
      );
      console.log('✅ Értesítés elküldve:', response.data.id);
    } catch (error) {
      console.error('❌ Hiba az értesítés küldésénél:', error.response?.data || error.message);
    }
  });
}

module.exports = startDailyNotificationJob;
