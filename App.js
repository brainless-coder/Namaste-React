/*
 * Parcel: A bundler
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
	"h1", 
	{ id: "title1" }, 
	"Baara Heading"
);
const heading2 = React.createElement(
	"h2", 
	{ id: "title2" }, 
	"Chota Heading"
);

const container = React.createElement(
	"div",
	{ 
		id: "container",
		hello: "world"
	},
	[heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 