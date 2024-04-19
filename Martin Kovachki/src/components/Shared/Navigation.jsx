import "./Navigation.css"
export default function Navigation() {
  return (
    <>
      <header>
        <div className="site-title">
        
          <a href="#">Portfolio</a>
        </div>
        <nav className="navigation">
          <ul>
            <li className="nav-item">
              <a to="/">Home</a>
            </li>

            <li className="nav-item">
              {" "}
              <a to="/post-app/create-app">Contacts</a>
            </li>
            
            <li className="nav-item">
              <a to="/user/profile">Projects</a>
            </li>

            

           
            <li className="nav-item">
              <a to="/about">About</a>
            </li>

            <li className="nav-item">
              <a to="/user/login">More Info</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
