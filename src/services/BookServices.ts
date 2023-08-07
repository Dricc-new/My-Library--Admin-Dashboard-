import axios from "axios";
import { API_URL } from "./Config";

interface BookInterface {
    title: string
    author: string
    description: string
}

// Get a book
export const getBook = (id: string) => axios.get(API_URL + '/books/' + id)

// Get all books
export const getBooks = () => axios.get(API_URL + '/books')

// Ccreate a book
export const createBook = (newBook: BookInterface) => axios.post(API_URL + '/books', newBook)

// Update a book
export const updateBook = (id: string, newBook: BookInterface) => axios.put(API_URL + '/books/' + id, newBook)

// Delete a book
export const deleteBook = (id: string) => axios.delete(API_URL + '/books/' + id)