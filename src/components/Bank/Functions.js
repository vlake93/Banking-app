import './Functions.css';
import deposit from "../../assets/deposit.png";
import withdraw from "../../assets/withdraw.png";
import transfer from "../../assets/transfer.png";
import balance from "../../assets/balance.png";
import users from "../../assets/users.png";

function Functions() {
    return(
        <div className="functions">
            <ul>
                <li><button><img src={deposit} className="deposit"></img></button><p>Deposit</p></li>
                <li><button><img src={withdraw} className="withdraw"></img></button><p>Withdraw</p></li>
                <li><button><img src={transfer} className="transfer"></img></button><p>Transfer</p></li>
                <li><button><img src={balance} className="balance"></img></button><p>Balance Inquiry</p></li>
                <li><button><img src={users} className="users"></img></button><p>Users Directory</p></li>
            </ul>
        </div>
    )
}

export default Functions;