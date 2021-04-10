import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import evcharger from '../images/EVcharger.jpeg'
import home from '../images/home.jpeg'
import industrial from '../images/industrial.jpeg'
import commercial from '../images/commercial.jpeg'
import emailjs from 'emailjs-com';

class Main extends React.Component {
  
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_aowwt6i', 'template_aet7kl2', e.target, 'user_a0rjfw8OMeVzDOA0zEqBY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Services</h2>
          <span className="image main">
            <img src={evcharger} alt="" />
          </span>
          <h2>Electrical Vehicle Charging</h2>
          <p>
          All Netz Electric employees are Tesla and Chargepoint certified installers. We can provide installation for condominium buildings, residential homes, and commercial parking lots.
          </p>
         <button> learn more</button>
          <span className="image main">
            <img src={home} alt="" />
          </span>
          <h2>Residential</h2>
          <p>Whether you're looking to add lighting, build your dream home, or start that next construction project Netz Electric is here to help!</p>
          <button> learn more</button>

          <span className="image main">
            <img src={industrial} alt="" />
          </span>
          <h2>Industrial</h2>
          <p>Adding a new piece of machinery? Need to change all of your current lighting to LED to save money on hydro cost? Do you have an old piece of machinery that just keeps giving you issues? Give us a call and we will be there for you!</p>
          <button> learn more</button>

          <span className="image main">
            <img src={commercial} alt="" />
          </span>
          <h2>Commercial</h2>
          <p>We provide a wide range of services ranging from restaurants to office spaces. We're here to help!</p>
          <button> learn more</button>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3 style={{textAlign:'center'}}>Reliable Electricians</h3>
          <p>
          Netz Electric specializes in residential, commercial and industrial services. Whether you need a small wiring fix or the installation of a state-of-the-art smart home, we can help. 
          </p>
          <h3 style={{textAlign:'center'}}>Flexible Services</h3>
          <p>
          We provide a thorough consultation to explain your available options. With that information, you can choose the scope of work that’s right for your home or business and for your budget. 
          </p>
          <h3 style={{textAlign:'center'}}>Satisfaction Guaranteed</h3>
          <p>
          We strive to save you both time and money by combining experience, high quality parts and equipment, and exceptional service. We will stick with the job until you are satisfied.          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>We stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just drop us a line. </p>
          <form onSubmit={sendEmail}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="user_email" id="email" />
            </div>
            <div className="field half first">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field half">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Get A Free Quote" className="special" onClick={() => {
          this.props.onCloseArticle()
        }} />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          
          <p><b>NETZ ELECTRIC</b><br></br><small>17 Mcmahon Drive, Toronto, Ontario M2K 0E4, Canada</small><br></br><small></small></p>
          <ul className="icons">
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=16479689674&text&app_absent=0"
                className="icon fa-whatsapp"
              >
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
      
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
