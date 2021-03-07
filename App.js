import './App.css';
import Profile from './Profile/Profile';
import logo from './logo512.png'
const App = () => {
  const style = {color: 'white', textAlign : 'center', backgroundColor : 'black'}
  const alertMyInput = fullName => alert(fullName);
  return (
    <div style={style}>
      <Profile fullName='king' bio='lorem' profession='ninja' alertMyInput={alertMyInput}>{logo}</Profile>
    </div>
  );
 };

export default App;