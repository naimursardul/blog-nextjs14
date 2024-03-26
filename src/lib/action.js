"use server";

import { Post, User } from "./models";
import { connectDB, hash } from "./utils";
import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";

// SIGNIN WITH GITHUB
export const handleLogin = async () => {
  await signIn("github");
};

// LOGOUT
export const handleLogout = async () => {
  await signOut("github");
};

// REGISTER
export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "Password doesn't match!" };

  try {
    connectDB();

    const user = await User.findOne({ email });

    if (user) return { error: "User already exist!" };

    console.log({
      username,
      email,
      password: hash(password),
    });

    const newUser = await new User({
      username,
      email,
      password: hash(password),
      img,
      isAdmin,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Somethind went wrong!" };
  }
};

// LOGIN
export const login = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin"))
      return { error: "Invalid username or password" };
    throw error;
  }
};

// ADMIN ADD POST
export const addPost = async (prev, formData) => {
  const { title, slug, img, desc, userId } = Object.fromEntries(formData);
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  try {
    const newPsot = await Post.create({
      title,
      slug,
      img,
      desc,
      userId,
    });

    await newPsot.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Somethinng went wrong!" };
  }
};

// ADMIN DELETE POST
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully!");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// ADMIN ADD USER
export const addUser = async (prev, formData) => {
  const { username, email, isAdmin, img, password } =
    Object.fromEntries(formData);

  try {
    const newUser = await User.create({
      username,
      email,
      isAdmin,
      img,
      password: hash(password),
    });

    await newUser.save();
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// ADMIN DELETER USER
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);

  try {
    await User.findByIdAndDelete(id);
    await Post.deleteMany({ userId: id });
    console.log("User deleted successfully!");
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// GET POSTS PER PAGE
export const getPagePost = async (page, perPage) => {
  await connectDB();

  const posts = await Post.find({})
    .skip((page - 1) * perPage)
    .limit(perPage);

  const totalItems = await Post.countDocuments({});
  const res = { posts, totalItems };

  return res;
};

// GET USERS PER PAGE
export const getPageUsers = async (page, perPage) => {
  await connectDB();

  const users = await User.find({})
    .skip((page - 1) * perPage)
    .limit(perPage);

  const totalItems = await User.countDocuments({});
  const res = { users, totalItems };

  return res;
};
