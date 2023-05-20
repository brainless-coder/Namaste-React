import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX => React.createElement => Object => HTML(DOM)
// Element
const title = <h1 id='title' key="h1">Namaste React</h1>;

// Functional Component => Its just a function
const HeaderComponent = () => {
	return (
		<div>
			{title}
			<h2>This is a react functional Component</h2>
			<h2>This is h2 tag</h2>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); 