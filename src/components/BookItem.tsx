import { Link } from "react-router-dom";
import { deleteBook } from "../services/BookServices";
import toast from 'react-hot-toast'

export default function BookItem(props: { onDelete: Function, book: any }) {

    const handleDelete = () => toast((t) => <div>
        <h2 className="py-4">
            Do you want delete?
        </h2>
        <div className="flex justify-end gap-4">
            <button className="p-1 px-5 btn-error" onClick={() => { delBook(); toast.dismiss(t.id) }}>Delete</button>
            <button className="p-1 px-5 btn-primary" onClick={() => toast.dismiss(t.id)}>Cancel</button>
        </div>
    </div>)


    const delBook = async () => {
        const res = await deleteBook(props.book._id)
        if (res.status === 204) await props.onDelete()
        else toast(() => <div>
            <h2 className="py-4">
                This book doesn't exist
            </h2>
        </div>)
    }

    return <li className="shadow-md bg-white rounded shadow-gray-400 hover:shadow-gray-600 hover:shadow-lg p-2 flex flex-col justify-between">
        <img src={props.book.image?.url} alt="" className="object-cover h-56"/>
        <div>
            <h2 className="uppercase text-2xl text-color-primary">{props.book.title}</h2>
            <h2 className="capitalize decoration-sky-600 underline decoration-2 text-sm font-semibold">{props.book.author}</h2>
            <p className="overflow-hidden h-20 border p-1 my-2 overflow-y-auto">{props.book.description}</p>
        </div>
        <div className="flex gap-2 w-full justify-end">
            <Link className="p-1 px-5 btn-primary" to={"/books/" + props.book._id + "/edit"}>
                <i className="fas fa-pencil"></i>
            </Link>
            <button onClick={() => handleDelete()} className="p-1 px-5 btn-error"><i className="fas fa-trash"></i></button>
        </div>
    </li>
}