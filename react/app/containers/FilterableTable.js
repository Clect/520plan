import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { filterTable, increase } from '../actions';
import { filterableTable } from '../styles/filterableTable.scss';
import Other from './Other';

class FilterableTable extends PureComponent {
    constructor() {
        super();
        this.fff = this.fff.bind(this);
    }

    static propTypes = {
        filter: PropTypes.string,
        conter: PropTypes.number,
        onFilter: PropTypes.func,
        increase: PropTypes.func
    }

    fff() {
        console.log('fff');
        increase();
    }

    render() {
        let input;
        const conter = this.props.conter;
        const filter = this.props.filter;
        const onFilter = this.props.onFilter;

        return (
            <div className={filterableTable}>
                <input
                    value={filter}
                    ref={node => {input = node;}}
                    onChange={() => onFilter(input.value)} />
                <p>{filter}</p>
                <button onClick={this.fff}>
                    +++
                </button>
                <p>{conter}</p>
                <Other />
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
        onFilter: filterText => dispatch(filterTable(filterText)),
        increase: () => dispatch(increase())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
