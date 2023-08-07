import './App.css';

const Header = () => {
  return <div className='header'>
    <div className='logo'>
      <img src='https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg' alt='google logo' />
      </div> 
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
}
const AppLayout = () => {
  return (
    <div className='App'>
      <Header/>
    </div>
  )
}
export default AppLayout
