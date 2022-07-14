import Singlecmd from './comments/Singlecmd';
import UserCard from './comments/UserCard';
import Bird from './images/bird.jpeg';
import Nature from'./images/nature.jpg';
const App =()=> {
  return (
    
    <div className="ui comments" style={{alignItems:'center'}}>
      <UserCard>
      <Singlecmd name="Tamil" time="3pm" profile={Bird} command="Good"/>
      </UserCard >

      <UserCard>
      <Singlecmd name="Ajith" time="3.40pm" profile={Nature} command="Super"/>
      </UserCard>

      <UserCard >
      <Singlecmd name="Ram" time="5pm" profile={Bird} command="Congrats"/>
      </UserCard >
      
    </div>
  
    
  );
}

export default App;
