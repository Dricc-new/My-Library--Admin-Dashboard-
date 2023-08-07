import React, { Component } from "react";
import AppLayout from "../layouts/AppLayout";
import { Header } from "../components/Header";
import { BookList } from "../components/BookList";

export default class Dashboard extends Component {
    render = (): React.ReactNode => <AppLayout>
        <Header title="Books" />
        <BookList />
    </AppLayout>
}