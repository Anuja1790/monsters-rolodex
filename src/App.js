import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const[searchField, setSearchField] = useState('');
  const[monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilterMonster] = useState(monsters);
  console.log('render');


  useEffect(()=>{
    console.log("effect");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

useEffect(()=>{
  const newfilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
});
setFilterMonster(newfilteredMonsters);
console.log('effect is firing');
},[monsters,searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();  
    setSearchField(searchFieldString);
  } 
  
  return(
    <div>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" placeholder="Search monsters" onChangeHandler={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField:''
//     };
//   }
//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(
//         () => {
//         return {monsters:users};
      
//     }
//   )
// )
// }
// onSearchChange = (event)=> {
//   const searchField = event.target.value.toLowerCase();  
//   this.setState(()=>{
//     return{searchField};
// })  
// }

// render(){
//   console.log("render from AppJS");
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
      
       
//         {/*filteredMonsters.map((monster)=>{
//           return(<div key={monster.id}> 
//             <h1>
//               {monster.name}
//             </h1>
//           </div>
//         )})*/
        
//         }
//         <h1 className='app-title'>Monsters Rolodex</h1>
//        <SearchBox className="monsters-search-box" placeholder="Search monsters" onChangeHandler={onSearchChange}/>
//        <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
 


export default App;
