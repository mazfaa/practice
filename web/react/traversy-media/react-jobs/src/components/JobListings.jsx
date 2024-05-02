import { useState, useEffect } from "react";
// import jobs from '../jobs.json';
import JobListing from "./JobListing";
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const jobListings = isHome ? jobs.slice(jobs.length - 3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      // const apiURL = isHome ? 
      //   'http://localhost:8000/jobs?_limit=3' :
      //   'http://localhost:8000/jobs';

      const apiURL = isHome ? 
        '/api/jobs?_limit=3' :
        '/api/jobs';

      try {
        const res = await fetch(apiURL);
        // console.log("res: " + res);
        const data = await res.json();
        // console.log("data: " + data);

        // for (const item of data) {
        //   console.log(item)
        // }
        setJobs(data);
      } catch (error) {
        console.log("Error whie fetching jobs data : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        
        {loading ? (<Spinner loading={loading} />) : 
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        }
      </div>
    </section>
  );
};

export default JobListings;
