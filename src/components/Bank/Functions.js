import './Functions.css';

function Functions() {
    return(
        <div className="functions">
            <ul>
                <li><button><i className="uil-money-insert"></i></button><p>Deposit</p></li>
                <li><button><i className="uil-money-withdraw"></i></button><p>Withdraw</p></li>
                <li><button><i className="uil-exchange"></i></button><p>Transfer</p></li>
                <li><button><i className="uil-bill"></i></button><p>Balance Inquiry</p></li>
                <li><button><i className="uil-users-alt"></i></button><p>Users Directory</p></li>
            </ul>
        </div>
    )
}

export default Functions;