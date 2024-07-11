import MosquitoRoulette from '../components/MosquitoRoulette';
import teamPic from '../pics/teamPic.png';

const Team = () => {

	return (
		<div className='absolute w-full'>
			<h1 className='text-center text-6xl m-2'>Team Members</h1>
			<div className='mx-20'>
				<img className='w-full' src={teamPic} alt='Team' />
			</div>
            <MosquitoRoulette />
		</div>
	);
};

export default Team;
