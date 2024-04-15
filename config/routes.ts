export default [
  {
    path: "/",
    component: "@/layouts/index",
    layout: false,
    routes: [
      {
        path: "/docs",
        component: "docs",
      },
      {
        path: "/home",
        component: "home",
      },
    ],
  },
];
