import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../data.json";
import { revertPath } from "../util/transformPath";
import { RootState } from "./store";
import { CommentType, ReplyType, AddReplyPayload } from "../types/types";

interface CommentsState {
  entities: CommentType[];
  nextId: number;
}

const initialState: CommentsState = {
  entities: data.comments,
  nextId: 5,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action) {
      const comment: CommentType = {
        id: state.nextId,
        content: action.payload.content,
        createdAt: "just now",
        score: 1,
        user: {
          image: {
            png: revertPath(action.payload.avatar),
            webp: "",
          },
          username: action.payload.username,
        },
        replies: [],
      };

      state.entities.push(comment);
      state.nextId++;
    },
    addReply(state, action: PayloadAction<AddReplyPayload>) {
      const { parentId, replyingTo, content, username, avatar } =
        action.payload;

      let parent: CommentType | undefined;

      for (let i = 0; i < state.entities.length; i++) {
        const comment = state.entities[i];
        console.log("i: ", i);
        if (comment.id === parentId) {
          parent = comment;
          break;
        }
        for (let j = 0; j < comment.replies.length; j++) {
          const reply = comment.replies[j];
          if (reply.id === parentId) {
            parent = comment;
            break;
          }
        }
      }

      const reply: ReplyType = {
        id: state.nextId,
        createdAt: "just now",
        replyingTo,
        score: 1,
        user: {
          username,
          image: {
            png: revertPath(avatar),
            webp: "",
          },
        },
        content,
      };

      if (parent) {
        parent.replies.push(reply);
        state.nextId++;
      }
    },
    incrementCommentScore(state, action: PayloadAction<number>) {
      state.entities.forEach((comment) => {
        if (comment.id === action.payload) comment.score++;
        else {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload) reply.score++;
          });
        }
      });
    },
    decrementCommentScore(state, action: PayloadAction<number>) {
      state.entities.forEach((comment) => {
        if (comment.id === action.payload) comment.score--;
        else {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload) reply.score--;
          });
        }
      });
    },
    removeComment(state, action: PayloadAction<number | null>) {
      const newComments: CommentType[] = [];

      state.entities.forEach((comment) => {
        const replies = comment.replies.filter(
          (reply) => reply.id !== action.payload
        );

        comment = { ...comment, replies };

        if (comment.id !== action.payload) newComments.push(comment);
      });

      state.entities = newComments;
    },
    editComment(state, action: PayloadAction<{ id: number; content: string }>) {
      if (action.payload.content.trim().length === 0) return;

      state.entities.forEach((comment) => {
        if (comment.id === action.payload.id) {
          comment.content = action.payload.content;
          return;
        }
        comment.replies.forEach((reply) => {
          if (reply.id === action.payload.id) {
            reply.content = action.payload.content;
            return;
          }
        });
      });
    },
  },
});

export default commentsSlice.reducer;
export const selectComments = (state: RootState) => state.comments.entities;
export const {
  addComment,
  incrementCommentScore,
  decrementCommentScore,
  removeComment,
  editComment,
  addReply,
} = commentsSlice.actions;
