import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "axios";

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

    async componentDidMount(): Promise<void> {
        const res = await axios.get('http://localhost:4000/books')
        this.setState({ books: res.data })
    }
    render(): React.ReactNode {
        return (
            <AppLayout>
                <section className="p-2">
                    <h1 className="text-blue-600 text-3xl font-extrabold">Books</h1>
                    <hr />
                    <ul className=" grid grid-cols-4 gap-4 py-4 cursor-default">
                        {
                            this.state.books.map(book =>
                                <li key={book._id} className="shadow-md bg-gray-100 rounded shadow-gray-400 hover:shadow-gray-600 hover:shadow-lg p-2">
                                    <h2 className="uppercase text-2xl">{book.title}</h2>
                                    <h2 className="capitalize text-sm font-semibold">{book.author}</h2>
                                    <p>{book.description}</p>
                                    <div className="flex gap-2 w-full justify-end">
                                        <button className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-blue-600 text-white"><i className="fas fa-pencil"></i></button>
                                        <button className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-red-600 text-white"><i className="fas fa-trash"></i></button>
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