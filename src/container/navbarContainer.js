import { connect } from "react-redux";
import Navbar from "../components/navbar";

const mapStateToProps = (state) => ({
  amount: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
// export default Navbar;
