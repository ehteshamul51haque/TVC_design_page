import pic1 from "./assets/Images/pic1.jpeg";
import pic2 from "./assets/Images/pic2.jpeg";
import pic3 from "./assets/Images/pic3.jpg";
import prof from "./assets/Images/prof.jpeg";
import moreIcon from "./assets/Images/more.png";
import heart from "./assets/Images/heart.png";
import grofers from "./assets/Images/grofers.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home_left">
        <div className="cards_container">
          <div className="card">
            <div className="card_header">
              <img src={prof} alt="profile" className="profile-pic" />
              <div className="card_head_author">
                <h3>Naman Kumar</h3>
                <p>4 mins ago</p>
              </div>
              <img src={moreIcon} alt="more" className="more-icon"></img>
            </div>
            <img src={pic3} alt="pic1" className="card-img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="card_footer">
              <div className="card_foot_like">
                <img src={heart} alt="like" />
                <p>4500 likes</p>
              </div>

              <div className="card_foot_more">
                <p>Comment</p>
                <p>Share</p>
              </div>
            </div>
            <div className="card_tags">
              <p>#Technology</p>
              <p>#startup</p>
              <p>#creator</p>
            </div>
          </div>
          <div className="card">
            <div className="card_header">
              <img src={prof} alt="profile" className="profile-pic" />
              <div className="card_head_author">
                <h3>Naman Kumar</h3>
                <p>4 mins ago</p>
              </div>
              <img src={moreIcon} alt="more" className="more-icon"></img>
            </div>
            <img src={pic2} alt="pic1" className="card-img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="card_footer">
              <div className="card_foot_like">
                <img src={heart} alt="like" />
                <p>4500 likes</p>
              </div>

              <div className="card_foot_more">
                <p>Comment</p>
                <p>Share</p>
              </div>
            </div>
            <div className="card_tags">
              <p>#Technology</p>
              <p>#startup</p>
              <p>#creator</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_right">
        <div className="top-picks-section">
          <h3>Top Picks</h3>
          <div className="right-section-cards">
            <div className="right-card">
              <img src={grofers} alt="thumbnail" className="thumbnail" />
              <div className="right-card-texts">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="right-card">
              <img src={grofers} alt="thumbnail" className="thumbnail" />
              <div className="right-card-texts">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="you-may-like-section">
          <h3>You may Like</h3>
          <div className="right-section-cards">
            <div className="right-card">
              <img src={pic1} alt="thumbnail" className="thumbnail" />
              <div className="right-card-texts">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="right-card">
              <img src={pic2} alt="thumbnail" className="thumbnail" />
              <div className="right-card-texts">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
