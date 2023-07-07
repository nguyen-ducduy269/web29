import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { AddJob } from "../sceens/AddJob";
import { More } from "../sceens/More";
import { Status } from "../sceens/Status";

export const Home = () => {
  const [array, setArray] = useState([]);
  const [display, setDisplay] = useState(false);
  const [updateJob, setUpdateJob] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Kích hoạt");
  const [search, setSearch] = useState("");

  const showDisplay = () => {
    setDisplay(true);
  };

  const closeDisplay = () => {
    setDisplay(false);
  };

  const handleOpen = () => {
    setDisplay(true);
    setUpdateJob(null);
    setName("");
    setStatus("Kích hoạt");
  };

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArray(data);
      });
  }, []);

  const onAdd = (aJob) => {
    const newJob = { ...aJob };
    setArray([...array, newJob]);
    axios
      .post("http://localhost:3000/data", {
        name: name,
        status: status,
      })
      .then((response) => console.log(response.data))
      .then((error) => console.log(error));
  };

  const onDelete = (id) => {
    setArray((prevArray) => prevArray.filter((newArray) => newArray.id !== id));
    axios
      .delete(`http://localhost:3000/data/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const editBtn = (e) => {
    showDisplay();
    let newEnterJob = {
      id: e.id,
      name: e.name,
      status: e.status,
    };
    setUpdateJob(newEnterJob);
    setName(e.name);
    setStatus(e.status);
  };

  return (
    <>
      <Header>Quản lý công việc</Header>
      <Container>
        <LeftJob>
          {display ? (
            <AddJob
              array={array}
              onAdd={onAdd}
              closeDisplay={closeDisplay}
              job={updateJob}
              setArray={setArray}
              setUpdateJob={setUpdateJob}
              name={name}
              setName={setName}
              status={status}
              setStatus={setStatus}
            />
          ) : (
            false
          )}
        </LeftJob>

        <RightJob>
          <AddButton onClick={handleOpen}>Thêm công việc</AddButton>
          <More
            setArray={(v) => {
              setArray(v);
            }}
            array={array}
          />

          <table>
            <thead>
              <tr>
                <td className="stt">STT</td>
                <td className="name">Tên</td>
                <td className="status">Trạng thái</td>
                <td className="activity">Hành động</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="stt"></td>
                <td className="name">
                  <input
                    className="add-input"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                </td>

                <Status setArray={setArray} />
                <td className="activity"></td>
              </tr>

              {array
                ?.filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item.name.toLocaleLowerCase().includes(search);
                })
                .map((e, i) => (
                  <tr key={i}>
                    <td className="stt">{i + 1}</td>
                    <td className="name">{e.name}</td>
                    <td className="status">
                      <p className="status-active">{e.status}</p>
                    </td>
                    <td className="activity button">
                      <button className="btn_edit" onClick={() => editBtn(e)}>
                        Sửa
                      </button>
                      <button
                        className="btn_remove"
                        onClick={() => onDelete(e.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </RightJob>
      </Container>
    </>
  );
};

const Header = styled.h1`
  width: 100%;
  font-size: 45px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;

  .add {
    height: 50px;
    line-height: 50px;
    background-color: bisque;
    padding-left: 10px;
  }

  .form {
    display: block;
    height: 190px;
    border: 1px solid bisque;
    padding: 10px 10px;
  }
  label {
    font-size: 20px;
    font-weight: 700;
  }
`;

const LeftJob = styled.div`
  width: 30%;
  position: relative;
  #name {
    width: 97%;
    height: 40px;
    border-radius: 8px;
    padding-left: 5px;
  }
  select {
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
  .button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .btn_add {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
  }
  .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }
`;

const AddButton = styled.button`
  position: relative;
  width: 150px;
  height: 30px;
  background-color: blue;
  color: white;
`;

const RightJob = styled.div`
  width: 60%;
  height: 276.6px;
  button {
    background-color: #0000ffc7;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: white;
    padding: 0 5px;
    margin-bottom: 0;
  }

  .reduce {
    margin-left: 20px;
  }
  .main-input {
    width: 300px;
    height: 30px;
  }

  table,
  tr,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  thead {
    font-weight: 700;
  }

  thead .stt {
    width: 50px;
  }

  thead .name {
    width: 300px;
  }

  thead .status {
    width: 150px;
  }

  thead .activity {
    width: 200px;
  }
  td {
    height: 50px;
    text-align: center;
  }

  .add-input {
    width: 90%;
    height: 70%;
  }

  tbody select {
    width: 90%;
    height: 70%;
  }

  tbody .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status-active {
    border: 1px solid;
    width: 70px;
    font-size: 12px;
    background-color: #4caf50;
    color: white;
  }

  tbody .button button {
    padding: 0px 5px;
    text-align: center;
  }

  tbody .button .btn_edit {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
    margin-right: 10px;
  }

  tbody .button .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }
`;
