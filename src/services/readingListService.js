import axios from "axios";

const API_URL = "http://localhost:3000/readingList";

export const getReadingList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Reading list fetch error:", error);
    return [];
  }
};

export const addBook = async (newBook) => {
  try {
    const response = await axios.post(API_URL, newBook);
    return response.data;
  } catch (error) {
    console.error("Add book error:", error);
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Delete book error:", error);
  }
};
