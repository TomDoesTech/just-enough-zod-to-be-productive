import z from "zod";
import y from "yup";
import j from "joi";
import { run, bench } from "mitata";

const payload = {
  name: "John Doe",
  age: 42,
  email: "test@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  cars: [
    {
      make: "Ford",
      model: "F150",
    },
    {
      make: "Chevy",
      model: "Silverado",
    },
  ],
};

const amount = 1_000;

const zodSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  cars: z.array(z.object({ make: z.string(), model: z.string() })),
});

function testZod() {
  for (let i = 0; i < amount; i++) {
    zodSchema.parse(payload);
  }
}

const yupSchema = y.object({
  name: y.string().required(),
  age: y.number().required(),
  email: y.string().email(),
  address: y.object({
    street: y.string(),
    city: y.string(),
    state: y.string(),
    zip: y.string(),
  }),
  cars: y.array().of(
    y.object({
      make: y.string(),
      model: y.string(),
    })
  ),
});

function testYup() {
  for (let i = 0; i < amount; i++) {
    yupSchema.validate(payload);
  }
}

const joiSchema = j.object({
  name: j.string().required(),
  age: j.number().required(),
  email: j.string().email(),
  address: j.object({
    street: j.string(),
    city: j.string(),
    state: j.string(),
    zip: j.string(),
  }),
  cars: j.array().items(
    j.object({
      make: j.string(),
      model: j.string(),
    })
  ),
});

function testJoi() {
  for (let i = 0; i < amount; i++) {
    joiSchema.validate(payload);
  }
}
bench(testYup);
bench(testJoi);
bench(testZod);

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
});
