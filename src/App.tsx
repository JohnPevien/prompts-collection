import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromptCategories from "@src/components/blocks/PromptCategories";
import { All, CodingPage } from "./components/pages";
import { SearchProvider } from "@src/contexts/SearchContext";
function App() {
    return (
        <div className="min-h-screen bg-gray-50 w-screen">
            <div className="container mx-auto p-8">
                <BrowserRouter>
                    <SearchProvider>
                        <PromptCategories className="mx-auto" />
                        <Routes>
                            <Route path="/" element={<All />} />
                            <Route path="/coding" element={<CodingPage />} />
                        </Routes>
                    </SearchProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
