import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromptCategories from "@src/components/blocks/PromptCategories";
import { CategoryPage } from "@src/components/pages/CategoryPage";
import { SearchProvider } from "@src/contexts/SearchContext";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 w-screen">
            <div className="container mx-auto p-8">
                <BrowserRouter>
                    <SearchProvider>
                        <PromptCategories className="mx-auto" />
                        <Routes>
                            <Route path="/" element={<CategoryPage />} />
                            <Route
                                path="/:category"
                                element={<CategoryPage />}
                            />
                        </Routes>
                    </SearchProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
