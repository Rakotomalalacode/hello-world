// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | null | number;
      googleId: string;
      role: string;
      imageLocal?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const userProfile: UserProfile = {
  googleId: profile.sub!,
  name: profile.name || '',
  email: profile.email || '',
  image: profile.picture || '',  // Cela peut être une chaîne ou une valeur par défaut ''
};