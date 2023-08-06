import { useNavigate } from 'react-router-dom';

export default function Aside() {
    const navigate = useNavigate()
    return (
        <>
            <menu className='flex flex-col p-1'>
                <li className='hover:bg-blue-600 p-2 rounded' onClick={()=> navigate('/dashboard')}>Dashboard</li>
                <li className='hover:bg-blue-600 p-2 rounded' onClick={()=> navigate('/users')}>Users</li>
                <li className='hover:bg-blue-600 p-2 rounded' onClick={()=> navigate('/books')}>Books</li>
            </menu>
        </>
    )
}