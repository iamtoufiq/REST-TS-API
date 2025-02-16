import { deleteUser, getAllUsers, updateUser } from "controllers/users.js";
import express from "express";
import { isAuthenticated, isOwner } from "middleware/index.js";

export default (router : express.Router) => {
    router.get("/users",isAuthenticated, getAllUsers)
    router.delete("/users/:id",isAuthenticated, isOwner , deleteUser)
    router.patch("/users/:id", isAuthenticated , isOwner , updateUser)
}