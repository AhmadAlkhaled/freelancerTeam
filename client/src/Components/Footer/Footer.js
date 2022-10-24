import "./Footer.scss";
import Logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="boxes">
        <div className="box-1">
          <div className="logo-box">
            <a
              href="#logo"
              onClick={() => {
                if (window.location.href != "http://localhost:3000/") {
                  window.open("/", "_self");
                }
              }}
            >
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <p>
            We are a global team of experts that lives up to its value by
            setting the industries’ future benchmarks today.
          </p>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="box-2">
          <h3>Company</h3>
          <a href="/">Home</a>
          <br />
          <a href="/About">About</a>
          <br />
          <a href="/Contact">Contact</a>
        </div>
        <div className="box-3">
          <h3>Business</h3>
          {/* <a href="">Project</a> */}
          {/* <br /> */}
          <a
            href="#team"
            onClick={() => {
              if (window.location.href != "http://localhost:3000/About") {
                window.open("/About#team", "_self");
              }
            }}
          >
            Our Team
          </a>
          <br />
          <a
            className="costomer-link"
            onClick={() => {
              console.log(window.location.href);
              if (window.location.href != "http://localhost:3000/") {
                window.open("http://localhost:3000/#customers", "_self");
              } else {
                window.open("http://localhost:3000/#customer-1", "_self");
              }
            }}
          >
            Customers
          </a>
        </div>
        <div className="box-4">
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Get In Touch
          </h3>

          <p>
            <img
              className="footerIcons"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEXElEQVRogd2aT2hcVRTGf+fNmDTJRMU/aBG1QlHUNoxEJAab5qW6aetGQURLESpduBRBMLSxuKlgK1qKVEEFaRHFlmLNQotTQ6SmEjL5M2JoUayW1IK11iZhOpl7XJgIHevMuXdeXPRbznzfOec39+XOfW8CV4gkyWJ3DWpr4xzrgVghK7AMuHb+7XPAj8AoypfFq/hs8iH5M6neiYC0D+jSkrIVZSPQbIzNAPvKyquFWE7UO0NdIMv7tbGpmV6B54GWwDIlUXZOz9J3Yq0UQ2cJBmnP6Q0l4ROgK7RGhY6WlccKsZwOCQeBtOV0BUI/cGtIvopOoqwbi2XCN+gNsuKw3hSl+ZbkIRZ00s3xwMTD8qtPKPIxL8vpkijNARYPAuC2VJr9y/u10SfkBdIqvAQ86DVWgBQ6m5vp88mYL632AV1achwnfHfy1UVNcff4KvnBYjavSEnZyv8HAdAQlXnRajatyL05zaSEKSATPFaYpsvKzYVYLtQymlYkJTyKH0QReBNHB0UyFMng6FDYNf+eVS3piLUWY9pYMPZofqrsWFfokdGK14eAoWxO33XCIeAWSzHn6AE+quUzrYhC1uIDiv8B8Y/yseQjZT3GlZHI1tsEInCHxQfsqQaxoHwseRHeMVVUW2/rrnW1xSQRe431UGf2XmMxWUHUYpor852xHmWwnqecxWQFOWf0mZVpMv99mnpbQX63mNIp7jHWY3bW5hU4a/FZQY5bTM6xwVgPiXjaaJ20mKwgputZYHM2pzW3y2xOs6psttRUY2/b9ivkLT6g0QmHqsFkc5qd/0JsMPYeNvkspvsG9May4zT2Fbwowtvq2LuwO0XCykh4an4lTBDAXNMSrh/qkPO1jOZjfNsRHcH+DZ+UBse6ZZXFaD7GK3waPk+glINWq/0OUdkXNEy4NOX42Go2g4zH8j0wEjRSiISBkTXyk9Xudc8OxoNeAhJ4y8fvBVJWPgD+8JooQApT6Rb2+2S8QAqxXEB4z28sf4mwe/h+KflkfC8tcOzA73bVSwrnI8du35w3yFgsv6jyvm/OKlF25WPxPm37rwgQOV4BpkOyNXS23MjOkGAQyOgaOaWwIyRbTar0FTrFdGyvVBAIQKaB7cDPofnLaLKhlT2h4WCQo50yi7AlNF8pUV7w3akuydfVXTVqG+AYSntddeDwWLc8Uk+B4BUBQMRFjmeB4E8SmImE5+qag3pB+PsZFfBaaF5gS361mG6lq6luEICZGbYBhYDosTvP8EYSMyT2O3tbTjsQBoGUMVIUR/toj4R8AP9SIisCMBbLNyjbrX4RepOCgARBAK6DlxG+ruVT+Hy0i9eT7J0oyJFY5nA8CfxWxXamIeIZREyPQq1KFATmD5WOTVz+eXHZwYbhLplKum/iIADjPXIQYVvl6yr0TnTLF4vRM9H/DrpEqrLyKz4UeAJA4cD4ah5HxPRk31fWn978JaIup5tSEbejqFM2LhbEFaW/AChFTE+3QzmDAAAAAElFTkSuQmCC"
            />{" "}
            Berlin, Germany
          </p>

          <p>
            <img
              className="footerIcons"
              src="https://img.icons8.com/fluency/48/000000/circled-envelope.png"
            />
            info@freelancerteam.net
          </p>
          <p>
            <img
              className="footerIcons"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEAUlEQVRoge2ZXWwUVRiGn292xQYVgz/hhotq8JfutEnBkNja3RairBqJWo2KCbfUJsWEyIVGvVCiFwYNUdQ7L9BErDEq2BhlhvqDkhLsFCIQvTHRiNCKgRDLbvfzQjA72/2ZMz9bL/rczZn53rzvnjPnnDkL88yTCDLXBi5iO7pUhbUWrAFuVLgemBLlzfQVvHJwhRTq1c9tEFUr49IrwhBwdx0/+7mEdd7t8kctqbkJoiq2y8MIL/LvLx+EH0tFcodXy4lqN5sexHZ0FcJrwG2mtQLjf6fpPtYlZ6rcaw6tjrZcCc+rsBlIRZAauUq5181JsbzRimYvGB2urlwkjKuwhWghAO6aFF6ubEy8R2xXNwLbgEtjlFWUvJeTkYsN6RjFfXSO6cLzZ3kLWJ+AvGDxDJBskLYvdEnhLB9LiBc6MEpb+WXsQZY7uswS9gA3xK3tQzhafhnry2672p0SDpB0CPiLGYbKG2IL0uFoFtgDLI5LswaflYSM1yvflzfGMmtl9mlelGGgJQ69GpxWYctEj7xd7WbUOR17rz4gwi7inV79CMOlIvnDvTJa+5EItDt6jwrDwAKDst9RnkToB+5v8OwJlEEvJx80Eg0dxN6rfVh8islwEr5JpXjoUJf8Bv/tu7YBq6oY25VWBg7m5FQw6RC0O9qlwghwmUHZh+fO8ehPeZn2tapa9iiPowwCtwLHgWe9rHxi4sk4SMbRm0X4FoPZSZSdi2FD5UYvToyCdDp6TVHYr7DMoGyH18MgIiVDb0YEXkc6x3RhQdhtGGKrl5WBpEOAQZDCGd7AbO+01cvK0+aWwhFoaNmuDgCvG+ju8LIyEM5SOBoG6XB1ZQm+IviC957Xw/pmDKdy6u5+Wx1tKcE7BAyh8HnpWjY0OwQ0eEcWwQvALQG1xi5fwLojy+V8dFvm1BxaF1bdrwm2Hzs5k2bFkS75JT5rZlTvEVW5cGQTaFOpwqa5DAE1gmRGeQSTqVZ5MC5DYZk1tLKOpqeE48B1JkKWkvshJ25szgyZ1SNTyn0YhgBQ4dX+9zXy901YZg8tiyfCCCm0H1vCY5EdhcQXxHZ0KZCNoNfU1bwcXxAV1hLlq7HirKmZWBUXayLq/RyxPjT+HoGbooip8lw0O+GpDNIaQevdiZx8FNFPaHxBBCZD6pxKWWyKwU9oKntkeygVZeOhO+RkLI5C4gtytbId4UsjBWE4yLlT0viCuDkpqkW/wHjA+slSIdwCGjezVvaJbvlzukgfMNaoWIWhWv+yNpuqu9+jq2WSabICNWchFXZP9MjO5KyZUX8VV7XsfbwEbK549rTM0DbeJ78mac6E+sdBIiUvK0+h5IHvgGnggFjc+X8KMc88CfIPZx8f0MrTkI4AAAAASUVORK5CYII="
            />
            +49-176 666551881
          </p>
          <p>
            <img
              className="footerIcons"
              src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            />
            +49-176 666551881
          </p>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="box-5">
        <p>Copyright © 2022 FreeLancer Team</p>
        <p>Powered by | FreeLancer Team</p>
      </div>
    </footer>
  );
};

export default Footer;
