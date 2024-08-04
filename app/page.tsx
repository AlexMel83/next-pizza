import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductsGroupList,
} from "@/components/shared";
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*filtration*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*list of goods*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Pizzas"}
                items={[
                  {
                    id: 0,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 1,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 2,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 3,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 4,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 5,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                ]}
                categoryId={0}
              />
              <ProductsGroupList
                title={"Breakfast"}
                items={[
                  {
                    id: 6,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 7,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 8,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 9,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 10,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                  {
                    id: 11,
                    name: "CheaseBurger Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    price: 500,
                    items: [{ id: 0, price: 500 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
