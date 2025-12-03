import NavBar from '../components/NavBar';
import { type ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <br />
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout;