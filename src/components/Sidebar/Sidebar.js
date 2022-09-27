import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><i className="uil-home-alt"></i> Home</li>
                <li><i className="uil-money-insert"></i> Deposit</li>
                <li><i className="uil-money-withdraw"></i> Withdraw</li>
                <li><i className="uil-exchange"></i> Transfer</li>
                <li><i className="uil-bill"></i> Balance Inquiry</li>
                <li><i className="uil-users-alt"></i> Users Directory</li>
            </ul>
        </div>
);
}

export default Sidebar;