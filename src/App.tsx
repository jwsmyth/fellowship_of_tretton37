import EmployeeList from './components/EmployeeList';
import Tools from './components/Tools';

const App = () => {
	const title = 'The fellowship of the tretton37';
	return (
		<div className="App max-w-7xl p-4">
			<h1 className="text-2xl font-bold">{title}</h1>
			<Tools />
			<EmployeeList />
		</div>
	);
};

export default App;
