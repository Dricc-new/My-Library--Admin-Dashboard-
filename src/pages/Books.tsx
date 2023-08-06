import AppLayout from "../layouts/AppLayout";

export default function Books() {
    return (
        <AppLayout>
            <section className="flex justify-center font-bold text-gray-800">
                <form action="" className="flex rounded gap-4 m-4 bg-gray-200 shadow-sm shadow-slate-900 p-4 items-center flex-col">
                    <h2 className="text-xl">New Book</h2>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3">
                            <article className="flex gap-2 justify-start flex-col">
                                <label htmlFor="titleBook">Title</label>
                                <input id="titleBook" type="text" className="border h-10 border-stone-800 rounded" name="" />
                            </article>
                            <article className="flex gap-2 justify-start flex-col">
                                <label htmlFor="AuthorBook">Author</label>
                                <input id="AuthorBook" type="text" className="border h-10 border-stone-800 rounded" name="" />
                            </article>
                        </div>
                        <article className="flex gap-2 justify-start flex-col">
                            <label htmlFor="descBook">Description</label>
                            <textarea name="descBook" id="" cols={30} rows={5} className="border border-stone-800 rounded" ></textarea>
                        </article>
                    </div>
                    <button className="bg-cyan-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </section>
        </AppLayout>
    )
}