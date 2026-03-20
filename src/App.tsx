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
                                path="/blog-writing"
                                element={<CategoryPage />}
                            />
                            <Route path="/coding" element={<CategoryPage />} />
                            <Route
                                path="/cold-dm-ideas"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/cold-email-ideas"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/content-creation-frameworks"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/copywriting-frameworks"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/copywriting"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/email-marketing"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/facebook-ad-copy"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/growth-hacking-frameworks"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/influencer-marketing"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/instagram"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/psychological-models"
                                element={<CategoryPage />}
                            />
                            <Route path="/twitter" element={<CategoryPage />} />
                            <Route path="/youtube" element={<CategoryPage />} />
                        </Routes>
                    </SearchProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
