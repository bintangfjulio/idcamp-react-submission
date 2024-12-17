import React from "react";
import InputField from "./InputField";

class CardInsert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      path: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onPathChangeEventHandler = this.onPathChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onPathChangeEventHandler(event) {
    this.setState(() => {
      return {
        path: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
  }

  render() {
    return (
      <div className="card w-1/2 bg-white shadow-md mt-6">
        <div className="card-body">
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="card-title">{this.props.title}</div>
            <InputField
              label={"Course Name"}
              value={this.state.name}
              onChange={this.onNameChangeEventHandler}
            />
            <InputField
              label={"Course Path"}
              value={this.state.path}
              onChange={this.onPathChangeEventHandler}
            />

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="btn btn-sm bg-success text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CardInsert;
