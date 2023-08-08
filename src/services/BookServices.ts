import axios from "axios";
import { API_URL } from "./Config";

// Get a book
export const getBook = (id: string) => axios.get(API_URL + '/books/' + id)

// Get all books
export const getBooks = () => axios.get(API_URL + '/books')

// Create a book
export const createBook = (newBook: any) => {
    const form = new FormData()
    for (let key in newBook) {
        form.append(key, newBook[key])
    }

    return axios.post(API_URL + '/books', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

// Update a book
export const updateBook = (id: string, newBook: any) => {
    const form = new FormData()
    for (let key in newBook) {
        form.append(key, newBook[key])
    }
    
    return axios.put(API_URL + '/books/' + id, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

// Delete a book
export const deleteBook = (id: string) => axios.delete(API_URL + '/books/' + id)