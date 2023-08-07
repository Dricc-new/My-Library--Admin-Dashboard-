import { useState } from 'react'
import NavBar from '../components/Navbar'
import Aside from '../components/Aside'

export default function AppLayout(props: any) {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <header className='fixed top-0 bg-stone-900 shadow-xs shadow-stone-950 w-screen text-white'>
                <nav className='container mx-auto p-2 flex justify-between'>
                    <h1 className='uppercase text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'><i className='fas fa-book bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500'></i> MyLibrary</h1>
                    <button onClick={() => setToggleMenu(toggleMenu ? false : true)} className='sm:hidden border rounded px-2'>
                        <i className='fas fa-navicon'></i>
                    </button>
                </nav>
            </header>
            <section className='mt-12 w-screen flex h-[calc(100vh-48px)] overflow-hidden'>
                <aside className={'fixed sm:static sm:w-64 z-0 right-0 w-screen bg-stone-950 text-white transition-all ' + (toggleMenu ? 'translate-x-0' : 'max-sm:translate-x-full')}>
                    <Aside></Aside>
                </aside>
                <main className='h-full overflow-y-auto container mx-auto bg-gray-100'>
                    {props.children}
                </main>
            </section>
        </>
    )
}