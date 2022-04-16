# M-Woodworks Front End React App

A Vite based React.js front end built to consume a Rails API backend that stored project data, gallery information and image addresses. Images are hosted on Cloudinary for future scaling with a view to moving to consume images directly via Cloudinary SDK and Rails. Additional future features include secure user log-in via Rails JWT with a authenticated user accessible dashboard to add and remove new projects and project galleries.

## **Get set up**

---

## Add the following dependencies

**React-Router-Dom** - `npm i react-router-dom`

- A staple part of many react projects, we will need this to navigate between our routes and create links to our galleries and pages

**Axios** - `npm i axios`

- Axios is my preferred HTTP client library. A simple to use, promise based client that is easy to use in React -- especially when you jam one into a useEffect hook.

## Getting set up for styling with TailwindCSS and DaisyUI

**TailwindCSS** -- get full details [at the Tailwind website](https://tailwindcss.com/docs/guides/create-react-app) but the general steps are as follows:

1. In terminal, run `npm install -D tailwindcss postcss autoprefixer`
2. In terminal, run `npx tailwindcss init -p` to create the `tailwind.config.js` and `postcss.config.js` files.
3. Open the `tailwind.congif.js` file and change it to appear like this:

   ```
   module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
   }
   ```

4. Go to `src/index.css`, clear it out of all the garbage that's in there and replace it with this:

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

If your dev server was running, you'll probably have to stop and restart it to see any changes take effect.

**DaisyUI** -- Daisy UI is a coponent based plug-in that brings additional functionality to Tailwinds powerful CSS library - While I do like rolling my own CSS, using Tailwind and a library like DaisyUI is great to help get good looking site up and running quickly.

1. In terminal run `npm i daisyui`
2. In `tailwind.config.js` we need to add daisyui to the plugin section:
   ```
   module.exports = {
    //...
    plugins: [require("daisyui")],
   }
   ```

Have a look at the library of components [at the DaisyUI site](https://daisyui.com/docs/install/) to see what it can do.

## **Time to get building**

---

## Step 1 -- App.jsx clean-up and Home.jsx component build

---

1. Before we get to `App.jsx` and `Home.jsx` let's head into the `main.jsx` file to wrap our app in the Router so our Routes will work in any child component which is, well ... all other components. In `main.jsx` lets change things around to look like this:

   ```
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import { BrowserRouter as Router } from 'react-router-dom';

   ReactDOM.render(
     <React.StrictMode>
       <Router>
         <App />
       </Router>
     </React.StrictMode>,
     document.getElementById('root')
   );

   ```

   Ok, what did we do? First, we added the import `import { BrowserRouter as Router } from 'react-router-dom';` -- basically we said "hey, browser, I'm importing your cool tool called BrowserRouter into this app to help with routing and history (i.e. making our back / forward buttons work) but your name is long and dumb, so I'm just going to call you "Router" -- we bring this in from the package we installed - react-router-dom.
   Then, we need to wrap our whole app, represented here as `<App />` in the `<Router>`.

2. Create a folder in `/scr` called `pages` that will serve as our home for all our main pages -- I keep anything here that a user may be navigate to as a separate part of a page -- my structure follows what would be the `section` tag in symantic `html`.

3. Before we do anything in the `App.jsx` file, let build out a `Home.jsx` component that will render any time someone navigates to our homepage. Here is the `Home.jsx` file. Take a moment to study it to see what's going on:

```
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/main-logo-white.svg';

const Home = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            <img src={Logo} alt='' />
          </h1>
          <p className='mb-5 prose-slate'>
            We have proudly been crafting beautiful projects in and around the
            Winnipeg area for over 10 years. Come on in, get to know us, and
            make sure to check out the Gallery to see some of our latest
            projects.
          </p>
          <div className='flex justify-center space-x-11'>
            <Link to={'/gallery'}>
              <button className='btn btn-outline rounded-none'>Gallery</button>
            </Link>
            <Link to={'/about'}>
              <button className='btn btn-outline rounded-none'>About</button>
            </Link>
            <Link to={'/contact'}>
              <button className='btn btn-outline rounded-none'>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
```

Note a few things that are happening in this file. First, I've imported a `Logo` which is just a file that lives in the folder structure close to where it'll be used. This is a the only file I'll give a home in the folder structure. The rest will be brought in via calling to our API which points to the files home in the cloud.

Secondly you'll see a mix of classes for Tailwind and DaisyUI specific classes (for example `hero`) here.

You'll also notice that we've brought in `Link` from `react-router-dom` for our navigation items. Out links are as follows: `/gallery`, `/` (for home), `/about` and `/contact`. We won't build a separate navbar component for this app as the goal is very simple navigation with no more than a few links.

4. Finally, lets go clear out `App.jsx` to rid ourselves of that silly spining React logo. We will also bring in the `<Home />` component and get a taste of what our app will look like when people first load it up. Make your `App.jsx` look as follows:

```
import { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

```

Let's review what we've just done.

- Spinning up a React app with Vite populates a useState hook example. We will keep it there for now as we'll be using useState hooks in a bit.
- We need some Routes here so we say "Hey React, I have a Route to a path that should render a specific component -- actually I havea few. React says "ok, import `Routes` and `Route` and put each `Route` inside `<Routes>...</Routes>`
- Each Route is then given a path that will be appended to the url and a component to render.
- One of the routes is a catch-all for anything that is not specified specifically and is represented as `/*` -- This will be our 404 Error page for if no route exists. This will become clear in a bit.

## Step 2 -- Build out the Contact and About pages

1. In the `pages` folder, create 2 new files -- `About.jsx` and `ContactPage.jsx`. These are two pages with minimal dynamic content so we won't talk about them in depth. Copy and past or, if you want to practice your Tailwind classes and see how they change the layout, build out the pages line by line:

```
// ContactPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/m-logo-white.svg';

const ContactPage = () => {
  return (
    <div className='contact min-h-screen'>
      <div className='flex flex-col text-white h-screen align-middle'>
        <div className='flex flex-col h-full text-center justify-center items-center pt-4 align-middle'>
          <form
            className='form-box m-3 py-8 min-h-min w-96 text-center z-40'
            action='https://formspree.io/f/mpzoebjn'
            method='POST'
          >
            <h1 className='mb-6  px-8 m-auto'>
              <img className='h-10 w-10' src={Logo} alt='' />
            </h1>

            <div className='panel panel-right w-auto'>
              <div className='panel-content w-auto'>
                <div className='form flex flex-col align-middle max-w-fit mx-auto'>
                  <div className='relative mb-4'>
                    <input
                      className='text-lg p-1 outline-none border-b-2  text-white bg-transparent  '
                      type='text'
                      name='name'
                      placeholder='Full Name'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' relative mb-4'>
                    <input
                      className='text-lg p-1  outline-none border-b-2 text-white bg-transparent  '
                      type='text'
                      placeholder='Email'
                      name='_replyto'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' relative mb-4'>
                    <input
                      className='text-lg p-1  outline-none border-b-2 text-white bg-transparent  '
                      type='phone'
                      name='phone'
                      placeholder='Phone Number'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' flex flex-col mb-4 text-center w-full'>
                    <textarea
                      type='text'
                      name='message'
                      placeholder='Please click here to begin typing your message'
                      className='text-lg p-1  outline-none  text-white bg-zinc-900 bg-opacity-75'
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <div className='flex flex-col'>
                    <button
                      className='btn btn-outline my-4 rounded-none'
                      type='submit'
                      value='submit'
                      name='submit'
                    >
                      Send
                    </button>
                    <Link to={'/'}>
                      <button className='btn rounded-none btn-ghost btn-xs my-4'>
                        Go Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

```

Ok ... and here is the About page. I typically do the bulk of my styling after the structure of the app is copleted, so this will have to do for now. The links aren't yet working but the general layout is just fine.

```
// About.jsx

import React from 'react';
import Evan from './images/Evan.png';

const About = () => {
  return (
    <div className='flex-col h-screen'>
      <div className='pt-40 w-full h-full flex mt-auto flex-col sm:flex-row flex-grow overflow-hidden'>
        <div className='sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4'>
          <div className='sticky top-0 p-4 w-full text-center'>
            <div class='avatar mb-10'>
              <div class='w-60 rounded-full'>
                <img src={Evan} />
              </div>
            </div>
            <ul className='flex sm:flex-col overflow-hidden content-center text-left justify-between'>
              <li className='text-2xl'>Go Home</li>
              <li className='text-2xl'>Go To Gallery</li>
              <li className='text-2xl'>Check out our Sponsors</li>
              <li className='text-2xl'>Get Wood</li>
            </ul>
          </div>
        </div>

        <main
          role='main'
          className=' w-full h-full flex-grow p-10 mr-10 overflow-auto align-middle'
        >
          <h2 className='text-center mb-3 underline text-3xl'>
            Learn a bit about M Woodwoorks
          </h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          pariatur iste sunt facere voluptatum animi voluptatem quas soluta
          illum voluptates, corrupti deserunt! Inventore iste culpa ab
          voluptatum recusandae amet laborum autem laboriosam quasi esse
          molestias velit sapiente adipisci quos ea, nostrum dolores nobis
          quibusdam atque earum. Dolore suscipit inventore, neque cumque nam
          placeat maxime quaerat quisquam? Sint animi aliquam temporibus ipsam
          dolores! Nisi inventore in reiciendis ducimus est, aliquam earum
          praesentium similique eligendi natus eaque quae. Officiis modi, iste
          ab, reiciendis sed aspernatur, assumenda hic necessitatibus tempore
          harum nobis?
        </main>
      </div>
    </div>
  );
};

export default About;

```

Now to bring these components into our `App.jsx` and give them some Routes.

1. In `App.jsx` import the components. Add these and any other you might be missing. If we need it to render herem, it'll need to be imported.

- `import ContactPage from './pages/ContactPage'`
- `import About from './pages/About'`

2. Add the routes to the `return` -- the content we are returning should look as follows:

```
return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
```

Ok, now on to the fun bits, where we get to build our gallery index and play with dynamic routes and rendering a specific gallery when we click the link in the cover image for the gallery we want to view.

## Building the GalleryList and Gallery components with React Router v6

This is where things get wild and dynamic -- literally dynamic. Let start of with our first big move. Making our API call to our back-end using Axios. It's data-fetching time.

Here is the code for the `GalleryList.jsx` component. Copy and past or code it out to see what's happening. We will break it down after:

```
// src/pages/GalleryList.jsx


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GalleryList = () => {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/galleries')
      .then((resp) => resp.data)
      .then((galleryData) => {
        setGalleryList(galleryData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='h-screen flex flex-col'>
      <section className='flex flex-col mx-auto items-center  text-gray-700 justify-center h-full'>
        <h1 className='text-3xl text-center text-white mt-6'>
          Select A Gallery
        </h1>
        <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            {galleryList.map((item) => {
              console.log(item);

              const { id, title, cover_image_url } = item;
              return (
                <Link
                  to={`/gallery/${title}`}
                  key={id}
                  className='relative flex flex-wrap w-1/3'
                >
                  <div className='w-full p-1 md:p-2'>
                    <div className='absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-90 bg-opacity-90 duration-300 rounded-lg'>
                      <h1 className='tracking-wider' key={id}>
                        {title}
                      </h1>
                    </div>
                    <img
                      alt='gallery'
                      className='block object-cover object-center w-full h-full rounded-lg'
                      src={cover_image_url}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryList;

```

Ok, That was a lot. There are a few things we need to tackle here. We notice first that our imports include the `axios` library, the use of the `Link` element from React Router ( `react-router-dom`) and two hooks from React -- the `useState` and `useEffect` hooks. Let's dissect.

We will start with `Link` because our `axios` instance and the use of our react hooks are fairly intertwined. `Link` entails a slight shift in how we think about html within a React app using React Router and adds some functionality to what would otherwise be a simpl `<a>` or `<a href='...'>` tag. React will yell at you if you fail to use `<Link>` over `<a>`.

- Note that our `Link` element is wrapping our image within the gallery items so users can click on the entire image to navigate to the route for the chosen gallery.
- Dynamic Links -- Also not that `Link` is using the reference `to=` instead of `href`. Here, we've also created a dynamic route that references one of our galleries according to our chosen criteria. In this case `to={'/gallery/${title}'}` is saying to react router - "Hey, grab me the route for /gallery/"whatever the user just selected" -- it knows which one is selected because the title is associated with the specific object in our database that has a number of columns -- once of which is 'title'. We chould have jsut as easily chosen `id` here, though the user would only see a 1, 2, 3 etc in the url when navigating.
- `Axios` -- Of course, none of this works if we don't tell our application where the object or array of objects live and how to access each objects specific details. We've already built our back-end in Rails - now we need to grab the stored information. But first we should look how our data is handled by observing (and manipulating) 'state'.
- `useSate` -- If this is your first React Rodeo, state might be a new idea to you but never fear, once playing around with data and changing data from one thing to the next - you'll get it -- in fact, that's basically all there is to it.
  - `const [galleryList, setGalleryList] = useState([]);` -- this line here is basically saying "we have a galleryList that is currently an empty array `[]` when we start but we want to set it to be populated with our array of objects from the back-end using the `setGalleryList` method. Now we need to get that data with our axios call and the `useEffect` hook.
- `useEffect` -- useEffect is an interesting beast with many uses, but for our purposes, we should know that it can be used to mount and unmount a component on render. For us, this means that when a user navigates to our `galleryList` component, the specified code (or effect) is run before the rest of the component is rendered. We will fetch our data using this hook so every time this component mounts, our list of galleries is displayed.
- Finally, the other fun bit here, is how we iterate over each object in our dataset to render it to the page. For this we use the `map()` function in Javascript.

```
// ...
{galleryList.map((item) => {

  const { id, title, cover_image_url } = item;
  return ( ...
// ...
```

While we can now iterate over the whole object, we still want to parse out the details of each object in our array from the database / back-end -- this is the purpose of storing them in a variable via destructuring - `const { id, title, cover_image_url } = item;` Now when you need to render the gallery title, for example, in JSX we only need to write something like `<h2>The title of this gallery is {title}</h2>`.

#### TL;DR

Taking this all together, we are changing our components state, telling react that we want to change the state of the component from an empty array (which would return null) to populate with the data from our back end -- `useState`. We want this to happen at render each and every time the coponent mounts -- `useEffect`. But we need to use our fetch tool -- `axios` -- to grab the data at render time, so we cram the axios call into the useEffect hook.

Ok, that was a mouthful, but that's the crux of what makes this work and what will also make each individual gallery work as well, so better to take a bit of time here to make some sense of it all.

## Update our Routes in App.js

Before we move on to building out our dynamic `Gallery` component that will render each specific gallery, we need to set up the routes in `App.js`.

```
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import GalleryList from './pages/GalleryList';
import Gallery from './pages/Gallery';

function App() {


  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<GalleryList />} />
        <Route path='/gallery/:title' element={<Gallery />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
```

Note here that we have two routes with `/gallery` in the path; one to render the GalleryList component and the other to render each individual Gallery.

- `<Route path='/gallery' element={<GalleryList />} />`
- `<Route path='/gallery/:title' element={<Gallery />} />`

It's the individual Gallery route that interests us here. It's appended with `:title` which corresponds to the dynamic `Link` we encountered in the `GalleryList` component and ultimately with the correct Object and data from our back end.

This won't work yet, unless you've created the `Gallery` component. In your pages folder create a file called `Gallery.jsx` and give it just enough content to render something to the page:

```
import React from 'react';

const Gallery = () => {
  return <div>Gallery</div>;
};

export default Gallery;
```

Now, in the browser, when clicking on any of the individual galleries you will see the url change to append the title of the gallery and our gallery component changes. Nothing on the actual page is dynamic yet. Let's get our galleries populated with content.

## Building a dynamic component for our Galleries

Alrighty. We are well on our way to success and will now call on the magical powers of another React hook - `useParams`.

What's happening? Essentially, the object (`params`) in when we call the hook `const params = useParams()` contains some key-value pairs of the dynamic parents of the current url.

- First we initialize the useParams hook with the following - `const params = useParams()`
- Then, we need to store the params we want to use by storing them in a variable -- `const title = params.title`

notes for notes

- changed api call to App.js
- moved state there
- passed to Gallerylist via props
