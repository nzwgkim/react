import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = ()=>{
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext); 

  console.log(user);
    // 코딩
}