import editorDesktop from "../assets/images/illustration-editor-desktop.svg";
import phones from "../assets/images/illustration-phones.svg";
import laptopDesktop from "../assets/images/illustration-laptop-desktop.svg";

function Main() {
  return (
    <main>
      <h2 className="main-title">Designed for the future</h2>
      <div className="editor">
        <img src={editorDesktop} className="illustration" />
        <div className="text">
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themese
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customised
            categories, sections, format, or flow. With this funcionality,
            you're in full control.
          </p>
        </div>
      </div>
      <div className="infrastructure-wrapper">
        <div className="infrastructure">
          <img src={phones} />
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where you readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className="tools">
        <img src={laptopDesktop} />
        <h3>Free, open, simple</h3>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and relatively easy to learn.
        </p>
        <h3>Poweful tooling</h3>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and development a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </main>
  );
}

export default Main;
