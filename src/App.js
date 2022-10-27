import "./App.css";
import { useState , useEffect } from "react";

function Signup(props)
  {
  const signupform = props.header ? "signup" : "signup--footer"
  const signuptitle = props.header ? "Sign Up For The BETA!" : "Sign up for the BETA to see more"
  const signuptext = props.header ? ["would like a beta invite sent to" , "when it's ready!"] : ["" , ""]
  const signupinput = props.header ? "signup__input" : "signup__input signup__input--footer"
  const signupsubmit = props.header ? "signup__submit" : "signup__submit signup__submit--footer"
  return (
    <form className={signupform}>
      <h1 className="text--large text--bold text--color">{signuptitle}</h1>
      <div>
        <input className={signupinput + " text--small text--color"} type="text" placeholder="Business Name" required/>
        {signuptext[0]}
        <input className={signupinput + " text--small text--color"} type="email" placeholder="@email address" required/>
        {signuptext[1]}
      </div>
      <input className={signupsubmit + " text--medium text--bold"} type="submit" value="Notify me"/>
      <input className="singup__link text--medium" type="button" value="Signup as a freelancer partner"/>
    </form>
    )
  }

function Animated()
  {
  let [ currentname , setname ] = useState(0)
  let [ currentclass , setclass ] = useState("text--color text--animate")
  const servicenames = ["Logos" , "Blog Writing" , "Animated Videos" , "Product Demo" , "Copywriting" , "Social Media Ads"]
  useEffect(() =>
    {
    setTimeout(() =>
      {
      if(currentclass === "text--color text--animate")
        {
        setclass("text--color text--animate text--animate--flip")
        setTimeout(() =>
          {
          setclass("text--color text--animate")
          if(currentname < servicenames.length - 2)
            {
            setname(currentname + 1)
            }
          else
            {
            setname(0)
            }
          } , 500)
        }
      else
        {
        setclass("text--color text--animate")
        }
      } , 3000)
    })
  return <span className={currentclass}>{servicenames[currentname]}</span>
  }

function Header()
  {
  const headertitle = "Get Advanced AI + Expert Created"
  const headertext = ["Boost your sales" , "10x faster" , "with content customized by our unique partnership of" , "human creativity and AI optimization"];
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__left">
            <img className="header__logo" src="./images/logo.png" alt="logo"/>
            <div className="header__title text--huge text--bold">
              {headertitle}<br/><Animated/>
            </div>
            <div className="header__text text--medium">
              {headertext[0]} <span className="text--color text--bold">{headertext[1]}</span> {headertext[2]} <span className="text--color text--bold">{headertext[3]}</span>
            </div>
            <Signup header="true"/>
          </div>
          <div className="header__right">
            <img className="header__avatar" src="./images/avatar.png" alt="avatar"/>
          </div>
        </div>
      </div>
    </header>
    )
  }

function Features()
  {
  const featureslist = [
    {
    id: Math.random() * 1000,
    icon: "./icons/genius.svg",
    title: "Make AI-assisted Content Choices",
    text: "Access and order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best."
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/presentation.svg",
    title: "Upload and Maintain Your Brand Identity",
    text: "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/newspaper.svg",
    title: "Be Informed as We Create",
    text: "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates."
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/search.svg",
    title: "Receive and Review",
    text: "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements."
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/linegraph.svg",
    title: "Publish and Monitor Your Content's Progress",
    text: "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements."
    }]
  return featureslist.map((item) =>
    {
    return (
      <div key={item.id} className="content__features__item">
        <img className="content__features__image" src={item.icon} alt="feature"/>
        <div className="content__features__title text--medium text--bold">{item.title}</div>
        <div>{item.text}</div>
      </div>
      )
    })
  }

function Subcontent()
  {
  const contentlist  = [
    {
    id: Math.random() * 1000,
    tite: "Transform Your Creation Process",
    text: "With a new approach toordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand."
    },
    {
    id: Math.random() * 1000,
    tite: "Activate Your Business Growth With RetinkContent",
    text: "Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:"
    }]
  return contentlist.map((item) =>
    {
    return (
      <div key={item.id} className="content__subcontent">
        <div className="content__subcontent__title text--large text--color text--bold">{item.tite}</div>
        <div className="text--medium">{item.text}</div>
      </div>
      )
    })
  }

function Services()
  {
  const servicelist = [
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Logos",
      text: "Have a unique & creative logo designed to express and represent your brand identity."
      },
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Blog Writing",
      text: "Write SEO enriched blog posts as long or short articles on any topic of your choice.",
      },
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Animated Videos",
      text: "Bring animated characters to life to keep your viewers engaged and entertained."
      },
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Product Demo",
      text: "Introduce your product to potential customers in a clear and creative video."
      },
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Copywriting",
      text: "Have creative and compelling copies written to boost your product, brand, service or company."
      },
      {
      id: Math.random() * 1000,
      image: "./images/blank.jpg",
      title: "Social Media Ads",
      text: "Boost sales and awareness with tailor made ads from experts."
      }]
  return servicelist.map((item) =>
    {
    return (
      <div key={item.id}>
        <div className="content__services__image" style={{backgroundImage:'url(' + item.image + ')'}}></div>
        <div className="text--medium">{item.title}</div>
        <hr className="content__services__line"/>
        <div>{item.text}</div>
      </div>
      )
    })
  }

function Content()
  {
  return (
    <section className="content">
      <div className="container">
        <h2 className="content__title text--large text--bold text--color">Explainer Video</h2>
        <div className="content__video">
          <iframe className="content__frame" src="https://www.youtube.com/embed/u1wprFtkMLg" title="Explainer Video" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="content__features">
          <Features/>
        </div>
        <Subcontent/>
        <div className="content__services">
          <Services/>
        </div>
        <Signup/>
      </div>
    </section>
    )
  }

function Social()
  {
  const sociallist = [
    {
    id: Math.random() * 1000,
    icon: "./icons/facebook.svg",
    title: "facebook"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/twitter.svg",
    title: "twitter"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/instagram.svg",
    title: "instagram"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/linkedin.svg",
    title: "linkedin"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/youtube.svg",
    title: "youtube"
    },
    {
    id: Math.random() * 1000,
    icon: "./icons/pinterest.svg",
    title: "pinterest"
    }]
  return sociallist.map((item) =>
    {
    return <a key={item.id} className="footer__link footer__link--social" href="#0"><img src={item.icon} alt={item.title}/></a>
    })
  }

function Footer()
  {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <div>
            <img className="footer__logo" src="./images/logo.png" alt="logo"/>
            <p>Product by RetinkMedia UG<br/>Bonn - Germany</p>
          </div>
          <div>
            <div className="footer__title text--large text--bold">Useful links</div>
              <a className="footer__link text--medium" href="#0">Get early access</a>
              <a className="footer__link text--medium" href="#0">Provide feedback</a>
          </div>
          <div>
            <div className="footer__title text--large text--bold">Connect with us</div>
            <div className="footer__social"><Social/></div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
          <div className="container">
            <div className="footer__block footer__block--bar">
              <div>Copyright &copy; 2022 Retink</div>
              <div>
                <a className="footer__link footer__link--bar" href="#0">Privacy policy</a>
                <a className="footer__link footer__link--bar" href="#0">Terms of service</a>
                <a className="footer__link footer__link--bar" href="#0">Cookies policy</a>
              </div>
            </div>
          </div>
        </div>
    </footer>
    )
  }

function App()
  {
  return <div><Header/><Content/><Footer/></div>
  }

export default App;