import "./styles/css/index.css";
import { formatDistanceToNowStrict } from "date-fns";

function InteractiveComments() {
  const result = formatDistanceToNowStrict(new Date(2023, 1, 30), {
    addSuffix: true,
  });
  console.log(result);

  return <div className="interactive-comments">interactive comments</div>;
}

export default InteractiveComments;
