import { useState } from "react";
import PlusIcon from "./PlusIcon";
import { latToPerNumbers } from "../helper/numbers";

import "./list-of-titles.scss";

const ListOfTitles = props => {
    // className: long | short
    const { list, title, className } = props;
    const [showList, setShowList] = useState(true);

    const createdListItems = list.map(
        (item, index) => 
            <a className="list-item" key={`list-item-${index}`} href={`#${item.anchorTitle}`}>
                {`${latToPerNumbers(index + 1)}. ${item.title}`}
            </a>
    );

    const onShowList = _e => {
        setShowList(!showList);
    };

    return (
        <div className={`list-of-titles ${className} ${showList ? "open" : "close"}`}>
            <div className="list-header cursor-pointer no-focus-active-outline" onClick={onShowList} onKeyDown={onShowList} tabIndex={0} role="button" aria-label="Toggle the list">
                { title } <PlusIcon className="light-color" open={showList} />
            </div>
            {
                showList && <div className="list-body">{ createdListItems }</div>
            }
        </div>
    )
}

export default ListOfTitles;
