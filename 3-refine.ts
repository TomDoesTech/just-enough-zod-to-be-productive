import z from "zod";

const schema = z
  .object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    password: z.string({}).min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string({}),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
    }
  );

type CreateUserInput = z.infer<typeof schema>;

function createUser(props: CreateUserInput) {
  const result = schema.parse(props);

  return result;
}

const payload: CreateUserInput = {
  name: "John Doe",
  password: "123456",
  confirmPassword: "123456",
};

const result = createUser(payload);

console.log(JSON.stringify(result, null, 2));
