import { lazy } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

const Categories = lazy(() => import('./Pages/Categories'));
const IndvCharacters = lazy(() => import('./Pages/IndvCharacters'));
const MediaItems = lazy(() => import('./Pages/MediaItems'));
const MediaItemSelected = lazy(() => import('./Pages/MediaItemSelected'));

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/category" />}
                />
                <Route
                    path="category"
                    element={<Categories />}
                />
                <Route
                    path="search_items/:category"
                    element={<MediaItems />}
                >
                    <Route
                        path=":media-name"
                        element={<MediaItemSelected />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;