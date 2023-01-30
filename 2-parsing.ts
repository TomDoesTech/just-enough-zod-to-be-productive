import z from "zod";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  age: z.number(),
  isAlive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
  }),
});

type CreateUserInput = z.infer<typeof schema>;

function createUser(props: CreateUserInput) {
  const result = schema.safeParse(props);

  return result;
}

const payload: CreateUserInput = {
  // name: "John Doe",
  age: 30,
  isAlive: true,
  hobbies: ["coding", "reading"],
  address: {
    street: "123 Main St",
  },
  // @ts-ignore
  isUnknown: true,
};

const result = createUser(payload);

console.log(JSON.stringify(result, null, 2));
