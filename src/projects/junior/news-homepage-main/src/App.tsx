import "./styles/css/index.css";
import logo from "./assets/images/logo.svg";
import web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import retroPCs from "./assets/images/image-retro-pcs.jpg";
import topLaptops from "./assets/images/image-top-laptops.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";

import useViewMode from "./hooks/useViewMode";

import Nav from "./components/Nav";
import SidebarPreview from "./components/SidebarPreview";
import ArticlePreview from "./components/ArticlePreview";

function NewsHomepage() {
  const viewMode = useViewMode();
  const articleImg = viewMode === "MOBILE" ? web3Mobile : web3Desktop;
  return (
    <div className="news-homepage">
      <header>
        <img src={logo} />
        <Nav />
      </header>
      <main>
        <article>
          <img src={articleImg} />
          <h1>The Bright Future of Web 3.0?</h1>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </article>
        <aside>
          <h2>New</h2>
          <SidebarPreview
            title="Hydrogen VS Electric Cars"
            summary="Will hydrogen-fueled cars ever catch up to EVs?"
          />
          <SidebarPreview
            title="The Downside of AI Artistry"
            summary="What are the possible adverse effect of on-demand AI image generation?"
          />
          <SidebarPreview
            title="Is VC Funding Drying Up?"
            summary="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </aside>
        <section className="popular-articles">
          <ArticlePreview
            image={retroPCs}
            rank="01"
            title="Reviving Retro PCs"
            summary="What happens when old PCs are given modern upgrades?"
          />
          <ArticlePreview
            image={topLaptops}
            rank="02"
            title="Top 10 Laptops of 2023"
            summary="Our best picks for various needs and budgets."
          />
          <ArticlePreview
            image={gamingGrowth}
            rank="03"
            title="The Growth of Gaming"
            summary="How the pandemic has sparked fresh opportunities."
          />
        </section>
      </main>
    </div>
  );
}

export default NewsHomepage;
