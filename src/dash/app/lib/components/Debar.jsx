import React, {Component, PropTypes} from "react";

function getRelativeValue(value, min, max) {
    const clampedValue = Math.min(Math.max(min, value), max);
    const rangeValue = max - min;
    const relValue = Math.round((clampedValue - min) / rangeValue * 10000) / 10000;
    return relValue * 100;
}

function getStyles(props, context) {
    const {
        max,
        min,
        start,
        end
    } = props;

    const {baseTheme: {palette}} = context.muiTheme;

    const styles = {
        root: {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            height: '30px',
            width: '100%',
            backgroundColor: palette.primary3Color,
            borderRadius: 0,
            margin: 0,
            overflow: 'hidden',
        },
        bar: {
            position: 'absolute',
            height: '100%',
            left: `${getRelativeValue(start, min, max)}%`,
            right: `${100-getRelativeValue(end, min, max)}%`,
            backgroundColor: props.color || palette.primary1Color
        },
        label: {
            zIndex: 1
        }
    };

    return styles;
}

class Debar extends Component {

    static propTypes = {
        color: PropTypes.string,
        style: PropTypes.object,
        min: PropTypes.number,
        max: PropTypes.number,
        start: PropTypes.number,
        end: PropTypes.number,
        label: PropTypes.string
    };

    static defaultProps = {
        min: 0,
        max: 100,
        start: 0,
        end: 100,
        label: ""
    };

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };

    render() {
        const {
            style,
            label,
            ...other
        } = this.props;

        const {prepareStyles} = this.context.muiTheme;
        const styles = getStyles(this.props, this.context);

        return (
            <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
                <div style={prepareStyles(styles.bar)}/>
                <span style={prepareStyles(styles.label)}>{label}</span>
            </div>
        );
    }
}

export default Debar;
