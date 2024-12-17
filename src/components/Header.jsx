import React from "react";

function Header({ title, actions, onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-between my-6 items-center">
      <h1 className="font-bold text-2xl">{title}</h1>
      {actions.search && (
        <label className="input input-bordered flex items-center input-sm py-5">
          <input
            type="text"
            className="focus:outline-none focus:ring-0 grow border-none text-sm gap-2 w-full"
            placeholder="Cari"
            onChange={handleSearchChange}
          />
        </label>
      )}
    </div>
  );
}

export default Header;
