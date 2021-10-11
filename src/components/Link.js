
const Link =({className, href,children}) =>{
    const onClick = (event) =>{
        //open to new window
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        //adds an entry to the browser's session history stack.
        window.history.pushState({},'',href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return <a className = {className} href = {href} onClick={onClick}>{children}</a>
};
export default Link;