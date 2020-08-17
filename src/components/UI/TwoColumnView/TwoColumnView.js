import React from 'react';

// Components
import Column from '../Column/Column';

// CSS
import classes from './TwoColumnView.module.css'

const twoColumnView = (props) => {
    return (
        <div className={["container", classes.Main].join(' ')}>
            <div className="row">
                <Column 
                    customClasses={["MainCenter"]}
                >
                    {props.mainContent}
                </Column>
                <Column 
                    customClasses={["MainRight"]}
                >
                    {props.sideContent}
                </Column>
            </div>
        </div>
    );
}

export default twoColumnView;