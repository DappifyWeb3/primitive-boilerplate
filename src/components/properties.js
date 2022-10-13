import script from "./script";

const properties = {
  isComponent: (el) => el.id === process.env.MODULE_ID,
  model: {
    defaults: {
      script,
      propertyOne: "default vaue",
      propertyTwo: "default value",
      traits: [
        {
          changeProp: 1,
          type: "text",
          name: "propertyOne",
        },
        {
          changeProp: 1,
          type: "text",
          name: "propertyTwo",
        },
      ],
      "script-props": ["propertyOne", "propertyTwo"],
    },
  },
};

export default properties;
