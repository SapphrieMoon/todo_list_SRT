import { Request, Response } from "express";
import * as TodoService from "../services/todo.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAll = asyncHandler(async (_req: Request, res: Response) => {
    const todos = await TodoService.getAll();

    res.json(todos);
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
    const todo = await TodoService.getById(Number(req.params.id));

    res.json(todo);
});

export const create = asyncHandler(async (req: Request, res: Response) => {
    const todo = await TodoService.create(req.body.title);

    res.json(todo);
});

export const update = asyncHandler(async (req: Request, res: Response) => {
    const todo = await TodoService.update(Number(req.params.id), req.body.title, req.body.completed);

    res.json(todo);
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
    const todo = await TodoService.remove(Number(req.params.id));

    res.json(todo);
});