function input(props) {
    return (
        /*<div className="container">
            <img src={props.imageUrl} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>*/
		
		<input type="{props.type}" value="{props.value}"/>
    );
}

ReactDOM.render(
    <div className="container">
        <input type="text"/>
        <input type="range"/>
        <input type="submit" value="Search"/>
    </div>,
document.getElementById('root'));