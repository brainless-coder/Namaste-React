/*
 * Parcel: A bundler, it is a build tool, jo sab dekhta hai, server banana aur baaki sab
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

Bundlers: webpack, vite, parcel
  - A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
  - webpack is used in create react app. It uses babel. 
  - parcel bundles, minifes our files. It also clean our code like removing logs and all. 
  - It manages the dev and prod build. 

Transitive Dependency: ek npm package dusre packages ko use karta hai, aur fir wo sub-packages aur bhi dusre packages ko use kar sakte hai 
ye saari transitive dependencies ko npm take care karta hai 

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

- ReactDOM package is used for manupulating DOM. 

props => properties ya fir jo HTML me attributes hote hai, usse hi react me props kehte hai
<h1 id, class>  ye id, class ye sab jo hai, yhi pass hota hai props me 

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

- apna jo JSX hota hai, wo at the end JS me hi convert hota hai, aur ye kaam babel karta hai, taaki browser hamare JSX ko samajh paaye l
- JSX first sanitizes the code, after that only it executes it. So, if someone tries XSS attack, then also it is safe, because JSX will take care of it. 


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


Class Based Components:
- We cannot create a class based component without the render() method. 
- ye render method jo hai wo JSX return karta hai, so apan apna sab JSX render() ke andar hi likhte hai 

Do not mutate the state directly, warna apna UI sync me nhi rahega. setState() function jo hai wo react ko batata hai jo UI me ye change hua hai, aur apne page ko uss hisab se re-render karta hai 

- Babel jo hai, wo hamare JSX ko html me convert karta hai

- Never compare React lifecycle methods with functional componenets
- React Hooks and React Lifecycle Methods are not interchangeable and do not have the same relationship
- React lifecycle methods class based component me use hota hai
- ye functional react components me unhone react lifecycle methods ka concept hi hta diya


IIFE: Immediately invoke function expression.
(async mera_func() {
  // code
})();

Why can't we have the callback function of useEffect async?
- The first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function!
- so useEffect jo hai promise ko expect nhi kar rha hai, isliye wo error fek dega whape

Modularity: code ko divide karke smaller chukns me likhna, taaki apna code more readable and maintainable ho, aur baad me haame debugging ye sabme dikakt naa aaye. 

- Hooks are used to export some logic into that function. 
- hum apne custom hooks bnake usme sab logic daal sakte hai.

- Lazy loading jo hai, wo ek promise return karta hai
- so apan usme suspense ka use karte hai taaki wo promise resolve ho jaaye, nhi to wo promise resolve nhi hoga and haame error milega wo component load karne pe

- Never lazy load inside a component, nhi to wo har ek render cycle pe lazy load hoga, and hamare app ka perfomance utna nhi rahega

<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>
- Its an object inside style. So, its an object inside JSX.
- style jo hai wo JSX lega ek, bcoz we use JSX to write Javascript code inside react. 
- to yha, hum uss JSX me apna style ka object de sakte hai


# CSS in React/ Tailwaind CSS

- tailwind me agar fixed height, width deno ho to, square bracket notation hota hai apne pas
- w-[200px] to ab ye fixed issi width ka hoga
- tailwind bas unhi classes ko production pe ship karega, jo hamne apne project me use kiya hai, sab classes ko nhi bhejega wo apne build me
- iss se apna build size jyada baara nhi banta hai

- Tailwind ka jo config file hai, usme hum apne values daal sakte hai
- lets say haame ek nya class banana hai, to usme hum wo daal sakte hai, and then usse sab jagah use kar payenge
- tailwind init ke time --full waala flag daaloge, to uss file me sab chije aa jayegi, and there we can also change the values of the tailwind classes, or make our own classes
- but jo default classes hai, unki values chagne karna good practice nhi hai, isliye hamesa khali config bnao, and jo extra classes haame chahiye, usme wo add kardo bas, to hum apne nye extra classes ko directly use kar sakte hai
theme: {
    extend: {
      colors: {
        primay: "#eeeeee"
      }
    },
  },

- aise config me daal sakte hai hum


- React jo hai, wo virtual DOM ka use karta hai
- react, 2 virtual DOM maintain karta hai, ek nya aur ek purana
- then unn dono ko compare karta hai, aur jo bhi difference hota hai
- uss difference ko bas actual DOM me inject karta hai
- that's why react is fast. 

Props Drilling: jab prop ko ek component se dusre component me pass karte hai
- like apne body me user hai jo ki khud ek prop tha, wha se hamne usse child pe bhi pass kar diya
- to isse props drilling kehte hai 
- aise prop drilling se humlog, parent to child data pass kar sakte hai 

Lifting the state up: jab kisi child ke state ko parent se control karte hai, matlab hum uska state lift up kar rhe hai

- React dev tools me apne pas profiler hota hai, usse on karke fir hum jo chahe karo, uske baad stop karne ke baad hum har chij dekh sakte hai, like kis component ne load hone me kitna time lgaya ye sab, konsa component slow chal rha h, and apne app ko uss hisab se dekh ke optimise kar sakte hai

React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
- React context helps us avoid the problem of props drilling. jhape jyada props drilling ho rha hai, whape hum react context ka use karte hai
- context unhi ke liye use karo, jinhe tum jyada change nhi kar rhe ho, context is just like a global variable in our app. 
- suppose hamare pas koi aisa information jo hamme app me har jagah chahiye, to whape hum props drilling nhi kar sakte, we need to store that data in some central place. 
- We can use localstorage for that, but updating the localstorage is a costly operation, that's why we will no do that. 
- We will use react context for storing the data in the central place. Data should be placed on React context that does not need to be updated often.
- state, props ye sab jo hote hai, they are tied to a component, but jo apna context hai, wo kisi bhi component se tied nhi hota hai, wo saare components se independent hota hai, to usse app me khipe bhi use kar sakte hai.
- aisa data jo haame app me alag alag jagah use hoga, uske liye context ka use karte hai hum. 
- It stores data in a central place. 

- context ka haam naam de sakte hai, displayName se, to wo naam react developer tools me dikhega, to ab debugging me iska use kar sakte hai
- class based component me apne context ko directly humlog as a component use karte hai
- wha humlog ek JSX likhenge, joki ek value lega, aur uss se jo maan hai wo karega
- The provider component is responsible for creating the context and providing the data to the consumer components. The consumer component is responsible for accessing the data from the context.

=> Hamare application me 2 layers hota hai, UI layer and the data layer. 
- Jo haame dikhta hai, wo UI layer hota hai, all the re-renders ye sab UI layer handle karta hai
- UI layer: view, jo haame dikhta hai, jo hum JSX likhte hai 
- Data layer handles the data, data khase aa rha, kaise store ho rha h, iske liye react context, redux ye sabka use karte hai, passing the data from one component to another, props me jo data jaata hai, ye sab data layer me aata hai
- Data layer me apna data change ho sakta hai, and UI layer me wo jhape bhi ho, wha sab data shi se reflect hona chahiye, aur ye sab browser me hota hai

- Redux: We use redux to handle large amount of data. 
- Context ka use hamne prop drilling ko avoid karne ke liye kiya tha
- Context jo hai ek central global variable ki tarah hota h, koi bhi component hamare app ka, directly context ko use kar sakta hai, ya fir modify kar sakta hai

- Redux me apne pas ek store hota hai, ussi me sab data store hota hai
- Context me hum multiple contexts bnate the, alag alah chij ke liye, but redux me hamare pas ek hi store hota hai, and ussi store me sab data rakhte hai hum
slice: A small portion of our store. Hamare redux store me hum multiple slices raakh sakte hai, alag alag chij ka. 
- hamare components jo hai, wo directly store ko jaake modify nhi kar sakte 
- if we click on a component to modify the store, it dispatches an action, which calls a function, and then that function modifies the slice of the store. 
- The function which modfies the slice of the store, is know as Reducer function.
- if we want to use the redux store information in our page, we need to use selector. 
- Redux store calls the selctor, and then the selector updates the UI.

iska poora flow diagram ka screenshot hai, wo dekh lena.
- Selector is just a hook at the end of day, hook to bas ek function hota hai. 
- IF we want to read the data from the redux store, we use selector hook. 

- Jis component ko bhi data read karna hai, wo subscribe karta hai store ko using the selector. 
- So, the  component subscribes to the store using the selector for reading the data, and updating the UI. 

React-redux jo library hai, wo ek bridge hai between react and redux

- Reducers jo hai wo ek state leta hai, aur usse directly modify karta hai, reducers se kuch return karne ki jarurat nhi hai

- useSelector is used for subscribing to the store, so useSelector ke callback me hum jo daalenge usme subscribe karenge
  - const store = useSelector(store => store);
  - This is bad, because hum poore store ko subscribe kar rhe h, to agar store me kuch bhi change hoga, to ye poora page baar baar re-render hoga, joki bahut kharab hai 
  - Subscribe to the only specific part, jo tumhe uss page me chahiey 
  like store.cart.items;
  
