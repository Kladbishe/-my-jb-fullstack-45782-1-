import { useForm } from "react-hook-form";
import type Furniture from "../models/Furniture";
import { useState } from "react";
import "./AddFurniture.css"

export default function AddFurniture() {
  const { register, handleSubmit, reset ,formState} = useForm<Furniture>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (data: Furniture) => {
    try {
      setIsSubmitting(true)
      // TODO: здесь будет fetch/POST на бекенд
      console.log("submit:", data)
      reset()
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="AddFurniture">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="add name"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
            minLength: {
              value: 2,
              message: "name must be at least 2 characters long",
            },
          })}
        />
        <div className="formError">{formState.errors.name?.message}</div>
        <input
          placeholder="add dimensions"
          {...register("dimensions", {
            required: {
              value: true,
              message: "use format: 100 x 50 x 30",
            },
          })}
        />
        <div className="formError">{formState.errors.dimensions?.message}</div>
        <input
          placeholder="add color"
          {...register("color", {
            required: {
              value: true,
              message: "color is required",
            },
            minLength: {
              value: 2,
              message: "color must be at least 2 characters long",
            },
          })}
        />
        <div className="formError">{formState.errors.color?.message}</div>
        <input
          type="number"
          step="0.01"
          min={0}
          placeholder="add price"
          {...register("price", {
            required: {
              value: true,
              message: "price is required",
            },
            minLength: {
              value: 1,
              message: "price must be at least 1 characters long",
            },
          })}
        />
        <div className="formError">{formState.errors.price?.message}</div>
        <button type="submit" disabled={isSubmitting}>
          Add
        </button>
      </form>
    </div>
  );
}
