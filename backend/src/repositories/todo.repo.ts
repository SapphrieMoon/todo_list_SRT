import prisma from "../configs/prisma.js";

export async function getAll() {
    return prisma.todo.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
}

export async function getById(id: number) {
    return prisma.todo.findUnique({
        where: {
            id,
        },
    });
}

export async function create(title: string) {
    return prisma.todo.create({
        data: {
            title,
        },
    });
}

export async function update(id: number, title: string, completed: boolean) {
    return prisma.todo.update({
        where: {
            id,
        },
        data: {
            title,
            completed,
        },
    });
}

export async function remove(id: number) {
    return prisma.todo.delete({
        where: {
            id,
        },
    });
}