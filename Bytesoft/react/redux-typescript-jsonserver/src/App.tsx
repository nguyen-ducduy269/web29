"use client";
import { useState } from "react";

// import components
import AddJob from "./components/AddJob.tsx";
import More from "./components/More.tsx";
import Table from "./components/Table.tsx";

// import css
import { Header, Container, LeftJob, AddButton, RightJob } from "./App.ts";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <>
      <Header>Quản lý công việc</Header>
      <Container>
        <LeftJob
          className={isDisplay ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {isDisplay ? (
            <AddJob selectedItem={selectedItem} setIsDisplay={setIsDisplay} />
          ) : (
            false
          )}
        </LeftJob>

        <RightJob
          className={
            isDisplay
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <AddButton
            onClick={() => {
              setIsDisplay(true);
              setSelectedItem(null);
            }}
          >
            Thêm công việc
          </AddButton>
          <More
            filterName={filterName}
            setFilterName={setFilterName}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />

          <Table
            setIsDisplay={setIsDisplay}
            setSelectedItem={setSelectedItem}
            filterName={filterName}
            setFilterName={setFilterName}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </RightJob>
      </Container>
    </>
  );
}

export default App;
