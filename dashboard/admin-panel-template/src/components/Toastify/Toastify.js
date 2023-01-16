import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyFetch = () => {
  toast("Items Fetched successfully!");
};
const notifyAdd = () => {
  toast("Item added successfully!");
};
const notifyDel = () => {
  toast("Item Deleted successfully!");
};
const notifyEdit = () => {
  toast("Item data has been sent to form successfully!");
};
const notifyUpdate = () => {
  toast("Item updated successfully!");
};

export { notifyFetch, notifyAdd, notifyDel, notifyEdit, notifyUpdate };
