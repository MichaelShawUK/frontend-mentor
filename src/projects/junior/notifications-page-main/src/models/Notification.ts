import User from "./User";

export class Notification extends Object {
  constructor(
    public user: User,
    public created_at: Date = new Date(),
    public unread: boolean = true
  ) {
    super();
  }
}

export class PostReaction extends Notification {
  public message = "reacted to your recent post";

  constructor(public user: User, public postTitle: string) {
    super(user);
  }
}

export class Follow extends Notification {
  public message = "followed you";

  constructor(public user: User) {
    super(user);
  }
}

export class JoinGroup extends Notification {
  public message = "has joined your group";

  constructor(public user: User, public group: string) {
    super(user);
  }
}

export class LeaveGroup extends Notification {
  public message = "left the group";

  constructor(public user: User, public group: string) {
    super(user);
  }
}

export class PrivateMessage extends Notification {
  public message = "sent you a private message";

  constructor(public user: User, public messageContent: string) {
    super(user);
  }
}

export class PictureComment extends Notification {
  public message = "commented on your picture";

  constructor(public user: User, public imagePath: string) {
    super(user);
  }
}

export type NotificationType =
  | PostReaction
  | Follow
  | JoinGroup
  | LeaveGroup
  | PrivateMessage
  | PictureComment;
