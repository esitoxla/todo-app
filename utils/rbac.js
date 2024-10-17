export const permissions = [
  {
    role: "user",
    actions: [
      "get_profile",
      "update_profile",
      "add_todo",
      "update_todo",
      "get_todo",
    ],
  },

  {
    role: "admin",
    actions: [
      "delete_todo",
      "get_todos",
      "get_profile",
      "update_profile",
      "add_todo",
      "update_todo",
      "get_todo",
    ],
  },
];