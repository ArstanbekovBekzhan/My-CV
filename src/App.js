import { Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe.jsx';

import { Layout } from './component/Layout/Layout.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/about' index element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;