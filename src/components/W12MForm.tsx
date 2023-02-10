import { useState } from 'react';
import W12MHeader from './W12MHeader';
import TwoPlusTwo from './TwoPlusTwo';
import SparingReasons from './SparingReasons';
import TextInput from './TextInput';
import { validateBeings, validatePlanet, validateSpecies } from '../validate';

const W12MForm : React.FC = () => {

	const [speciesName, setSpeciesName] = useState<string>('');
	const [planetName, setPlanetName] = useState<string>('');
	const [beingsNumber, setBeingsNumber] = useState<string>('');
	const [twoPlusTwo, setTwoPlusTwo] = useState<string>('4');
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
				<TextInput
					name='species'
					value={speciesName}
					label='Species Name: '
					handleChange={(event: any) => setSpeciesName(event.target.value)}
					performValidate={validateSpecies}
				/>
				<TextInput
					name='planet'
					value={planetName}
					label='Planet Name: '
					handleChange={(event: any) => setPlanetName(event.target.value)}
					performValidate={validatePlanet}
				/>
				<TextInput
					name='beings'
					value={beingsNumber}
					label='Number of Beings: '
					handleChange={(event: any) => setBeingsNumber(event.target.value)}
					performValidate={validateBeings}
				/>
				<TwoPlusTwo
					twoPlusTwo={twoPlusTwo}
					changeTwoPlusTwoValue={(event: any) => setTwoPlusTwo(event.target.value)}
				/>
				<SparingReasons
					spareReasons={sparingReasons}
					changeSpareReasons={(event: any) => setSparingReasons(event.target.value)}
				/>
				<button className="w12MForm__submit-button" type="submit" id="submit">Submit</button>
			</form>
		</section>
	);
};

export default W12MForm;
