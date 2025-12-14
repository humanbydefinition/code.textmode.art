# Testimonials Data Structure

This file contains testimonials from textmode.js users, collected from social media posts, blog articles, and other public sources. Each testimonial is stored as a JSON object with the following structure:

## Schema

```json
{
  "unique-id": {
    "quote": "The testimonial text",
    "author": "Author Name",
    "role": "Their Role/Title",
    "githubUsername": "github-username",
    "avatarUrl": "https://example.com/avatar.jpg",
    "link": "https://link-to-original-post.com",
    "source": "x",
    "featured": true
  }
}
```

## Field Descriptions

- **`unique-id`** (key): A unique identifier for the testimonial (e.g., `"jane-doe-x-2024"`)
- **`quote`**: The testimonial text (150-300 characters recommended)
- **`author`**: The person's name or handle
- **`role`**: Their role, title, or description (e.g., "Creative Developer", "Generative Artist")
- **`githubUsername`**: (Optional) GitHub username - avatar will be auto-fetched from GitHub
- **`avatarUrl`**: (Optional) Direct URL to avatar image - only needed if `githubUsername` is not provided
- **`link`**: (Optional) URL to the original post (tweet, blog article, etc.)
- **`source`**: (Optional) Platform where the testimonial was posted: `"x"`, `"bluesky"`, `"blog"`, `"devto"`, `"medium"`, `"youtube"`, etc.
- **`featured`**: Boolean - set to `true` to display in the testimonials slider

## Avatar Priority

1. If `githubUsername` is provided, the avatar will be automatically fetched from `https://github.com/{username}.png`
2. If `githubUsername` is `null`, the `avatarUrl` will be used
3. If both are `null`, a placeholder icon will be shown

## Adding a New Testimonial

When you find a testimonial on social media or a blog:

1. Choose a unique ID (e.g., `"jane-smith-x-dec2024"`)
2. Copy the quote text (clean it up if needed)
3. Add author name and their role/title
4. Provide either `githubUsername` OR `avatarUrl`
5. Link to the original post so users can see the full context
6. Set the `source` to the platform name
7. Set `featured: true` to display in the slider

## Example: Real Testimonial from X

```json
{
  "jane-smith-x-dec2024": {
    "quote": "Just discovered textmode.js and I'm blown away! Built this retro terminal effect in 10 minutes. The API is so intuitive!",
    "author": "Jane Smith",
    "role": "Creative Technologist",
    "githubUsername": "janesmith",
    "avatarUrl": null,
    "link": "https://x.com/janesmith/status/1234567890",
    "source": "x",
    "featured": true
  }
}
```

## Example: Blog Post Testimonial

```json
{
  "dev-blogger-devto-2024": {
    "quote": "textmode.js transformed how I approach generative art. The performance is incredible and it integrates seamlessly with Three.js.",
    "author": "DevBlogger",
    "role": "Technical Writer",
    "githubUsername": null,
    "avatarUrl": "https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/123/avatar.png",
    "link": "https://dev.to/devblogger/creating-retro-effects-with-textmodejs",
    "source": "devto",
    "featured": true
  }
}
```

## Finding Testimonials

Search for testimonials using:
- **X/Twitter**: `#textmodejs` or `textmode.js`
- **Bluesky**: `#textmodejs`
- **Dev.to/Medium/Hashnode**: Search for "textmode.js"
- **YouTube**: "textmode.js tutorial" or "textmode.js demo"

## Contributing

Found a great testimonial in the wild? Submit a PR adding it to this file, or let us know in the Discord!
