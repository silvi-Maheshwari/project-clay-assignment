export const formSchema = {
  title: "User Information",
  fields: [
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Email", type: "email", name: "email", required: true },
    {
      label: "Education",
      type: "section",
      name: "education",
      fields: [
        { label: "Degree", type: "text", name: "degree", required: false },
        { label: "Institution", type: "text", name: "institution", required: false },
      ],
    },
  ],
};
