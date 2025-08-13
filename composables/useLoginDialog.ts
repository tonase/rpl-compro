const dialog = ref(false);

export const useLoginDialog = () => {
  const openDialog = () => {
    dialog.value = true;
  };

  const closeDialog = () => {
    dialog.value = false;
  };

  return {
    dialog,
    openDialog,
    closeDialog,
  };
};
