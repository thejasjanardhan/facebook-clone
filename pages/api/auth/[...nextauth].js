import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "1020706268571-c7rssaeoftknt41tdmtdth0115372e28.apps.googleusercontent.com",
      clientSecret: "ZOzPWyYCse3Osz5fY_Sm52F3",
    }),
    // ...add more providers here
  ],
});
