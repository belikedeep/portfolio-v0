---
layout: ../../layouts/BlogPostLayout.astro
title: "Understanding Multer"
description: "Building Neovim: A Comprehensive Guide."
date: "23 Aug, 2024"
---

When building web applications, handling file uploads is a common requirement. In Node.js, the `multer` middleware is a popular choice for handling file uploads in an Express.js application. In this blog, we’ll explore how to set up file uploads with `multer`, starting with a basic setup and then moving on to a more advanced configuration that includes custom storage options.

## 1. Basic File Upload with Multer

Let’s begin with the most straightforward way to handle file uploads using `multer`:

```javascript
import express from "express";
import multer from "multer";

const upload = multer(); // No storage configuration

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this setup:

- We initialize `multer` without any storage configuration by simply calling `multer()`.
- The `upload.single("file")` middleware handles single file uploads. The argument `"file"` is the name of the file input field in your HTML form.
- When a file is uploaded, it is processed and made available in `req.file`.

**Problem with the Basic Setup:**

While this setup is simple, it has a major limitation: files are stored in memory as buffers rather than being saved directly to disk. This can lead to significant memory usage, especially with large files or when handling multiple concurrent uploads. Additionally, you lose the flexibility of controlling where and how the files are stored.

### Testing the Basic Setup with Postman

To test the basic file upload setup using Postman:

1. **Method**: `POST`
2. **URL**: `http://localhost:3000/upload`
3. **Body**:
   - Select `form-data`
   - Add a key named `file` (this should match the name in `upload.single("file")`)
   - Set the type to `File` and select a file from your system

After sending the request, you should see the file information logged in your terminal, and the response should say "File uploaded successfully".

## 2. Custom Storage with Multer

To address the limitations of the basic setup, we can configure `multer` to store files on disk. This allows for more control over the file storage location and naming conventions.

Here’s how you can set up a custom storage engine:

```javascript
import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); //  dir to save the file
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Custom filename
  },
});

const upload = multer({ storage });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this enhanced setup:

- **Storage Configuration**: We configure `multer.diskStorage` to define where and how files are stored.
  - `destination` specifies the directory (`./uploads`) where files will be saved.
  - `filename` customizes the file name to include a timestamp, ensuring uniqueness.
- **Upload Middleware**: The `upload.single("file")` middleware is now using the custom storage configuration.

### Testing the Custom Storage Setup with Postman

To test the custom storage setup using Postman:

1. **Method**: `POST`
2. **URL**: `http://localhost:3000/upload`
3. **Body**:
   - Select `form-data`
   - Add a key named `file` (this should match the name in `upload.single("file")`)
   - Set the type to `File` and select a file from your system

After sending the request, the file will be saved in the `./uploads` directory with a timestamped name, and you should see the file information logged in your terminal.

## Conclusion

`multer` provides a flexible and powerful solution for handling file uploads in Express.js applications. Starting with a basic in-memory setup is easy, but for real-world applications, configuring custom storage is recommended to manage files efficiently and effectively.

This simple example sets the foundation for more advanced use cases, such as handling multiple file uploads, restricting file types, or integrating with cloud storage solutions. With `multer`, the possibilities are vast and adapting it to your specific needs is straightforward.

---

Happy coding!!
