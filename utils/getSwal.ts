import Swal from "sweetalert2/dist/sweetalert2";
import withReactContent from "sweetalert2-react-content";

/**
 * Gets the Swal instance
 * @returns {import("sweetalert2-react-content").SweetAlert2}
 */
export const getSwal = () => {
  return withReactContent(Swal);
};