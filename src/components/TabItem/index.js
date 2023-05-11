import './index.css'

const TabItem = props => {
    const { p, isTrue, activeTabFn } = props
    const { displayText, tabId } = p
    const activeBtn = () => {
        activeTabFn(tabId)
    }

    return (
        <li className="tab-item">
            <button type="button" onClick={activeBtn} className="tab-item-button">
                <h1 className={isTrue ? 'active-tab-style' : null}>{displayText}</h1>
            </button>
        </li>
    )
}

export default TabItem
