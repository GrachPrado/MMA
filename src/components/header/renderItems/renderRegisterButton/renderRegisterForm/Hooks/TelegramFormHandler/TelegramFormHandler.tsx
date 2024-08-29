import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT; // Ensure these environment variables are set correctly in your .env file
const CHAT_ID = process.env.REACT_APP_CHAT_ID;
const TOKEN = process.env.REACT_APP_TOKEN;

export const TelegramFormHandler = async (formData: { name: string; phone: string }): Promise<void> => {
  const message = `Name: ${formData.name}\nPhone: ${formData.phone}`;

  try {
    const response = await axios.post(
      `${API_ENDPOINT}/bot${TOKEN}/sendMessage`, // Correctly reference the variables
      {
        chat_id: CHAT_ID, // Correctly use the variable
        text: message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error; // Re-throw the error so it can be caught in the calling component
  }
};
