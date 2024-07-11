import mosquito from '../pics/mosq.png';
import beet from '../pics/beet.png';
import '../mosquito.css'

const init = {
	beetX: 300,
	beetY: 374,
	mosX: 100,
	mosY: 150,
};

const MosquitoRoulette = () => {
	const displayMosquitos = () => {
		const radius = 250;
		const step = (2 * Math.PI) / 7;
		const list = [];
		let angle = 0;
		for (let i = 1; i <= 7; i++) {
			list.push(
				<img 
					key={i}
					className='w-[100px] absolute mosquito'
					style={{
						top: Math.round(
							init.beetY / 2 +
								radius * Math.sin(angle) -
								init.mosY / 2
						),
						left: Math.round(
							init.beetX / 2 +
								radius * Math.cos(angle) -
								init.mosX / 2
						),
					}}
					src={mosquito}
					alt='Mosquito'
				/>
			);
			angle += step;
		}

		return list;
	};

	return (
		<div className='w-[300px] mx-auto my-60 relative'>
			<img
				className='w-full h-full'
				src={beet}
				alt='Beetroot'
			/>
			<div className='w-[300px] h-[374px] top-0 absolute mosquito-orbit'>{displayMosquitos()}</div>
		</div>
	);
};

export default MosquitoRoulette;
