import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "../shared";
import { Input, RangeSlider } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="can be collected" value="1" />
        <FilterCheckbox text="new products" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Pfrice from and to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="5000"
            min={30}
            max={5000}
            defaultValue={5000}
          />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingridients"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Chease souse",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salt cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Chease souse",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salt cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Chease souse",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salt cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Chease souse",
            value: "1",
          },
          {
            text: "Mocarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Salt cucumbers",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
