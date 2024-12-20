import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { createContext } from 'react';
import { Header } from './components/Header';
import Setting from './pages/Setting';

const MyContext = createContext();

function App() {

  const values = {}
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className='main flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="content_Right w-[82%] px-4">
              <Header />
              <div className='mt-24'>
                <Routes>
                  <Route path="/" exact={true} element={<Dashboard />} />
                  <Route path="/setting" exact={true} element={<Setting />} />
                </Routes>
              </div>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>

    </>
  )
}

export default App
