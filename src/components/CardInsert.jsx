import React from "react";
import InputField from "./InputField";

class CardInsert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
  }

  render() {
    return (
      <div className="card w-full md:w-1/2 bg-white shadow-md mt-6">
        <div className="card-body">
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="card-title">{this.props.title}</div>
            <InputField
              label={"Title"}
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <div className="text-right text-sm text-gray-500">
              {this.state.title.length} / 50
            </div>

            <InputField
              label={"Body"}
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
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
