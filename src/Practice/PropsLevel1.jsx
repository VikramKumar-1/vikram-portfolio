function User( props){
    return (
        <div>
           <h2>Child Componenet</h2>
           <button onClick={props.onIncrement}>
            Click to Increase Count
           </button>
        </div>
    )
}

export default User