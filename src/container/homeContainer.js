import { connect } from "react-redux";
import SingleProduct from "../components/singleProduct";
import { cartValue } from "../services/action/action";

const mapStateToProps = (state) => ({
  amount: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({
    cartValue: (amount) => dispatch(cartValue(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
// export default Navbar;
