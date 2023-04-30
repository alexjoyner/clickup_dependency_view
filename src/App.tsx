import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	const [API_KEY] = useState(localStorage.getItem('API_KEY'));
	const [TARGET_VIEW_ID] = useState(localStorage.getItem('VIEW_ID'));

	useEffect(() => {
		if (!API_KEY) {
			alert('Please set API_KEY in localStorage for this to work');
		}
		if (!TARGET_VIEW_ID) {
			alert('Please set TARGET_VIEW_ID in localStorage for this to work');
		}
	}, [API_KEY, TARGET_VIEW_ID])

	useEffect(() => {
		const fetchTasks = async () => {
			console.log('fetching tasks!');
			const query = new URLSearchParams({
				page: '0'
			}).toString();

			const viewId = API_KEY;
			const resp = await fetch(
				`https://api.clickup.com/api/v2/view/${viewId}/task?${query}`,
				{
					method: 'GET',
					headers: {
						Authorization: `${API_KEY}`
					}
				}
			);

			const data = await resp.text();
			console.log(data);
		}

		fetchTasks();
	}, [TARGET_VIEW_ID, API_KEY]);

	return (
		<>
			<h1>Clickup Dependency View</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 12)}>
					count is {count}
				</button>
			</div>
		</>
	)
}

export default App
