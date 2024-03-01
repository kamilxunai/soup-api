export interface Soup {
  name: string;
  origin: string;
  description: string;
  image: string;
  type: string;
}

const img_url = (name: string) => `http://localhost:3000/static/${name}`;

export const soups_data: Soup[] = [
  {
    name: "Tomato soup",
    origin: "",
    description:
      "soup with tomatoes as the primary ingredient. It can be served hot or cold, and may be made in a variety of ways. It may be smooth in texture, and there are also recipes that include chunks of tomato, cream, chicken or vegetable stock, vermicelli, chunks of other vegetables and meatballs. Many companies have their own versions of tomato soup which all vary in taste, portions and ingredients.",
    image: img_url("Pomidorowa.JPG"),
    type: "Smooth or chunky ",
  },
];
