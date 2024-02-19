import React from "react";
import Toolbar from "../components/toolbar";
import AddCompanyButton from "../components/add-company-button";
import SearchInput from "../components/search-input";
import Header from "../components/header";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
    </main>
  );
}
