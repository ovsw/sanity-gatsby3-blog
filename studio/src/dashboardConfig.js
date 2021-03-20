export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6055bb23fb2bd896a32bc56b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-3-blog-studio",
                  apiId: "1ef81671-75fc-4243-b05d-ade271d40917",
                },
                {
                  buildHookId: "6055bb2396f8a498c4493204",
                  title: "Blog Website",
                  name: "sanity-gatsby-3-blog",
                  apiId: "2d612c12-eac9-4b60-972e-aa7ce2ceaeb1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ovsw/sanity-gatsby3-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-3-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
