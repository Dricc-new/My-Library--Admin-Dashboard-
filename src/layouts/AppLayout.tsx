import { useState } from 'react'
import NavBar from '../components/Navbar'
import Aside from '../components/Aside'

export default function AppLayout(props: any) {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <header className='fixed top-0 bg-stone-900 shadow-xs shadow-stone-950 w-screen text-white'>
                <nav className='container mx-auto p-2 flex justify-between'>
                    <h1 className='uppercase text-2xl'><i className='fas fa-book text-blue-700'></i> MyLibrary</h1>
                    <button onClick={() => setToggleMenu(toggleMenu ? false : true)} className='border rounded px-2'>
                        <i className='fas fa-navicon'></i>
                    </button>
                </nav>
            </header>
            <aside className={'fixed z-0 right-0 w-screen bg-stone-950 text-white transition-all ' + (toggleMenu ? 'translate-x-0' : 'translate-x-full')}>
                <Aside></Aside>
            </aside>
            <main className='mt-12 w-screen'>
                {props.children}
            </main>
        </>
    )
}