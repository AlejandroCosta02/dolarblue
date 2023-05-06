// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// type Post = {
//   title: string;
//   image: string;
//   description: string;
//   body: string;
// };

// export async function GET(req: NextApiRequest, res: NextApiResponse<Post>) {
//   await prisma.post.createMany({
//     data: [
//       {
//         image:
//           "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//         title: "post 1",
//         description:
//           "like readable English. Many desktop publishing packages and web page editors now use Lorem",
//         body: "body of the post",
//         slug: "/post1",
//       },
//       {
//         image:
//           "https://images.unsplash.com/photo-1683267894199-4d45c90b6c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//         title: "post 1",
//         description:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
//         body: "body of the post",
//         slug: "/post2",
//       },
//     ],
//   });
//   res.status(200).json({
//     title: "title working",
//     image: "img",
//     description: "workin",
//     body: "body",
//   });
// }
