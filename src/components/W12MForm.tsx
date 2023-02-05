import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import BeingsNumber from './BeingsNumber';
import TwoPlusTwo from './TwoPlusTwo';
import SparingReasons from './SparingReasons';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState<string>('');
	const [planetName, setPlanetName] = useState<string>('');
	const [beingsNumber, setBeingsNumber] = useState<string>('');
	const [twoPlusTwo, setTwoPlusTwo] = useState<string>('');
	const [sparingReasons, setSparingReasons] = useState<string>('');

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`Species Name: ${speciesName}`);
		console.log(`Planet Name: ${planetName}`);
		console.log(`Number of Beings: ${beingsNumber}`);
		console.log(`Two Plus Two Equals: ${twoPlusTwo}`);
		console.log(`Reasons for Sparing: ${sparingReasons}`);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit={submitForm}>
				<SpeciesName 
					speciesName={speciesName}
					changeSpeciesName={(event: any) => setSpeciesName(event.target.value)}
				/>
				<PlanetName
					planetName={planetName}
					changePlanetName={(event: any) => setPlanetName(event.target.value)}
				/>
				<BeingsNumber
					beingsNumber={beingsNumber}
					changeBeingsNumber={(event: any) => setBeingsNumber(event.target.value)}
				/>
				<TwoPlusTwo
					twoPlusTwo={twoPlusTwo}
					changeTwoPlusTwoValue={(event: any) => setTwoPlusTwo(event.target.value)}
				/>
				<SparingReasons
					spareReasons={sparingReasons}
					changeSpareReasons={(event: any) => setSparingReasons(event.target.value)}
				/>
				<button type="submit" id="submit">Submit</button>
			</form>
		</section>
	);
};

export default W12MForm;
