import "./App.css";
import _ from "lodash";

function App() {
	const a = [1, 2];

	console.log(_.concat(a, [2, 3, 4]));
	return <div className="app">hello</div>;
}

export default App;

/*
false
null
undefined
""
``
NaN
0
*/
