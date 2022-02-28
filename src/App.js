import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './router/Home';
import { About } from './router/About';
import { NavBar } from './components/NavBar';
import { BookList } from './components/BookList';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Detail } from './router/Detail';
import { NoMatch } from './router/NoMatch';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bestsell" element={<About />}/>
          <Route path="detail/:isbn" element={<Detail />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
