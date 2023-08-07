import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import 'react-router-dom';

import { withRouter, WithRouterProps } from '../withRouter';
import { createBook, getBook, updateBook } from "../services/BookServices";

interface Params {
    id: string;
}

type Props = WithRouterProps<Params>;

class Books extends Component<Props> {
    state = {
        book: { title: '', author: '', description: '' },
        id: ''
    }

    // Load data when changing inputs
    onChange = (e: any) => {
        this.setState({ book: { ...this.state.book, [e.target.name]: e.target.value } })
    }

    // Control when loading this component
    async componentDidMount(): Promise<void> {
        const { match } = this.props;

        // if exist id on route
        if (match.params.id) {
            try {
                this.setState({ id: match.params.id })
                const res = await getBook(match.params.id)
                this.setState({ book: res.data })
            } catch (err) {
                console.log(err)
            }
        }
    }

    // On Submit
    onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const newBook = {
                title: this.state.book.title,
                author: this.state.book.author,
                description: this.state.book.description,
            }

            // If the id exists, update the book; otherwise create a new book
            if (this.state.id) {
                await updateBook(this.state.id, newBook)
            } else {
                await createBook(newBook)
            }

            // redirect to dashboard
            window.location.href = '/dashboard '
        } catch (err) {
            console.log(err)
        }
    }

    render = (): React.ReactNode => <AppLayout>
        <section className="flex justify-center font-bold text-stone-700">
            <form onSubmit={this.onSubmit} className="flex rounded gap-4 m-4 bg-white shadow-sm shadow-slate-900 p-4 items-center flex-col">
                <h2 className="text-2xl text-color-primary">{this.state.id ? 'Edit' : 'New'} Book</h2>
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
                <button disabled={!(this.state.book.title && this.state.book.description && this.state.book.author)} type="submit" className="btn-primary w-full h-10">Submit</button>
            </form>
        </section>
    </AppLayout>
}

export default withRouter(Books)