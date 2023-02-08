import "./App.css";
function App() {
  const nayok = ["Salman", "Sharukh", "Rafi", "chomok Hasan", "Baba", "Nije"];
  return (
    <div className= "App">
      {
        nayok.map(nayok => <Person name={nayok}></Person>)
      }
      <Person name= "Majhi" nayika ="Kopila"></Person>
      <Person name= "tomuk"></Person>
      <Friend location = "Dhaka" phone = "0155555555"></Friend>  
    </div>
  );
}

const Person = (props) => {
  const {name, nayika} = props;
  return (
    <div className="mainDiv">
      <div className="person">
        <h1>{name}</h1>
        <p>{nayika}</p>
      </div>
    </div>
  )
}

const Friend = (props) => {
  const {location, phone} = props;
  return (
    <div className="mainDiv">
      <h1>Nayok Bad a</h1>
      <div className="person">
        <h1>{location}</h1>
        <p>Phone: {phone}</p>
      </div>
    </div>
  )
}

export default App;
