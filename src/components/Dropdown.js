import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick=(event) =>{
            //ref.current refers to  className="ui form", whenever user click inside the form.
            //If user click on the menu, the value of event.target is menu
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click",onBodyClick,{capture :true});

    return () =>{
        document.body.removeEventListener("click",onBodyClick,{capture:true,})
    };

    },[]);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref = {ref} className="ui form">
            <div className = "field">
                <label className="label">
                    {label}
                </label>
                <div
                    onClick = {() => setOpen(!open) }
                    className={`ui selection dropdown ${open? 'visible active':''} `}>
                    <i className= "dropdown icon"></i>
                    <div className= "text">{selected.label}</div>
                    <div className={`menu ${open? 'visible transition':''}`}>{renderedOptions}</div>
                </div>
            </div>
           <p style ={{color:selected.value}}>The text is {selected.value}</p>
        </div>
    );
}

export default Dropdown;