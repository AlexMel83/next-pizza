import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
} from "@/components/shared";
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*filtration*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*list of goods*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name={"CheaseBurger Pizza"}
                price={500}
                imageUrl={
                  "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif"
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
