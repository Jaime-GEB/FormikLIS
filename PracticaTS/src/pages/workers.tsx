import { WorkersTable } from '../modules/Workers/components/WorkersTable/WorkersTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const BaseFiberPage: React.FC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <WorkersTable/>
    </QueryClientProvider>
  )
};

export default BaseFiberPage;