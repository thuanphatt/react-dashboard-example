import { useFormik } from "formik";
import "./App.css";

function App() {
	const formik = useFormik({
		initialValues: {
			email: "",
			username: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="email">Email Address</label>
			<input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
			<input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
			<button type="submit">Submit</button>
		</form>
	);
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
