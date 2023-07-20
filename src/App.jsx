import './App.css';
import Router from './shared/Router';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import { QueryClient, QueryClientProvider} from 'react-query';

dayjs.extend(utc)

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Router/>
    </QueryClientProvider>
  );
}

export default App;
