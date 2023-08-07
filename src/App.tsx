import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Books from "./pages/Books"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/login" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id/edit" element={<Books/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
