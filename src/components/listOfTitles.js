import * as React from "react";
import styled from 'styled-components';

import PlusIcon from "./plusIcon";
import { latToPerNumbers } from "../helper/numbers";

const ListOfTitlesEl = 
    styled.div`
        margin-top: 1.5rem;
        border-radius: 5px;
        background-color: var(--list-of-titles-bg);

        @media screen and (max-width: 520px){
            font-size: 14px;
            margin-bottom: 1rem;
        }

        @media print {
            display: none;
        }

        .list-title {
            padding: 10px 15px;
            background-color: #615a5a;
            color: #f5f5f5;
            border-radius: 5px;
            border-bottom-left-radius: ${props => props.showList ? '0' : '5px'};
            border-bottom-right-radius: ${props => props.showList ? '0' : '5px'};
            text-align: center;
        }

        .list-body {
            columns: 2;
            -webkit-columns: 2;
            -moz-columns: 2;
            color: #212121;
            padding: 10px;
            font-size: 14px;

            @media screen and (min-width: 677px) {
                columns: ${props => props.isBooks ? '3' : '4'};
                -webkit-columns: ${props => props.isBooks ? '3' : '4'};
                -moz-columns: ${props => props.isBooks ? '3' : '4'};
            }

            @media screen and (min-width: 870px) {
                columns: ${props => props.isBooks ? '4' : '6'};
                -webkit-columns: ${props => props.isBooks ? '4' : '6'};
                -moz-columns: ${props => props.isBooks ? '4' : '6'};
            }

            .list-item {
                line-height: 26px;
                display: block;
                color: var(--list-color);
                text-decoration: none;
            }
        }
    `;

const ListOfTitles = props => {
    const { list, title, isBooks } = props;
    const [showList, setShowList] = React.useState(true);

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
        <ListOfTitlesEl isBooks={isBooks} showList={showList}>
            <div className="list-title cursor-pointer no-focus-active-outline" onClick={onShowList} onKeyDown={onShowList} tabIndex={0} role="button" aria-label="Toggle the list">
                { title } <PlusIcon open={showList} color="#f5f5f5" />
            </div>
            {
                showList && <div className="list-body">{ createdListItems }</div>
            }
        </ListOfTitlesEl>
    )
}

export default ListOfTitles;