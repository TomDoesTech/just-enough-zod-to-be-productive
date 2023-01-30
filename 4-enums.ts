import z from "zod";

const ut = ["admin", "user", "guest"] as const;

const userTypes = z.enum();

type UserTypes = z.infer<typeof userTypes>;

enum UserTypeNative {
  admin = "Admin",
  user = "User",
  guest = "Guest",
}

const userSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(UserTypeNative),
});

type User = z.infer<typeof userSchema>;

const user: User = {
  name: "John Doe",
  type: "Admin",
};

console.log(userSchema.parse(user));
