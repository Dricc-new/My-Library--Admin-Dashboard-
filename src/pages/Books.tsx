import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import 'react-router-dom';
import axios from "axios";

import { withRouter, WithRouterProps } from '../withRouter';

interface Params {
    id: string;
}

type Props = WithRouterProps<Params>;

class Books extends Component<Props> {
    state = {
        book: { title: '', author: '', description: '' },
        id: 0
    }

    onChange = (e: any) => {
        this.setState({ book: { ...this.state.book, [e.target.name]: e.target.value } })
    }
    async componentDidMount(): Promise<void> {
        const { match } = this.props;
        if (match.params.id) {
            try {
                this.setState({ id: match.params.id })
                const res = await axios.get('http://localhost:4000/books/' + match.params.id)
                this.setState({ book: res.data })
            } catch (err) {
                console.log(err)
            }
        }
    }

    onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const newBook = {
                title: this.state.book.title,
                author: this.state.book.author,
                description: this.state.book.description,
            }
            if (this.state.id) {
                await axios.put('http://localhost:4000/books/' + this.state.id, newBook)
            } else {
                await axios.post('http://localhost:4000/books', newBook)
            }
            window.location.href = 'http://localhost:5173/dashboard '
        } catch (err) {
            console.log(err)
        }
    }

    render(): React.ReactNode {
        return (
            <AppLayout>
                <section className="flex justify-center font-bold text-stone-700">
                    <form onSubmit={this.onSubmit} className="flex rounded gap-4 m-4 bg-white shadow-sm shadow-slate-900 p-4 items-center flex-col">
                        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{this.state.id?'Edit':'New'} Book</h2>
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col justify-between">
                                <article className="flex gap-2 justify-start flex-col">
                                    <label htmlFor="titleBook" className="decoration-sky-600 underline decoration-2">Title</label>
                                    <input required value={this.state.book.title} id="titleBook" onChange={this.onChange} name="title" type="text" className="border p-2 focus:outline-blue-900 border-blue-900 rounded" />
                                </article>
                                <article className="flex gap-2 justify-start flex-col">
                                    <label htmlFor="AuthorBook" className="decoration-sky-600 underline decoration-2">Author</label>
                                    <input required value={this.state.book.author} id="AuthorBook" onChange={this.onChange} name="author" type="text" className="border p-2 focus:outline-blue-900 border-blue-900 rounded" />
                                </article>
                            </div>
                            <article className="flex gap-2 justify-start flex-col">
                                <label htmlFor="descBook" className="decoration-sky-600 underline decoration-2">Description</label>
                                <textarea required value={this.state.book.description} id="descBook" onChange={this.onChange} name="description" cols={30} rows={5} className="border p-2 focus:outline-blue-900 border-blue-900 rounded" ></textarea>
                            </article>
                        </div>
                        <button disabled={!(this.state.book.title && this.state.book.description && this.state.book.author)} type="submit" className="bg-gradient-to-r from-blue-600 to-violet-500 text-white w-full h-10 rounded">Submit</button>
                    </form>
                </section>
            </AppLayout>
        )
    }
}

export default withRouter(Books)