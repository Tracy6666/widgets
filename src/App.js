import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from './components/Route'
import Header from "./components/Header";

const items = [
    {
        title: "what is React",
        content: "React is front end javascript framework ",
    },
    {
        title: "Why use React",
        content: "React is a favorite JS library",
    },
    {
        title: "How do we use React",
        content: "You use React by creating components",
    }
];

const options = [
    {
        label: "The color red",
        value: "red",
    },
    {
        label: "The color blue",
        value: "blue",
    },
    {
        label: "The color green",
        value: "green",
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown/>;
    }
};

const showSearch = () => {
    if (window.location.pathname === '/search') {
        return <Search/>
    }
};

const showTranslated = () => {
    if (window.location.pathname === '/translated') {
        return <Translate/>
    }
}
const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown label='Select a color' options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path = '/search'>
                <Search />
            </Route>
            <Route path = '/translated'>
                <Translate/>
            </Route>

        </div>
    );
};
export default App;
