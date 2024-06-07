// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// const connectionString = `${process.env.DATABASE_URL}`

// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)
// const prisma = new PrismaClient({ adapter })

// export const getServerSideProps = async () => {
//   const feed = await prisma.interestedUser.deleteMany({});
//   return { props: { feed } }
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>ScoopDash</h1>
        <h2>Coming Soon!</h2>
        <h3>Interested Peeps: 0</h3>
      </div>
    </main>
  );
}
