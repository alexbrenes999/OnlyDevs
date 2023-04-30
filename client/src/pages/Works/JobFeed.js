import Navigation from '../Navbar/Navbar';
import JobPosting from '../../components/JobPosting';

export default function JobFeed () {
    return (
        <div className='bg-slate-200'>
            <Navigation/>
            <div className="flex flex-col items-center justify-center p-12 bg-slate-200">
                {/* HERE IS WHERE EACH JOB POST WILL BE RENDERED, SO MAYBE A FOR EACH LOOP
                FOR EACH JOBPOSTING IN JOBPOSTING RENDER JOB POST */}
                <JobPosting/>
            </div>
            
        </div>
    )
}