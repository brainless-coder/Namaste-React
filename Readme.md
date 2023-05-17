Namaste React

Transitive Dependency: ek npm package dusre packages ko use karta hai, aur fir wo sub-packages aur bhi dusre packages ko use kar sakte hai 
ye saari transitive dependencies ko npm take care karta hai 

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

- ReactDOM package is used for manupulating DOM. 

props => properties ya fir jo HTML me attributes hote hai, usse hi react me props kehte hai
<h1 id, class>  ye id, class ye sab jo hai, yhi pass hota hai props me 

Bundlers: webpack, vite, parcel
- webpack is used in create react app. It uses babel. 
- parcel budles, minifes our files. It also clean our code like removing logs and all. 
- It manages the dev and prod build. 


prod pe kis package ka konsa exact version use ho rha hai, ye janana hai to package-lock.json dekho
usme exact version likha hota hai
package.json me ^ and ~ ke saath hota hai, jisme minor and patch upgrades aate rehte hai 
pacakge-lock exact versions ko lock karke rakhta hai 

HMR: Hot Module Reloading 
 - It uses file watcher algorithm written in C++.

dist folder ke andar apne project ke minified files hote hai, taaki server pe har chij jaldi load ho jaaye and fast execution ho 
apna project ka biuld store hota hai dist folder me 