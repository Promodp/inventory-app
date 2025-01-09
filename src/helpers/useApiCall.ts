import axios from "axios";
import { ApiUrls, ErrorMessages } from "../constants/constants.ts";

export const fetchInventoryData = async () => {
  try {
    const response = await axios.get(ApiUrls.INVENTORY_API);
    return response.data.map((item: any) => ({
      ...item,
      price: parseFloat(item.price.replace("$", "")), 
      value: parseFloat(item.price.replace("$", "")) * item.quantity,
      disabled: false,
    }));
  } catch (error) {
    console.error(ErrorMessages.FETCH_ERROR, error);
    throw error;
  }
};