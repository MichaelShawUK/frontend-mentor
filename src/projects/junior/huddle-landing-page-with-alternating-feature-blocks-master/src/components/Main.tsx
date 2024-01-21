import growTogether from "../assets/images/illustration-grow-together.svg";
import flowingConversation from "../assets/images/illustration-flowing-conversation.svg";
import yourUsers from "../assets/images/illustration-your-users.svg";

function Main() {
  return (
    <div className="main-wrapper">
      <main>
        <section className="card">
          <img src={growTogether} />
          <div className="text-wrapper">
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={flowingConversation} />
          <div className="text-wrapper">
            <h2>Flowing Conversations</h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={yourUsers} />
          <div className="text-wrapper">
            <h2>Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
