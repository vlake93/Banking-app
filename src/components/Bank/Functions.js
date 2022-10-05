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
                <li><button><img src={deposit} className="deposit" alt='deposit'></img></button><p>Deposit</p></li>
                <li><button><img src={withdraw} className="withdraw" alt='withdraw'></img></button><p>Withdraw</p></li>
                <li><button><img src={transfer} className="transfer" alt='transfer'></img></button><p>Transfer</p></li>
                <li><button><img src={balance} className="balance" alt='balance'></img></button><p>Balance Inquiry</p></li>
                <li><button><img src={users} className="users" alt='users'></img></button><p>Users Directory</p></li>
            </ul>
        </div>
    )
}

export default Functions;