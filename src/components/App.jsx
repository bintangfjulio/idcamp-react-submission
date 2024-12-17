import React from "react";
import Navbar from "./Navbar";
import DataTable from "./DataTable";
import Header from "./Header";
import { getDatas } from "../utils/datas";
import { getHeaders } from "../utils/headers";
import { getActions } from "../utils/actions";
import CardInsert from "./CardInsert";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    const datas = getDatas();

    this.state = {
      title: "Notes",
      datas: datas,
      originalDatas: datas,
      headers: getHeaders(),
      actions: getActions(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
  }

  onSearchHandler(text) {
    if (text.trim() === "") {
      this.setState({ datas: this.state.originalDatas });
    } else {
      const filteredDatas = this.state.originalDatas.filter(
        (data) =>
          data.title.toLowerCase().includes(text.toLowerCase()) ||
          data.body.toLowerCase().includes(text.toLowerCase())
      );
      this.setState({ datas: filteredDatas });
    }
  }

  onDeleteHandler(uuid) {
    const datas = this.state.originalDatas.filter((data) => data.uuid !== uuid);
    this.setState({ datas: datas, originalDatas: datas });
  }

  onAddHandler({ title, body }) {
    const newData = {
      uuid: uuidv4(),
      archived: false,
      title: title,
      body: body,
      createdAt: new Date().toLocaleDateString("en-GB"),
    };

    this.setState((prevState) => {
      const updatedDatas = [...prevState.originalDatas, newData];

      return {
        originalDatas: updatedDatas,
        datas: updatedDatas,
      };
    });
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="px-8 mb-8">
          <div className="flex justify-center">
            <CardInsert title={"Add Note"} onAdd={this.onAddHandler} />
          </div>
          <Header {...this.state} onSearch={this.onSearchHandler}></Header>
          <DataTable
            {...this.state}
            onDelete={this.onDeleteHandler}
          ></DataTable>
        </div>
      </>
    );
  }
}

export default App;
