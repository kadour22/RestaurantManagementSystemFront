import api from "../api/api";

export const getMenuItems = async () => {
  try {
    const response = await api.get("MenuItem/menu");
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};

export const getMenuItemById = async (id) => {
  try {
    const response = await api.get(`MenuItem/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu item with id ${id}:`, error);
    throw error;
  }
};

export const createMenuItem = async (menuItem) => {
  try {
    const response = await api.post("MenuItem/menu", menuItem);
    return response.data;
  } catch (error) {
    console.error("Error creating menu item:", error);
    throw error;
  }
};