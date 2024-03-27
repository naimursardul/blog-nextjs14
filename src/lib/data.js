import { User } from "./models";
import { connectDB } from "./utils";

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("There is an error!");
  }
};

export const getUser = async (userId) => {
  try {
    connectDB();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("There is an error!");
  }
};

// GET ALL POSTS
// export const getPosts = async () => {
//   try {
//     connectDB();
//     const posts = await Post.find().sort({ createdAt: -1 });
//     return posts;
//   } catch (error) {
//     console.log(error);
//     throw new Error("There is an error!");
//   }
// };
export const getPosts = async () => {
  const res = await fetch(process.env.API + `/blog`, {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

// GET SINGLE POST
// export const getPost = async (slug) => {
//   try {
//     connectDB();
//     const post = await Post.findOne({ slug });
//     return post;
//   } catch (error) {
//     console.log(error);
//     throw new Error("There is an error!");
//   }
// };
export const getPost = async (slug) => {
  const res = await fetch(process.env.API + `/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};
