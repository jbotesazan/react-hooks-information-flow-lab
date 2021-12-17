


function Header({onDarkModeClick, handleIsDarkMode}) {



  return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {handleIsDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header> 
  )



}

export default Header;