import { lazy } from 'react';
import { Route, Routes } from 'react-router';
const WorkersPage = lazy(() => import('./pages/workers'));
const WorkersInfoPage = lazy(() => import('./pages/id/workersPage'));
const WorkersNewPage = lazy(() => import('./pages/new/workersNew'));

function AppRouter() {
    return (
        <Routes>
            <Route path="/workers">
                <Route index element={<WorkersPage />} />
                <Route path="/new" element={<WorkersNewPage />} />
                <Route path="/:id" element={<WorkersInfoPage />} />
            </Route>
        </Routes>
    )
}
export default AppRouter;