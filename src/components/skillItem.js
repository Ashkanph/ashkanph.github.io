import * as React from "react";
import styled from 'styled-components';

import PlusIcon from "./plusIcon";

const StarsEl = 
    styled.span`
        padding: 0 15px;
        color: #ef9b0f;
        vertical-align: sub;
        font-size: 20px;
        font-family: "myIconFont" !important;
    `;

const Stars = props => {
    const { stars } = props;

    if(stars == null)
        return null;
    
    return <StarsEl>
        {
            // Draw full stars
            new Array(Math.floor(stars)).fill("").map((_, index) => <i className='icon-star' key={`full-star-${index}`} />)
        }

        {
            // Draw harlf stars
            stars % 1 !== 0  && <i className='icon-star-half-o' />
        }

        {
            // Draw empty stars
            new Array(Math.floor(5 - stars)).fill("").map(
                (_, index) => <i className='icon-star-o' key={`empty-star-${index}`} />
            )
        }
    </StarsEl>
}

const SkillItemEl = 
    styled.div`
        color: var(--font-color);
        margin-bottom: 10px;

        .skill-title {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--font-color);

            .text {
                padding-top: 6px;
                font-weight: 700;

                &.left-space {
                    margin-left: 38px;
                }
            }
        }

        .skill-sub {
            padding-left: 38px;
            padding-top: 7px;

            &-item {
                padding-bottom: 3px;
                display: flex;

                i {
                    margin-right: 6px;
                    color: var(--ref-color);
                }
            }
        }
    `;


const SkillItem = props => {
    const { item, skillTitle } = props;
    const [showSubs, setShowSubs] = React.useState(false);
    const onSkillClick = () => setShowSubs(!showSubs);

    return (
        <SkillItemEl>
            <div className={`skill-title ${ !!item.subs ? 'cursor-pointer' : '' } no-focus-active-outline`}  onKeyDown={onSkillClick} tabIndex={0} role="button" aria-label="Open details"
                 onClick={onSkillClick}>
                { 
                    !!item.subs && <PlusIcon open={showSubs} color="var(--font-color)" />
                }
                <span className={`text ${ !!item.subs ? '' : 'left-space'}`}>{ skillTitle }</span>
                <Stars stars={ item.stars } />
            </div>
            <div className="skill-sub">
                {
                    !!item.subs && showSubs &&
                        item.subs.map(
                            (subItem, subIndex) => 
                                <div className="skill-sub-item" key={`skill-sub-${subIndex}`}>
                                    <i className="icon-check-square" />
                                    { subItem }
                                </div>
                        )
                }
            </div>
        </SkillItemEl>
    )
}

export default SkillItem;