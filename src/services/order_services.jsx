import api from "../api/api";

export const PassOrder = async (orderData) => {
  try {
    const response = await api.post('Order/orders/', orderData);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};