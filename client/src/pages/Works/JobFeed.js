import Navigation from '../Navbar/Navbar';
import JobPosting from '../../components/JobPosting';
import { useQuery} from '@apollo/client';
import { FIND_HELPPOST } from '../../utils/queries';

export default function JobFeed () {
    const { data, loading, error } = useQuery(FIND_HELPPOST);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :</p>;
        console.log(data)
    return (
        <div className='bg-slate-200'>
            <Navigation/>
            <div className="flex flex-col items-center justify-center p-12 bg-slate-200">
               <JobPosting posting={data.helpPost}/>
            </div>
            
        </div>
    )
}