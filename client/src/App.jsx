<<<<<<< HEAD

// import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
=======
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
>>>>>>> 0e31a9d (create dashboard)
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Tasks from "./pages/Tasks";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";


// function Layout() {
//   const { user } = useSelector((state) => state.auth);
=======
import Dashboard from "./pages/dashboard";
import { setOpenSidebar } from "./redux/slices/authSlice";
>>>>>>> 0e31a9d (create dashboard)

//   const location = useLocation();

<<<<<<< HEAD
//   return user ? (
//     <div className='w-full h-screen flex flex-col md:flex-row'>
//       <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
//         <Sidebar />
//       </div>
=======
  const location = useLocation();
>>>>>>> 0e31a9d (create dashboard)

//       <MobileSidebar />

//       <div className='flex-1 overflow-y-auto'>
//         <Navbar />

//         <div className='p-4 2xl:px-10'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Navigate to='/log-in' state={{ from: location }} replace />
//   );
// }

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className='bg-white w-3/4 h-full'>
              <div className='w-full flex justify-end px-5 mt-5'>
                <button
                  onClick={() => closeSidebar()}
                  className='flex justify-end items-end'
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className='-mt-10'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6] '>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDetails />} />
        {/* </Route> */}

        <Route path='/log-in' element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

<<<<<<< HEAD

=======
export default App;
>>>>>>> 0e31a9d (create dashboard)
