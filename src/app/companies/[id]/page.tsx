import React from "react";

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <h1>Company ({params.id})</h1>
    </main>
  );
}
