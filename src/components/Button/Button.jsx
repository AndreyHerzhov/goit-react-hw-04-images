import { LoadMoreButton } from "./Button.styled";
import PropTypes from "prop-types"

export const Button = ({title, loadMore}) =>  {
    return (
        <LoadMoreButton onClick={loadMore}>{title}</LoadMoreButton>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired,
};