import React, { SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  costValue: number;
  category: string;
};

export default function AddSpend() {
  const { register, setValue, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ costValue, category }) => {
    console.log(costValue, category);
  }); // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label>Cost 22</label>
      <input name="costValue" ref={register} />
      <label>Category</label>
      <input name="category" ref={register} />
      {/* <button
        type="button"
        onClick={() => {
          setValue('costValue', 342.12);
          setValue('category', true);
        }}
      >
        Add Spend
      </button> */}
      {/* <input type="submit" /> */}
      <button>Add Spend</button>
    </form>
  );
}
