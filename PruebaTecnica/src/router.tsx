import { lazy } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';


const AgendasMain = lazy(() => import('./pages/Agendas/agendas'));
const AgendasId = lazy(() => import('./pages/Agendas/id/agendasById'));
const SlugNew = lazy(() => import('./pages/Agendas/new/slugNew'));

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/agendas" />}
                />
                <Route
                    path="/agendas"
                >
                    <Route
                        index
                        element={<AgendasMain />}
                    />
                    <Route
                        path=":id"
                        element={<AgendasId />}
                    />
                    <Route
                        path="new"
                        element={<SlugNew />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;