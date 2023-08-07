import React from 'react'

export default class NotFound extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <section className="w-screen h-screen flex flex-col justify-center font-sans font-bold items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-500 text-8xl">404</h1>
                    <h2 className="text-3xl">Not Found</h2>
                </section>
            </>
        )
    }
}