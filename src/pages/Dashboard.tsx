import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "axios";
import { Link } from 'react-router-dom'

interface Book {
    _id: string
    title: string
    author: string
    description: string
    create_at: string
}

export default class Dashboard extends Component {
    state = {
        books: new Array<Book>
    }

    async deleteBook(id: string) {
        await axios.delete('http://localhost:4000/books/' + id)
        this.componentDidMount()
    }

    async componentDidMount(): Promise<void> {
        const res = await axios.get('http://localhost:4000/books')
        this.setState({ books: res.data })
    }
    render(): React.ReactNode {
        return (
            <AppLayout>
                <section className="p-2">
                    <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-500">Books</h1>
                    <hr />
                    <ul className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 cursor-default">
                        {
                            this.state.books.map(book =>
                                <li key={book._id} className="shadow-md bg-white rounded shadow-gray-400 hover:shadow-gray-600 hover:shadow-lg p-2">
                                    <h2 className="uppercase text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{book.title}</h2>
                                    <h2 className="capitalize decoration-sky-600 underline decoration-2 text-sm font-semibold">{book.author}</h2>
                                    <p className="overflow-hidden">{book.description}</p>
                                    <div className="flex gap-2 w-full justify-end">
                                        <Link className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-gradient-to-r from-blue-600 to-violet-500 text-white" to={"/books/"+book._id+"/edit" }>
                                            <i className="fas fa-pencil"></i>
                                        </Link>
                                        <button onClick={() => this.deleteBook(book._id)} className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-gradient-to-r from-red-600 to-pink-500 text-white"><i className="fas fa-trash"></i></button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </section>
            </AppLayout>
        )
    }
}