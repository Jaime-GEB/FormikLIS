import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const WorkersPage = lazy(() => import('./pages/workers'));
// const WorkersInfoPage = lazy(() => import('./pages/id/workersPage'));
// const WorkersNewPage = lazy(() => import('./pages/new/workersNew'));

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/workers">
                    <Route index element={<WorkersPage />} />
                    {/* <Route path="/new" element={<WorkersNewPage />} />
                    <Route path="/:id" element={<WorkersInfoPage />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRouter;