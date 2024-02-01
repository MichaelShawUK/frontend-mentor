import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../data.json";
import { revertPath } from "../util/transformPath";
import { RootState } from "./store";
import { CommentType } from "../types/types";

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
  },
});

export default commentsSlice.reducer;
export const selectComments = (state: RootState) => state.comments.entities;
export const {
  addComment,
  incrementCommentScore,
  decrementCommentScore,
  removeComment,
} = commentsSlice.actions;
