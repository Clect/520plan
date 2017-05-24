import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions';
import { OtherStyle } from '../styles/filterableTable.scss';


class Other extends PureComponent {
    static propTypes = {
        filter: PropTypes.string,
        increase: PropTypes.func
    }

    constructor() {
        super();
        this.rrr = this.rrr.bind(this);
    }
    rrr() {
        increase();
    }
    render() {
        let filter = this.props.filter;
        let conter = this.props.conter;

        return (
            <div className={OtherStyle}>
                <p>{filter}</p>
                <button onClick={this.rrr}>123456</button>
                <h1>{conter}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        conter: state.conter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Other);
