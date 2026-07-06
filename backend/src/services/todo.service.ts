import * as ToDoRepo from "../repositories/todo.repo.js";

export async function getAll() {
    return await ToDoRepo.getAll()
}

export async function getById(id: number) {
    return await ToDoRepo.getById(id)
}

export async function create(title: string) {
    return await ToDoRepo.create(title)
}

export async function update(id: number, title: string, completed: boolean) {
    return await ToDoRepo.update(id, title, completed)
}

export async function remove(id: number) {
    return await ToDoRepo.remove(id)
}