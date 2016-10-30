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
            backgroundColor: props.backgroundColor || palette.primary3Color,
            borderRadius: 3,
            margin: 0,
            overflow: 'hidden',
            marginBottom: '1px',
            fontWeight: props.labelBold ? 'bold' : 'normal'
        },
        bar: {
            position: 'absolute',
            height: '100%',
            left: `${getRelativeValue(start, min, max)}%`,
            right: `${100 - getRelativeValue(end, min, max)}%`,
            backgroundColor: props.color || palette.primary1Color,
            borderRadius: 3
        },
        label: {
            zIndex: 1,
        }
    };

    if (props.background) {
        styles.root.background = props.background;
    }
    if (props.barBackground) {
        styles.bar.background = props.barBackground;
    }
    if (props.labelMargin) {
        styles.label.marginLeft = props.labelMargin;
    }

    return styles;
}

class Debar extends Component {

    static propTypes = {
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        style: PropTypes.object,
        min: PropTypes.number,
        max: PropTypes.number,
        start: PropTypes.number,
        end: PropTypes.number,
        label: PropTypes.string,
        labelMargin: PropTypes.number,
        labelBold: PropTypes.bool,
        background: PropTypes.string,
        barBackground: PropTypes.string
    };

    static defaultProps = {
        min: 0,
        max: 100,
        start: 0,
        end: 100,
        label: "",
        labelMargin: 10,
        labelBold: false,
        background: null
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
