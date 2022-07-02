import EmployeeList from './components/EmployeeList';

const App = () => {
	const title = 'The fellowship of the tretton37';
	return (
		<div className="App max-w-7xl p-4 mx-auto">
			<h1 className="text-2xl font-bold">{title}</h1>
			<EmployeeList />
		</div>
	);
};

export default App;
