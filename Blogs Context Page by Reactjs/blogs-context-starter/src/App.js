import React from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext , useEffect} from 'react';
import { AppContext } from './context/Appcontext';

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
    useEffect( () => {
      fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
