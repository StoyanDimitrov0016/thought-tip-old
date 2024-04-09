export function errorParser(error) {
  if (Array.isArray(error)) {
    return error.map((err) => err.msg); // Express validator error
  } else if (error.name === "ValidationError") {
    return Object.values(error.errors)
      .map((err) => err.message)
      // Mongoose/MongoDB validation error
  } else {
    return error.message; // Custom error
  }
}
