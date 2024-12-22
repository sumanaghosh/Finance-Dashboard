import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { createContext, useState } from 'react';
import { Header } from './components/Header';
import Setting from './pages/Setting';

const MyContext = createContext();

function App() {

  const values = {}
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className='main md:flex'>
            <div className="sidebarWrapper md:w-[18%]">
              <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className="content_Right px-[8px] md:px-[16px] w-full md:w-[82%] ">
              <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
              <div className='mt-[4.5rem] md:mt-24'>
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
