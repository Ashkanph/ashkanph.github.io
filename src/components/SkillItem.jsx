import { useState } from "react";
import PlusIcon from "./PlusIcon";
import "./skill-item.scss";

const Stars = props => {
    const { stars } = props;

    if(stars == null)
        return null;

    return <span className="stars">
        {
            // Full stars
            new Array(Math.floor(stars)).fill("").map((_, index) => <i className='icon-star' key={`full-star-${index}`} />)
        }

        {
            // Half star
            stars % 1 !== 0  && <i className='icon-star-half-o' />
        }

        {
            // Empty stars
            new Array(Math.floor(5 - stars)).fill("").map(
                (_, index) => <i className='icon-star-o' key={`empty-star-${index}`} />
            )
        }
    </span>
}

const SkillItem = props => {
    const { item, skillTitle } = props;
    const [showSubs, setShowSubs] = useState(false);
    const onSkillClick = () => setShowSubs(!showSubs);

    return (
        <div className="skill-item">
            <div className={`skill-title ${ !!item.subs ? 'cursor-pointer' : '' } no-focus-active-outline`}  onKeyDown={onSkillClick} tabIndex={0} role="button" aria-label="Open details"
                 onClick={onSkillClick}>
                { 
                    !!item.subs && <PlusIcon open={showSubs} />
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
        </div>
    )
}

export default SkillItem;
