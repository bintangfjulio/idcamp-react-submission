const getActions = () => {
  return {
    search: true,
    insert: true,
    tableAction: [
      // {
      //   action: "archive",
      //   label: "Arsipkan",
      //   color: "warning",
      // },
      {
        action: "delete",
        label: "Hapus",
        color: "bg-error",
      },
    ],
  };
};

export { getActions };