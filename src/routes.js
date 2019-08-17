import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import One from './components/about/One'
import Two from './components/about/Two'
import Three from './components/about/Three'

//const routesConstructor = [
// (home), (about (one, two(un, deux), three)), (contact)
//]

const routes = [
    {
        path: "/",
        exact: true,
        label: 'Home',
        component: Home
    },
    {
        path: "/about",
        label: 'About',
        component: About,
        routes: [
            {
                path: "/about/one",
                label: 'One',
                component: One
            },
            {
                path: "/about/two",
                label: 'Two',
                component: Two,
                routes: [
                    {
                        path: "/about/two/un",
                        label: 'Un',
                        component: () => 'Un'
                    },
                    {
                        path: "/about/two/deux",
                        label: 'Deux',
                        component: () => 'Deux'
                    },
                ]
            },
            {
                path: "/about/three",
                label: 'Three',
                component: Three
            }
        ]
    },
    {
        path: "/contact",
        label: 'Contact',
        component: Contact
    },
    {
        component: NoMatch
    }
]



export default routes