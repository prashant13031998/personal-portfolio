import "./about.css";
// import Award from "../../img/award.png";
import Programming from "../../img/programming.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Programming} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Front end developer based in Ghaziabad, Uttar Pradesh, India.
        </p>
        <p className="a-desc">
          I am an experienced front-end developer with over 1.5 years of
          professional experience. I am skilled in React, React Native, and
          JavaScript with modern cutting-edge development methodologies. I have
          profound knowledge of data structures and algorithms. I have good
          knowledge of MERN stack development. I am responsible for developing
          robust web and mobile applications using React.js in my previous
          organization. I am passionate about learning new technologies and
          creating beautiful interfaces.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
