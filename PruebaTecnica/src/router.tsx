import { lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const AgendasMain = lazy(() => import('./pages/Agendas/agendas'));
const AgendasId = lazy(() => import('./pages/Agendas/id/agendasById'));
const AgendasNew = lazy(() => import('./pages/Agendas/new/agendasNew'));

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    // element={<AgendasMain/>}
                />
                <Route
                    path=":id"
                    // element={<AgendasId/>}
                />
                <Route
                    path="new"
                    // element={<AgendasNew/>}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;