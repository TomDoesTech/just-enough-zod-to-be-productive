# Zod

## What is Zod?
* Parse data with a pre-defined schema
* TypeScript-first

## Validate vs Parse
* Validate: check if data is valid
* Parse: check if data is valid and return the parsed data

## TypeScript vs Zod
* TypeScript: Static type checking
* Zod: Parse at runtime

## Use cases
* Parse form data before sending to the server
* Parse data before sending back out to the client
* Parse data at the API boundary before sending to the database
* Parse data in functions around your application
* Parse data from an external data source


## Important parts
### Basics
* Defining a schema
* Parsing data with a schema
* Infer TypeScript types from a schema
* Custom error messages
* Different data types (object, array, string, number, boolean, etc.)

### Parsing
* parse
* safeParse
* strict
* passThrough

### Refine
* Validate one field against another
* parseAsync

### Enums
* Zod enums
* Native enums

## Benchmarks