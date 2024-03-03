"use client";

import React from "react";

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
