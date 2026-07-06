import { Request, Response } from "express";
import * as TodoService from "../services/todo.service.js";

export async function getAll(_req: Request, res: Response) {
    const todos = await TodoService.getAll();

    res.json(todos);
}

export async function getById(req: Request, res: Response) {
    const todo = await TodoService.getById(Number(req.params.id));

    res.json(todo);
}

export async function create(req: Request, res: Response) {
    const todo = await TodoService.create(req.body.title);

    res.json(todo);
}

export async function update(req: Request, res: Response) {
    const todo = await TodoService.update(Number(req.params.id), req.body.title, req.body.completed);

    res.json(todo);
}

export async function remove(req: Request, res: Response) {
    const todo = await TodoService.remove(Number(req.params.id));

    res.json(todo);
}