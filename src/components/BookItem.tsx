import { Link } from "react-router-dom";
import { deleteBook } from "../services/BookServices";

export default function BookItem(props: { onDelete: Function, _id: string, title: string, author: string, description: string }) {
    const delBook = async (id:string) => {
        await deleteBook(id)
        await props.onDelete()
    }

    return (
        <>
            <li className="shadow-md bg-white rounded shadow-gray-400 hover:shadow-gray-600 hover:shadow-lg p-2">
                <h2 className="uppercase text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{props.title}</h2>
                <h2 className="capitalize decoration-sky-600 underline decoration-2 text-sm font-semibold">{props.author}</h2>
                <p className="overflow-hidden">{props.description}</p>
                <div className="flex gap-2 w-full justify-end">
                    <Link className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-gradient-to-r from-blue-600 to-violet-500 text-white" to={"/propss/" + props._id + "/edit"}>
                        <i className="fas fa-pencil"></i>
                    </Link>
                    <button onClick={() => delBook(props._id)} className="p-1 px-5 rounded shadow-sm hover:shadow-slate-900 bg-gradient-to-r from-red-600 to-pink-500 text-white"><i className="fas fa-trash"></i></button>
                </div>
            </li>
        </>
    )
}