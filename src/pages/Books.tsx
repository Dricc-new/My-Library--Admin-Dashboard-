import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import 'react-router-dom';
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter, WithRouterProps } from '../withRouter';
import { createBook, getBook, updateBook } from "../services/BookServices";
import toast from "react-hot-toast";

interface Params {
    id: string;
}

class Books extends Component<WithRouterProps<Params>> {
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
            } catch (err: any) {
                toast.error(err.message)
            }
        }
    }

    render = (): React.ReactNode => <AppLayout>
        <section className="flex justify-center font-bold text-stone-700">
            <Formik
                initialValues={this.state.book}
                enableReinitialize

                validationSchema={Yup.object({
                    title: Yup.string().required('Title is required'),
                    author: Yup.string().required('Author is required'),
                    description: Yup.string().required('Description is required')
                })}

                onSubmit={async (values) => {
                    try {
                        // If the id exists, update the book; otherwise create a new book
                        if (this.state.id) {
                            await updateBook(this.state.id, values)
                        } else {
                            await createBook(values)
                        }
                        // redirect to dashboard
                        const { navigate } = this.props;
                        navigate('/dashboard')
                    } catch (err: any) {
                        toast.error(err.message)
                    }
                }}>

                <Form className="flex rounded gap-4 m-4 bg-white shadow-sm shadow-slate-900 p-4 items-center flex-col">
                    <h2 className="text-2xl text-color-primary">{this.state.id ? 'Edit' : 'New'} Book</h2>

                    <div className="flex gap-4 max-md:flex-col">
                        <div className="flex flex-col justify-between">

                            <div className="flex gap-2 justify-start flex-col">
                                <label htmlFor="titleBook">Title</label>
                                <Field id="titleBook" name='title'></Field>
                                <ErrorMessage component="p" className="input-error" name='title' />
                            </div>

                            <div className="flex gap-2 justify-start flex-col">
                                <label htmlFor="AuthorBook">Author</label>
                                <Field id="AuthorBook" name='author'></Field>
                                <ErrorMessage component="p" className="input-error" name='author' />
                            </div>
                        </div>

                        <div className="flex gap-2 justify-start flex-col">
                            <label htmlFor="descBook">Description</label>
                            <Field component="textarea" cols={30} rows={5} id="descBook" name='description'></Field>
                            <ErrorMessage component="p" className="input-error" name='description' />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full h-10">Submit</button>
                </Form>
            </Formik>
        </section>
    </AppLayout>
}

export default withRouter(Books)