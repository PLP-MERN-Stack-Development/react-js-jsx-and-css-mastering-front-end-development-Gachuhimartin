import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch post');
  }
};

export const fetchComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching comments: ' + error.message);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

export const fetchApiData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};