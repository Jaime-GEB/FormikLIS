import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {DevicesTable} from "./components/DevicesTable";

const App = () => {
    const queryClient = new QueryClient();
    
    return(
        <QueryClientProvider client={queryClient}>
            <DevicesTable/>
        </QueryClientProvider>
    )
}
export default App;