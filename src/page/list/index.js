import React from 'react';
import {Table} from 'antd';
import {connect} from 'dva';

function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
    }
}

class List extends React.Component {
    render() {
        return(
            <div>
                hello world!
            </div>
        )
    }
}

export default List;
// export default connect(mapStateToProps)(List);