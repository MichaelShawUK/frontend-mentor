import {
  PostReaction,
  Follow,
  JoinGroup,
  PrivateMessage,
  PictureComment,
  LeaveGroup,
} from "./Notification";

export default class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public avatar: string | null = null
  ) {}

  full_name() {
    return `${this.first_name} ${this.last_name}`;
  }

  reactToPost(postTitle: string) {
    return new PostReaction(this, postTitle);
  }

  follow() {
    return new Follow(this);
  }

  joinGroup(group: string) {
    return new JoinGroup(this, group);
  }

  leaveGroup(group: string) {
    return new LeaveGroup(this, group);
  }

  privateMessage(content: string) {
    return new PrivateMessage(this, content);
  }

  comment(picture: string) {
    return new PictureComment(this, picture);
  }
}
