import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Jobs from './pages/Jobs';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import Job, {jobLoader} from './pages/Job';
import NotFound from './pages/NotFound';

const App = () => {
  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />    
  //   </>
  // );

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs/', {
      method: 'post',
      headers: {
        contentType: 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
    // console.log(newJob);
  };

  const updateJob = async (job) => {
    console.log(job.id)
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });

    return;
    // console.log(newJob);
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'delete'
    });

    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} /> 
        <Route path='/jobs' element={<Jobs />} /> 
        <Route path='/job/create' element={<CreateJob addJobSubmit={addJob} />} /> 
        <Route path='/jobs/edit/:id' element={<EditJob updateJobSubmit={updateJob} />} loader={jobLoader} /> 
        <Route path='/jobs/:id' element={<Job deleteJob={deleteJob} />} loader={jobLoader} /> 
        <Route path='*' element={<NotFound />} /> 
      </Route>
    ),
    // createRoutesFromElements(<Route path='/about' element={<h1>Hello</h1>} />),
  );

  return <RouterProvider router={router} />
};

export default App;
