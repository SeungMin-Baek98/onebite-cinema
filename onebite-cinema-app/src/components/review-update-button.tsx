"use client";
import { useActionState } from "react";

export default function ReviewUpdateButton() {
  const [state, formAction, isPending] = useActionState();

  return (
    <form>
      <input name="reviewId" />
      <input name="content" />
      <input name="author" />
    </form>
  );
}
