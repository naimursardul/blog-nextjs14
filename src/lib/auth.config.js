export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      console.log(auth);
      const user = auth?.user;
      const isAdminPannel = request.nextUrl.pathname?.startsWith("/admin");
      const isBlogPage = request.nextUrl.pathname?.startsWith("/blog");
      const isLoginPage = request.nextUrl.pathname?.startsWith("/login");
      const isRegisterPage = request.nextUrl.pathname?.startsWith("/register");

      // ONLY AUTHANTICATED USER CAN REACH BLOG PAGE
      if (isBlogPage && !user) return false;

      // ONNY ADMIN CAN REACH ADMINPANNEL
      if (isAdminPannel && !auth?.user.isAdmin) return false;

      // UNAUTHANTICATED USER CAN REACH LOGIN PAGE
      if ((isLoginPage || isRegisterPage) && user)
        return Response.redirect(new URL("/", request.nextUrl));

      return true;
    },
  },
};
