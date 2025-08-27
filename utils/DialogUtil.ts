import Swal from "sweetalert2";
import { type SweetAlertOptions } from "sweetalert2";

type DialogOptions = SweetAlertOptions & {
  onYes?: Function;
  onNo?: Function;
  onCancel?: Function;
  onClose?: Function;
  onClickOutside?: Function;
  confirmCustomClass?: string;
};

const toast = (options: SweetAlertOptions | string) => {
  const defaultOptions: SweetAlertOptions = {
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: "info",
    didOpen: (popup: HTMLElement) => {
      popup.addEventListener("mouseenter", Swal.stopTimer);
      popup.addEventListener("mouseleave", Swal.resumeTimer);
    },
  };
  if (typeof options === "string") {
    options = {
      text: options,
    };
  }
  const Toast = Swal.mixin(Object.assign(defaultOptions, options));
  Toast.fire();
};

const toastSuccess = (message: string) => {
  toast({
    icon: "success",
    title: "Success",
    text: message,
  });
};

const toastWarning = (message: string) => {
  toast({
    icon: "warning",
    title: "Perhatian",
    text: message,
  });
};

const toastResponse = (success: boolean, message: string) => {
  toast({
    title: success ? "Success" : "Error",
    icon: success ? "success" : "error",
    text: message,
  });
};

const showMessage = (options: DialogOptions | string) => {
  if (typeof options === "string") {
    options = {
      text: options,
    };
  }
  options.icon = options.icon || "info";
  options.confirmButtonText = "OK";
  options.showCancelButton = false;
  options.title = options.title || "Message";
  confirm(options);
};

const showResponseMessage = (success: boolean, message: string) => {
  showMessage({
    text: message,
    title: "Message",
    icon: success ? "success" : "error",
  });
};

const showSuccessMessage = (text: string) => {
  showMessage({
    text,
    title: "Success",
    icon: "success",
    confirmCustomClass: "success",
  });
};

const showWarningMessage = (text: string) => {
  showMessage({
    text,
    title: "Warning",
    icon: "warning",
    confirmCustomClass: "warning",
  });
};

const showErrorMessage = (text: string) => {
  showMessage({
    text,
    title: "Error",
    icon: "error",
    confirmCustomClass: "error",
  });
};

const toastError = (message: string, options?: SweetAlertOptions) => {
  toast({
    icon: "error",
    text: message || "Something went wrong!",
    title: "Error",
    ...options,
  });
};

const confirm = async (options: DialogOptions = {}) => {
  const defaultOptions: DialogOptions = {
    title: "Confirmation",
    text: "Are you sure?",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    customClass: {
      confirmButton:
        "sbtn sbtn-info" +
        (options.confirmCustomClass ? " " + options.confirmCustomClass : ""),
      cancelButton: "sbtn sbtn-cancel-info",
    },
    buttonsStyling: false,
    icon: "question",
    backdrop: true,
    didOpen: (popup: HTMLElement) => {
      // disable page scrolling
      const vApplications = document.querySelectorAll(".v-application");
      if (vApplications.length > 0) {
        vApplications[0].setAttribute("style", "overflow: hidden");
        vApplications[0].setAttribute("style", "height: 100vh");
      }
    },
    didClose: () => {
      // reenable page scrolling
      const vApplications = document.querySelectorAll(".v-application");
      if (vApplications.length > 0) {
        vApplications[0].setAttribute("style", "overflow: auto");
        vApplications[0].setAttribute("style", "height: 100%");
      }
    },
  };
  const result = await Swal.fire(Object.assign(defaultOptions, options));
  if (result.value) {
    if (typeof options.onYes === "function") {
      options.onYes();
    }
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    if (typeof options.onCancel === "function") {
      options.onCancel();
    }
  } else if (result.dismiss === Swal.DismissReason.close) {
    if (typeof options.onClose === "function") {
      options.onClose();
    }
  } else if (result.dismiss === Swal.DismissReason.backdrop) {
    if (typeof options.onClickOutside === "function") {
      options.onClickOutside();
    }
  }
};

const saveConfirm = (options: DialogOptions) => {
  confirm({
    icon: "question",
    title: options.title || "Save",
    text: options.text || "Are you sure want to save?",
    confirmButtonText: options.confirmButtonText || "Yes, Save",
    onYes: options.onYes,
  });
};

const deleteConfirm = (options: DialogOptions) => {
  confirm({
    icon: "error",
    title: options.title || "Delete",
    text: options.text || "Are you sure want to delete?",
    confirmButtonText: options.confirmButtonText || "Yes, Delete",
    customClass: {
      confirmButton: "error",
    },
    onYes: options.onYes,
  });
};

export {
  toast,
  toastSuccess,
  toastWarning,
  toastResponse,
  toastError,
  showMessage,
  showResponseMessage,
  showSuccessMessage,
  showWarningMessage,
  showErrorMessage,
  confirm,
  saveConfirm,
  deleteConfirm,
};
