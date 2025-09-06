import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.sermon.createMany({
    data: [
      { title: "The Word That Never Dies", slug: "the-word-that-never-dies", passage: "1 Peter 1:23-25", summary: "Living by the imperishable seed of God.", speaker: "Pastor J.", published: true },
      { title: "Overcoming the Old Man", slug: "overcoming-the-old-man", passage: "Ephesians 4:22-24", summary: "Lay aside the old man; put on the new.", published: true }
    ],
    skipDuplicates: true
  });
  await prisma.post.createMany({
    data: [
      { title: "Faith That Works", slug: "faith-that-works", content: "James and Paul together show a full picture of saving faith.", published: true },
      { title: "The Price of the Cup", slug: "the-price-of-the-cup", content: "A study on the precious blood of Christ.", published: true }
    ],
    skipDuplicates: true
  });
  await prisma.video.createMany({
    data: [{ title: "Conquer Sin: How to Break Free", slug: "conquer-sin", youtubeId: "5qap5aO4i9A", published: true }],
    skipDuplicates: true
  });
}
main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
