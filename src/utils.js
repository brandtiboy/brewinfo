import { v4 as uuidv4 } from "uuid";

function grindOptions() {
  return [
    {
      name: "Fine",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Medium",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Coarse",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default grindOptions;
