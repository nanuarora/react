import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
    <><div className="btn-group">
      <button classNameName="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        Default dropdown
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Menu item</a></li>
        <li><a className="dropdown-item" href="#">Menu item</a></li>
        <li><a className="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div><div className="btn-group">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
            Clickable outside
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div><div className="btn-group">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            Clickable inside
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div><div className="btn-group">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Manual close
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div>
        <><div class="card">
  <img src="..." class="card-img-top" alt="..."/>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7">this is me</span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div></></></>
  );
}

export default App;
