import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "806454835477-i7lgnosbej1qkc823v5m4elvcqlg4g8d.apps.googleusercontent.com",
      clientSecret: "tZxG-oPgBprLfB9Ek1YQ0RZC",
    }),
    // ...add more providers here
  ],
});
