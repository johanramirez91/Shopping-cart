import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyCart extends Component {
    render() {
        const { inCart_phones, phones } = this.props;

        return (
            <div>
                {inCart_phones.length
                    ? inCart_phones.map(phone => (
                        <div key={phone} className="ui cards">
                            <div className="ui card centered">
                                <div className="content">
                                    <img
                                        src="/images/phone.png"
                                        className="ui mini right floated image"
                                        alt='phone.png'
                                    />
                                    <div className="header">{phones[phone].brand}</div>
                                    <div className="meta">$ {phones[phone].price}</div>
                                    <div className="description">
                                        {phones[phone].capacity}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <div className="ui two buttons">
                                        <button className="ui green basic button">Buy</button>
                                        <button className="ui red basic button">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : (
                        <div className="ui placeholder">No Phone in your cart...</div>
                    )}

            </div>
        )
    }
}
function mapStateToProps({ phones }) {
    return {
        phones,
    }
}

export default connect(mapStateToProps)(MyCart);