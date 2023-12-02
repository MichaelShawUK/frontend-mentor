import avatar from "../assets/images/image-jeremy.png";

function ProfileCard() {
  return (
    <div className="profile">
      <div className="avatar">
        <img src={avatar} />
        <p>
          Report for <span className="report-name">Jeremey Robson</span>
        </p>
      </div>
      <ul>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
