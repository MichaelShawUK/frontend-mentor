interface Props {
  name: string;
  title: string;
  comment: string;
  avatar: string;
}

function Testimonial({ name, title, comment, avatar }: Props) {
  return (
    <div className="testimonial">
      <img src={avatar} className="avatar" />
      <p className="comment">{comment}</p>
      <h4 className="customer-name">{name}</h4>
      <p className="customer-title">{title}</p>
    </div>
  );
}

export default Testimonial;
