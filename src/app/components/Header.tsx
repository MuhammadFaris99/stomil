import services from "../../../__mocks__/services.json"
import products from "../../../__mocks__/products.json"
import navIcon1 from '../../../public/a.jpeg';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed w-full horizontal-nav">
        <div className="container">
          <div className="flex items-center justify-between">
            <a className="navbar-brand" href="index_1.html">
              <img src="" className="mr-2 w-[130px]" alt="logo" />
            </a>
            <button className="navbar-toggler hidden text-end mobile-menu-button">
              <span className="navbar-toggler-icon">
                <i className="ti-menu icon-align-right"></i>
              </span>
            </button>
            <div className="navbar-collapse flex-1 mobile-menu hidden min-[991px]:block" id="navbarNav">
              <ul className="navbar-nav justify-end horizontal-menu">
                <li className="scroll dropdown active group/menu">
                  <a href="/"><span>Home</span></a>
                </li>
                <li className="scroll dropdown group/menu">
                  <a href="/about-us"><span>About Us</span></a>
                </li>
                <li className="scroll dropdown group/menu">
                  <a href="javaScript:void();" className="dropdown-toggle"><span>Services</span></a>
                  <ul className="dropdown-menu hidden group-hover/menu:block">
                    {services.services.map((x, i) => (
                      <li key={i}><a href={x.href}>{x.title}</a></li>
                    ))}
                  </ul>
                </li>
                <li className="scroll dropdown group/menu">
                  <a href="/career"><span>Career</span></a>
                </li>
                <li className="scroll dropdown group/menu">
                  <a href="/contact-us"><span>Contact Us</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header