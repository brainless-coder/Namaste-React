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
 * Tree Shaking: Removing unwanted code
 *
 * Transitive Dependencies
 */

- React is fast due to its fast DOM manupulation.

Transitive Dependency: ek npm package dusre packages ko use karta hai, aur fir wo sub-packages aur bhi dusre packages ko use kar sakte hai 
ye saari transitive dependencies ko npm take care karta hai 

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

- ReactDOM package is used for manupulating DOM. 

props => properties ya fir jo HTML me attributes hote hai, usse hi react me props kehte hai
<h1 id, class>  ye id, class ye sab jo hai, yhi pass hota hai props me 

Bundlers: webpack, vite, parcel
- webpack is used in create react app. It uses babel. 
- parcel bundles, minifes our files. It also clean our code like removing logs and all. 
- It manages the dev and prod build. 


prod pe kis package ka konsa exact version use ho rha hai, ye janana hai to package-lock.json dekho
usme exact version likha hota hai
package.json me ^ and ~ ke saath hota hai, jisme minor and patch upgrades aate rehte hai 
pacakge-lock exact versions ko lock karke rakhta hai 

HMR: Hot Module Reloading 
 - It uses file watcher algorithm written in C++.

dist folder ke andar apne project ke minified files hote hai, taaki server pe har chij jaldi load ho jaaye and fast execution ho 
apna project ka build store hota hai dist folder me 


Jab bhi kisi div/element me multiple childs hote hai, matlab wo koi array/list ho, tab haame key dena parta hai childrens ko
Unn childs ke props me ek unique key dena parta hai, taaki usse uniquely identify kar paaye
- Ye aise keys dene se rendering jaldi hota hai, agar kuch nya <li> daale hum top me, to key se wo sidha inject kar dega, nhi to usse poora wo div ko re-render karna parega
- Agar keys nhi hoga to usse sab re-render karna hoga, agar key hoga, to wo bas usko wha inject kar dega, aur baaki ke <li> ko usse re-render karne ki jaroorat nhi paregi 

- apna jo JSX hota hai, wo at the end JS me hi convert hota hai, aur ye kaam babel karta hai, taaki browser hamare JSX ko samajh paaye 
- JSX first sanitizes the code, after that only it executes it. So, if someone tries XSS attack, then also it is safe, because JSX will take care of it. 


Components:
- Name of component starts with a capital letter - It's not mandatory

Component Composition: Jab ek Functional component ke andar dusre functional component ko call karte hai <Title /> aise karke 
 

Virtual DOM: A light-weight representation of the DOM with us is known as the virtual DOM.
- We need virtual DOM for reconcelliation in React. 
- Agar different childrens hai tab react dekh leta hai khud hi, but agar same childrens hai, tab react ko pta nhi chalta kis child me change hua hai, aur wo poora component hi re-render karta hai 
- React uses diff algorithm for reconcelliation
- so agar hum unique keys ka use karte hai, tab react ko pta hota hai, khape change hua hai, aur wo bas ussi component ko re-render karta hai, har chij re-render nhi karta
- It is like a git diff, to apne DOM tree me bas whi chij ko re-render karega jo change hua hai bas
- If we use index as key, and add some element to start of the list, then React will have to re-render everything, as the keys are changed, and it will cause perfomance issues again. So, that's why using index as keys are considered as anti-pattern in React. 

React Reconcelleation Algorithm:
- React virtual DOM ka use karta hai UI ko update karne ke liye
- Iss se hum bina actual DOM ko manupilate kiye changes kar sakte hai
- 


?.  isko optional chaining kehte hai
user.address?.location  => agar address exist karta hai and saath me wo null/undefined nhi hai, tabhi wo uske aage ke properties check karega, nhi to aage nhi jaaye, aur address ka hi value return kar dega, joki undefined hai. 
So, haame error nhi milega ab, so kuch null bhi hua to haame undefiend return hoga

Nullish Coalescing
const data = obj?.prop ?? "fallback string";
- So agar isse wo value nhi mili, then undefined ki jagah wo fallback string return karega, hum whape kuch bhi ek default value daal sakte hai return karne ke liye, jo return ho jab saamne waala undefined ya null nikle.

Default import => import Header from 'Header';
Named Import => import { Header } from 'Header';
import * as obj from 'Header'; => ye bhi kar sakte hai, agar sab named import hai
baad me obj.title, obj.header aise use kar sakte hai  

- React me one way data binding hoti hai. 

- React keeps a track of all the state variables, so agar unme kuch bhi change hota hai, to wo component khud hi re render ho jaayega. reoncelliation algo dhyan rakhta hai ye sab ka
- Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM


Hamari body jo hai, wo har baar re-render hoti hai, so har chij ko whape nhi dalna hai
- wo smartly re-render karta hai, aur bas ussi component ko change karega jisme kuch diff hai 
 
- If any state or props changes, then our page renders again.
- agar useEffect me depndency array nhi denge, to wo har state change pe call hoga
- If the dependecy array is empty, then it will be called only one time. 
- Dependency array me agar kuch state variable hai, then bas ussi state change pe apna useEffect call hoga
- useEffect jo hai, wo hamare page render hone ke baad call hota hai

- Agar koi state variable change hota hai, to hamara page re-render hota hai, but VDOM smartly re-render karta hai chijo ko

- hooks jo hai apne, unhe functional components ke andar hi likhte hai hum
- JSX me bas hum expressions likh sakte hai, statements nhi likh sakte
let a = 10; // ye nhi chalega JSX me
((a = 10), console.log(a))   // aise karke hum isse expression bna denge, aur fir likh sakte hai
- At its core, an expression is a bit of JavaScript code that produces a value.
- eg: (1+3*6), 'hi', arr.pop()  // ye sab expression hai
- agar kuch console.log() ke andar chal paa rha hai, to wo expression hai, nhi to statement ya invalid JS


- kabhi bhi 1 component ke andar dusra component mat banana, nhi to wo compoennt har re-render pe create hota rhaega, and apna rendering slow ho jaayega
- so, jitne bhi components hai, wo haame hamesa upar me hi banane hai, and we can call that component inside other components.
- kabhi bhi state variables ko if-else ya for loop ke andar mat likho, kyunki wo inconsistency create karta hai, and react ko inconsistencies pasand nhi hai


Client side routing: matlab haame kuch load nhi karna hai server se, jab hum routing kar rhe hai
Server side routing: routing ke time page jo hai wo server se aayega, client se nhi


