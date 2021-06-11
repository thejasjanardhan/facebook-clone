import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "16179746727-2h1t1gc1afsvvbhf0rpuomk1n2lf0bfn.apps.googleusercontent.com",
      clientSecret: "F8jws46P3En-hruNBUlOcyY4",
    }),
    // ...add more providers here
  ],
});
