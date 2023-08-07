import { useEffect, useState } from 'react'
import { getBooks } from '../services/BookServices'
import BookItem from './BookItem'
interface Book {
    _id: string
    title: string
    author: string
    description: string
    create_at: string
}

export function BookList() {

    const [books, setBooks] = useState(new Array<Book>)

    // Get all books
    const getAllBooks = async () => {
        const res = await getBooks()
        setBooks(res.data)
    }

    // Control when loading this component
    useEffect(() => {
        getAllBooks()
    }, [])

    return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 cursor-default">
        {books.map(book =>
            <BookItem key={book._id} _id={book._id} title={book.title} author={book.author} description={book.description} onDelete={() => getAllBooks()} />
        )}
    </ul>
}