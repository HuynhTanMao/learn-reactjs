import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;
    return (
        <div className="box" style={{ backgroundColor: color }}></div>
    );
}

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: propTypes.bool
}

ColorBox.defaultProps = {
    rounded: true
}

export default ColorBox;