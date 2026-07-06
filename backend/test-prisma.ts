import 'dotenv/config';
import prisma from './src/configs/prisma.js';

async function main() {
  try {
    const res = await prisma.todo.create({
      data: {
        title: "Test with dotenv"
      }
    });
    console.log("Success:", res);
  } catch (err) {
    console.error("Failed:", err);
  }
}

main();
