import './sass/style.scss'
import {Header, Banner, QuienSomos} from './Components';

export const LandingPage = () => {
  return (
	<div className="App">
		<Header/>
		<Banner/>
		<hr/>
		<QuienSomos/>
    </div>
  );
}
