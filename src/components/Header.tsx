

export function Header(props: { title: string }) {
    return <>
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-500">{props.title}</h1>
        <hr />
    </>
}