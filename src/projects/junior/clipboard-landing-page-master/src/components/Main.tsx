import Introduction from "./Introduction";
import Clients from "./Clients";
import CallToAction from "./CallToAction";

import computer from "../assets/images/image-computer.png";
import devices from "../assets/images/image-devices.png";
import blacklist from "../assets/images/icon-blacklist.svg";
import text from "../assets/images/icon-text.svg";
import preview from "../assets/images/icon-preview.svg";

function Main() {
  return (
    <main>
      <Introduction />
      <section className="snippets">
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <img src={computer} className="image" />
        <ul>
          <li>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </li>
          <li>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </li>
          <li>
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </li>
        </ul>
      </section>
      <section className="access">
        <h2>Access Clipboard Anywhere</h2>
        <p>
          Whether you're on the goo, or at your computer, you can access all
          your Clipboard snippets in a few simple clicks.
        </p>
        <img src={devices} className="image" />
      </section>
      <section className="workflow">
        <h2>Supercharge your workflow</h2>
        <p>We've got the tools to boost your productivity.</p>
        <ul>
          <li>
            <img src={blacklist} className="icon" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </li>
          <li>
            <img src={text} className="icon" />
            <h3>Plain text snippets</h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </li>
          <li>
            <img src={preview} className="icon" />
            <h3>Sneak preview</h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </li>
        </ul>
      </section>
      <Clients />
      <CallToAction />
    </main>
  );
}

export default Main;
