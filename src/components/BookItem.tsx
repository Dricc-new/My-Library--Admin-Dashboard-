import { Link } from "react-router-dom";
import { deleteBook } from "../services/BookServices";

export default function BookItem(props: { onDelete: Function, _id: string, title: string, author: string, description: string }) {
    const delBook = async (id: string) => {
        await deleteBook(id)
        await props.onDelete()
    }

    return <li className="shadow-md bg-white rounded shadow-gray-400 hover:shadow-gray-600 hover:shadow-lg p-2 flex flex-col justify-between">
        <div>
            <h2 className="uppercase text-2xl text-color-primary">{props.title}</h2>
            <h2 className="capitalize decoration-sky-600 underline decoration-2 text-sm font-semibold">{props.author}</h2>
            <p className="overflow-hidden">{props.description}</p>
        </div>
        <div className="flex gap-2 w-full justify-end">
            <Link className="p-1 px-5 btn-primary" to={"/propss/" + props._id + "/edit"}>
                <i className="fas fa-pencil"></i>
            </Link>
            <button onClick={() => delBook(props._id)} className="p-1 px-5 btn-error"><i className="fas fa-trash"></i></button>
        </div>
    </li>
}