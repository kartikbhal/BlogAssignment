import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Coading
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Hi My Name is Kartik Bhal
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      I hold a Postgraduate Diploma in Advanced Computing , specializing in HTML, Java, JavaScript, Spring Boot, and CSS. With a strong foundation and practical experience, I am eager to contribute to innovative projects. I am enthusiastic about the opportunity to apply my expertise in a dynamic work environment
      </p>
    </div>
  );
}