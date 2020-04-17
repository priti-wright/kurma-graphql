const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    search(searchTerm: String!): [Recipe]
    recipe(id: String!): Recipe
  }
  type Recipe {
    id: ID!
    title: String!
    description: String!
    servings: Int
    ingredients: [String!]
    directions: [String]
  }
`;
const recipeTable = [
  {
    id: "khichari",
    title: "Khichari",
    description: "Khichari is a nutritious stew featuring dal and rice.",
    servings: 8,
    ingredients: [
      "1/3 cup split red lentils, or split moong",
      "1 cup basmati or other long-grain white rice",
      "3 tablespoons ghee or oil",
      "1/3 cup cooked unsalted cashews",
      "2 teaspoons cumin seeds",
      "1 tablespoon fresh hot green chili, minced",
      "2 tablespoons minced fresh ginger",
      "1 teaspoon turmeric",
      "1 teaspoon yellow asafetida powder",
      "3 cups mixed vegetables, cut into large chunks",
      "5 - 6 cups water",
      "1½ teaspoons salt",
      "1 tablespoon butter",
      "2/3 cup cooked green peas",
      "1 cup tomatoes, peeled and chopped"
    ],
    directions: [
      "Heat the ghee in a heavy 4-litre non-stick saucepan over moderate heat. Sprinkle the cumin seeds into the ghee. When they turn golden brown add the chilies and ginger. Saute them for a few seconds; then add the turmeric and asafetida. Add the vegetable pieces and fry them for a minute or two.",
      "Stir in the lentils and rice, stirring with the spices and vegetables for a minute",
      "Pour in the water and bring to a full boil over high heat. Reduce the heat to low, partially cover and slowly cook, stirring occasionally, for about 30 minutes or until the lentils and rice are soft. If the khichari dries out too much, add up to 1 cup warm water.",
      "Fold in the salt, butter, cooked green peas, chopped tomatoes, toasted cashews, and the chopped fresh coriander leaves, allowing them to warm for one minute. Serve hot."
    ]
  },
  {
    id: "shrikhand",
    title: "Shrikhand",
    description: "A Creamy, Saffron-infused Condensed Yogurt Dessert.",
    servings: 8,
    ingredients: [
      "1 kg whole-milk yogurt",
      "¼ teaspoon ground saffron threads",
      "¼ teaspoon ground cardamom",
      "1 tablespoon rosewater",
      "2 tablespoons blanched raw slivered pistachio nuts",
      "½ cup powdered sugar"
    ],
    directions: [
      "Drape a triple thickness of cheesecloth in a colander.",
      "Spoon in the yogurt, gather up the corners of the cloth, tie it into a bundle, and hang it, either in the refrigerator or in a cool spot for at least 12 to 16 hours. Catch the drips in a bowl. After the required hanging time, the residue of yogurt cheese should have reduced to half the original quantity.",
      "Combine the ground saffron threads with the rosewater for 5 or 10 minutes to allow the saffron to steep and release it’s flavour and colour.",
      "Transfer the cheese to a bowl, add the ground saffron and rosewater infusion, ground cardamom seeds, pistachio nuts and sugar. Beat until light and fluffy, and serve in small bowls.",
      "Alternatively, do not add the nuts to the mixture, pipe out the dessert from a piping bag with a fairly large nozzle, and sprinkle the pistachio nuts on top."
    ]
  }
];
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    search: (root, args, context) => {
      return recipeTable;
    },
    recipe: (root, args, context) => {
      if (args.id === "khichari") return recipeTable[0];
      if (args.id === "shrikhand") return recipeTable[1];
      return {};
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
