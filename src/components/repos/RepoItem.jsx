import PropTypes from 'prop-types';
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa';


function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo;
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className="card-body py-3">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target='_blank' rel='noreferrer' >
            <FaLink className='inline mr-1'/> 
            {name}
          </a>
        </h3>
        <p className="mb-1">{description}</p>
        </div>
      <div className="flex flex-row mb-5 ml-8">
      <div className="mr-2 badge badge-info ">
        <FaEye className='mr-2'/>{watchers_count}
      </div>
      <div className="mr-2 badge badge-success ">
        <FaStar className='mr-2'/>{stargazers_count}
      </div>
      <div className="mr-2 badge badge-error ">
        <FaInfo className='mr-2'/>{open_issues}
      </div>
      <div className="mr-2 badge badge-warning ">
        <FaUtensils className='mr-2'/>{forks}
      </div>
      
      </div>
    </div>
  )
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;