import prisma from "../src/database"

async function createOrUpdate() {
    return await prisma.customer.upsert({
        create: {
            firstName: "Geraldo Luiz",
            lastName: "Datena",
            document: "133.245.497-60"
        },
        update: {},
        where: {
            document: "133.245.497-60"
        }
    })
}

async function main() {
    return createOrUpdate();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})